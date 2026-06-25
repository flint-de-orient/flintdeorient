import { useEffect } from "react";

// ── Site-wide SEO constants ────────────────────────────────────────────────
export const SITE_URL = "https://flintdeorient.in";
export const SITE_NAME = "Flint De Orient";
export const DEFAULT_TITLE =
  "Flint De Orient — Automation, ERP & Software Solutions in Kolkata";
export const DEFAULT_DESCRIPTION =
  "Flint De Orient builds business automation, ERP, CRM, custom software, AI solutions, and digital marketing for ambitious teams. Based in Kolkata, serving worldwide.";
export const OG_IMAGE = `${SITE_URL}/og-image.png`;

// Organization schema reused across the site (logo, contact, socials).
export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/flint-logo.png`,
  description: DEFAULT_DESCRIPTION,
  email: "hello@flintdeorient.com",
  telephone: "+91-8777654651",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit 320, PS Abacus, New Town",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    postalCode: "700161",
    addressCountry: "IN",
  },
  sameAs: [
    "https://instagram.com/flint_de_orient",
    "https://facebook.com/flintdeorient",
    "https://www.linkedin.com/company/flint-de-orient",
  ],
};

// ── Helpers ────────────────────────────────────────────────────────────────
const upsertMeta = (selector: string, attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const upsertLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const JSONLD_ID = "page-jsonld";
const setJsonLd = (data: unknown | null) => {
  const existing = document.getElementById(JSONLD_ID);
  if (existing) existing.remove();
  if (!data) return;
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = JSONLD_ID;
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

export interface SEOOptions {
  title?: string;
  description?: string;
  /** Canonical path, e.g. "/about". Defaults to the current pathname. */
  path?: string;
  image?: string;
  type?: "website" | "article" | "profile";
  noindex?: boolean;
  /** When false, the title is used verbatim (no "— Flint De Orient" suffix). */
  suffix?: boolean;
  jsonLd?: unknown;
}

/**
 * Imperatively manages document title, description, canonical, Open Graph /
 * Twitter tags, robots, and an optional JSON-LD block for the current route.
 * Used per-page so client-side navigation keeps metadata accurate.
 */
export const useSEO = (opts: SEOOptions = {}) => {
  const {
    title,
    description = DEFAULT_DESCRIPTION,
    path,
    image = OG_IMAGE,
    type = "website",
    noindex = false,
    suffix = true,
    jsonLd = null,
  } = opts;

  // Stable dependency so object literals don't retrigger every render.
  const jsonLdKey = jsonLd ? JSON.stringify(jsonLd) : "";

  useEffect(() => {
    const fullTitle = title
      ? suffix
        ? `${title} — ${SITE_NAME}`
        : title
      : DEFAULT_TITLE;
    const canonical = `${SITE_URL}${path ?? window.location.pathname}`;

    document.title = fullTitle;
    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[name="robots"]', "name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    upsertLink("canonical", canonical);

    // Open Graph
    upsertMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:url"]', "property", "og:url", canonical);
    upsertMeta('meta[property="og:image"]', "property", "og:image", image);
    upsertMeta('meta[property="og:type"]', "property", "og:type", type);
    upsertMeta('meta[property="og:site_name"]', "property", "og:site_name", SITE_NAME);

    // Twitter
    upsertMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", image);

    setJsonLd(jsonLd ? JSON.parse(jsonLdKey) : null);

    return () => setJsonLd(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, path, image, type, noindex, suffix, jsonLdKey]);
};
