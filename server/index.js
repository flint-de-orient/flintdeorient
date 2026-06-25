import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const {
  GMAIL_USER,
  GMAIL_APP_PASSWORD,
  ADMIN_EMAIL,
  WEBSITE_URL = "https://flintdeorient.com",
  PORT = 3001,
} = process.env;

if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
  console.error(
    "\n[config] Missing GMAIL_USER or GMAIL_APP_PASSWORD in .env — emails cannot be sent.\n" +
      "Create a .env file (see .env.example) before starting the server.\n"
  );
}

const adminInbox = ADMIN_EMAIL || GMAIL_USER;

// Reusable SMTP transport authenticated as the Gmail account.
// Gmail signs outgoing mail with SPF + DKIM for gmail.com automatically,
// which is what keeps these messages out of spam.
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
});

// --- helpers ---------------------------------------------------------------

const templateDir = path.join(__dirname, "templates");
const logoPath = path.join(__dirname, "assets", "logo.png");

const loadTemplate = (file) =>
  fs.readFileSync(path.join(templateDir, file), "utf-8");

// Escape user-supplied values before injecting into HTML to prevent
// broken markup / HTML injection in the email body.
const escapeHtml = (str = "") =>
  String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const fill = (template, data) =>
  template.replace(/{{\s*(\w+)\s*}}/g, (_, key) =>
    key in data ? data[key] : ""
  );

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || "");

// Logo embedded inline (CID) so it always renders and there is no broken
// external image — a broken/hot-linked image hurts deliverability.
const logoAttachment = {
  filename: "logo.png",
  path: logoPath,
  cid: "flintlogo",
};

// --- routes ----------------------------------------------------------------

const app = express();
app.use(cors());
app.use(express.json({ limit: "100kb" }));

app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.post("/api/contact", async (req, res) => {
  const name = (req.body?.name || "").trim();
  const email = (req.body?.email || "").trim();
  const phone = (req.body?.phone || "").trim();
  const message = (req.body?.message || "").trim();

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ ok: false, error: "Name, email and project details are required." });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ ok: false, error: "Please enter a valid email address." });
  }

  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    phone: escapeHtml(phone || "Not provided"),
    project_details: escapeHtml(message),
    website_url: WEBSITE_URL,
  };

  try {
    // 1) Notification to the business inbox.
    //    replyTo = the lead's address, so hitting "Reply" answers the customer.
    const adminHtml = fill(loadTemplate("admin_notification.html"), safe);
    await transporter.sendMail({
      from: `"Flint De Orient Website" <${GMAIL_USER}>`,
      to: adminInbox,
      replyTo: `"${name}" <${email}>`,
      subject: `New project inquiry from ${name}`,
      html: adminHtml,
      text:
        `New project inquiry from the website\n\n` +
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\n` +
        `Project Description:\n${message}\n`,
      attachments: [logoAttachment],
    });

    // 2) Confirmation / thank-you to the user.
    //    Personal one-to-one transactional mail with a plain-text part keeps
    //    it in the Primary tab rather than Promotions/Spam.
    const userHtml = fill(loadTemplate("user_thankyou.html"), safe);
    await transporter.sendMail({
      from: `"Flint De Orient" <${GMAIL_USER}>`,
      to: email,
      replyTo: GMAIL_USER,
      subject: "Thank you for contacting Flint De Orient",
      html: userHtml,
      text:
        `Dear ${name},\n\n` +
        `We have received your project details. Our team at Flint De Orient is reviewing your ` +
        `requirements and will get back to you within 24 hours.\n\n` +
        `We look forward to bringing your vision to life.\n\n` +
        `Visit us: ${WEBSITE_URL}\n\n` +
        `— Flint De Orient`,
      attachments: [logoAttachment],
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error("[mail] send failed:", err?.message || err);
    return res
      .status(500)
      .json({ ok: false, error: "Could not send your message. Please try again later." });
  }
});

app.listen(PORT, () => {
  console.log(`[server] Contact API listening on http://localhost:${PORT}`);
  console.log(`[server] Sending as: ${GMAIL_USER || "(not configured)"}`);
  console.log(`[server] Admin inbox: ${adminInbox || "(not configured)"}`);
});
