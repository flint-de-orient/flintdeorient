import { Hotel, Hospital, Package, Truck, ShoppingBag, Calculator, Users2, Briefcase, Building2, Brain, FlaskConical, Bot, Sparkles, GraduationCap, School as SchoolIcon, type LucideIcon } from "lucide-react";

export interface Product {
  slug: string;
  icon: LucideIcon;
  name: string;
  desc: string;
  blog: {
    tagline: string;
    intro: string;
    sections: { heading: string; body: string }[];
    benefits: string[];
    cta: string;
  };
}

export const products: Product[] = [
  {
    slug: "ai-ml-suite",
    icon: Brain,
    name: "AI & ML Suite",
    desc: "Production-ready AI/ML products and solutions for any industry.",
    blog: {
      tagline: "Enterprise-grade Artificial Intelligence, ready to deploy.",
      intro:
        "Our AI & ML Suite brings together everything modern businesses need to operationalize machine learning — from data pipelines and model training to deployment, monitoring, and continuous improvement.",
      sections: [
        { heading: "Built for production", body: "Every model in the suite is wrapped in a hardened serving layer with autoscaling, observability, and rollback support, so teams can ship AI features the same day they're approved." },
        { heading: "Industry-tuned models", body: "Pre-trained baselines for retail, healthcare, finance, logistics, and hospitality dramatically reduce time-to-value, while still allowing fine-tuning on your proprietary data." },
        { heading: "Governance & safety", body: "Built-in evaluation harnesses, drift detection, and audit trails ensure your AI behaves predictably and meets regulatory requirements." },
      ],
      benefits: ["80% faster model deployment", "Reusable pipelines across teams", "Lower infrastructure costs", "Built-in compliance & audit"],
      cta: "Talk to our AI team to see the suite in action.",
    },
  },
  {
    slug: "ai-research-lab",
    icon: FlaskConical,
    name: "AI Research Lab",
    desc: "Applied AI/ML research, experimentation & rapid prototyping.",
    blog: {
      tagline: "Where bold AI ideas become working prototypes.",
      intro:
        "The AI Research Lab is a dedicated team and toolchain for exploring frontier AI techniques and translating them into prototypes you can demo, test, and validate with real users in weeks — not quarters.",
      sections: [
        { heading: "Applied research, not academic", body: "Every experiment is scoped to a business question. We measure success in user impact, not just benchmarks." },
        { heading: "Rapid prototyping", body: "Modular notebooks, evaluation harnesses, and synthetic data generation let our researchers iterate on ideas in days." },
        { heading: "From lab to product", body: "Promising prototypes graduate seamlessly into the AI & ML Suite for hardening and production rollout." },
      ],
      benefits: ["Frontier model evaluation", "Domain-specific fine-tuning", "Hypothesis-driven roadmaps", "Clear go/no-go decisions"],
      cta: "Bring us your hardest AI problem.",
    },
  },
  {
    slug: "chatbot-studio",
    icon: Bot,
    name: "Chatbot Studio",
    desc: "Custom AI chatbots with RAG and multi-channel deployment.",
    blog: {
      tagline: "Conversational AI your customers actually enjoy.",
      intro:
        "Chatbot Studio is a no-compromise platform for designing, training, and deploying intelligent chatbots powered by large language models and retrieval-augmented generation over your own knowledge base.",
      sections: [
        { heading: "Grounded in your data", body: "RAG pipelines connect to your docs, CRM, and product catalog so answers are accurate, current, and on-brand." },
        { heading: "Deploy anywhere", body: "Web, WhatsApp, Messenger, Slack, Teams, voice — one bot, every channel, with consistent personality." },
        { heading: "Built-in analytics", body: "Track resolution rate, escalation patterns, and satisfaction to keep improving the experience over time." },
      ],
      benefits: ["24/7 customer support", "70% deflection of repetitive queries", "Multilingual out of the box", "Seamless human handoff"],
      cta: "Launch your first AI assistant in days.",
    },
  },
  {
    slug: "ai-agents",
    icon: Sparkles,
    name: "AI Agents",
    desc: "Design and deploy autonomous, tool-using AI agents at scale.",
    blog: {
      tagline: "Autonomous workers for your most repetitive workflows.",
      intro:
        "AI Agents go beyond chatbots — they plan, call tools, query systems, and complete multi-step tasks on behalf of your team, freeing humans to focus on creative and strategic work.",
      sections: [
        { heading: "Tool-using by design", body: "Agents securely connect to APIs, databases, and SaaS apps to actually get work done — not just talk about it." },
        { heading: "Safe autonomy", body: "Guardrails, approval flows, and full audit logs ensure every action is traceable and within policy." },
        { heading: "Scales to thousands", body: "Run an army of specialized agents in parallel for sales outreach, ops monitoring, research, and back-office automation." },
      ],
      benefits: ["End-to-end task automation", "Human-in-the-loop controls", "Composable agent skills", "Enterprise-grade security"],
      cta: "Identify your first agent use case with us.",
    },
  },
  {
    slug: "hotel",
    icon: Hotel,
    name: "Hotel",
    desc: "End-to-end hotel management & bookings.",
    blog: {
      tagline: "Run a modern property from a single dashboard.",
      intro:
        "Our Hotel platform unifies front-desk, reservations, housekeeping, F&B, and revenue management into one intuitive system designed for independent hotels and growing chains alike.",
      sections: [
        { heading: "Direct + OTA bookings", body: "A connected booking engine and channel manager keep rates and inventory in sync across your website, Booking.com, Expedia, and more." },
        { heading: "Guest experience", body: "Mobile check-in, digital keys, and personalized upsells delight guests while reducing front-desk load." },
        { heading: "Smart pricing", body: "Built-in revenue management suggests rates based on occupancy, demand, and competitor data." },
      ],
      benefits: ["Higher direct booking share", "Reduced no-shows", "Faster check-in/out", "Real-time occupancy insights"],
      cta: "See how leading hotels run on our platform.",
    },
  },
  {
    slug: "hospital",
    icon: Hospital,
    name: "Hospital",
    desc: "Patient records, OPD, IPD & billing.",
    blog: {
      tagline: "A hospital information system clinicians actually like.",
      intro:
        "Our Hospital platform brings electronic medical records, OPD/IPD workflows, pharmacy, lab, radiology, and billing into one secure, compliant solution.",
      sections: [
        { heading: "Clinician-first EMR", body: "Fast charting, smart templates, and voice input let doctors spend more time with patients and less time on screens." },
        { heading: "End-to-end operations", body: "From admission to discharge, every department works from the same source of truth — including pharmacy and insurance claims." },
        { heading: "Compliance built in", body: "HIPAA-ready, role-based access, and full audit trails keep patient data safe." },
      ],
      benefits: ["Faster patient throughput", "Cleaner insurance claims", "Reduced medication errors", "Unified patient record"],
      cta: "Modernize your hospital with confidence.",
    },
  },
  {
    slug: "inventory",
    icon: Package,
    name: "Inventory",
    desc: "Real-time inventory & warehouse control.",
    blog: {
      tagline: "Always know what you have, where, and why.",
      intro:
        "Our Inventory platform gives you real-time visibility across warehouses, stores, and in-transit stock — with the automation to keep shelves full and capital efficient.",
      sections: [
        { heading: "Multi-location stock", body: "Track every SKU across every location with live updates from barcode scanners, POS, and integrations." },
        { heading: "Smart replenishment", body: "Forecasts demand and automates purchase orders so you never overstock or run out." },
        { heading: "Warehouse workflows", body: "Pick, pack, and ship with mobile-first flows and configurable rules." },
      ],
      benefits: ["Lower carrying costs", "Fewer stockouts", "Accurate audits", "Faster fulfillment"],
      cta: "Take control of your inventory today.",
    },
  },
  {
    slug: "transport",
    icon: Truck,
    name: "Transport",
    desc: "Fleet, dispatch & logistics tracking.",
    blog: {
      tagline: "Move more with less — every shipment, every mile.",
      intro:
        "Our Transport platform helps logistics businesses dispatch smarter, track in real time, and bill accurately — across fleets of any size.",
      sections: [
        { heading: "Live fleet visibility", body: "GPS tracking, route optimization, and ETAs keep dispatchers, drivers, and customers in sync." },
        { heading: "Automated documentation", body: "E-PODs, invoicing, and compliance docs are generated automatically from trip data." },
        { heading: "Driver-friendly app", body: "Drivers get a clean mobile app for trips, expenses, and proof of delivery." },
      ],
      benefits: ["Optimized routes save fuel", "Faster billing cycles", "Fewer disputes", "Higher fleet utilization"],
      cta: "Run your logistics like clockwork.",
    },
  },
  {
    slug: "ecommerce",
    icon: ShoppingBag,
    name: "eCommerce",
    desc: "Modern storefronts with full backend.",
    blog: {
      tagline: "Beautiful storefronts, powerful operations.",
      intro:
        "Our eCommerce platform combines fast, conversion-optimized storefronts with a full operational backend — catalog, orders, payments, shipping, and analytics.",
      sections: [
        { heading: "Conversion-first design", body: "Pre-built themes engineered for speed, mobile, and SEO out of the box." },
        { heading: "Unified back office", body: "Orders, inventory, customers, and marketing all in one place — no more spreadsheet juggling." },
        { heading: "Grow with confidence", body: "Built-in marketing automation, abandoned cart recovery, and loyalty tools drive repeat revenue." },
      ],
      benefits: ["Faster page loads", "Higher conversion rates", "Streamlined fulfillment", "Built-in marketing"],
      cta: "Launch a store that sells while you sleep.",
    },
  },
  {
    slug: "accounts",
    icon: Calculator,
    name: "Accounts",
    desc: "GST-ready accounting & financials.",
    blog: {
      tagline: "Compliant accounting without the spreadsheet pain.",
      intro:
        "Our Accounts platform handles GST, invoicing, ledgers, payroll, and financial reporting — designed for Indian businesses but flexible enough for any tax regime.",
      sections: [
        { heading: "GST-ready", body: "Auto-generated invoices, e-way bills, and GSTR filings keep you compliant with zero manual work." },
        { heading: "Real-time financials", body: "P&L, balance sheet, and cash flow updated as transactions happen — not at month-end." },
        { heading: "Multi-entity support", body: "Manage multiple businesses, branches, and currencies from one login." },
      ],
      benefits: ["On-time GST filings", "Accurate books", "Faster month-end close", "Audit-ready reports"],
      cta: "Bring clarity to your books.",
    },
  },
  {
    slug: "crm",
    icon: Users2,
    name: "CRM",
    desc: "Leads, pipeline & customer journeys.",
    blog: {
      tagline: "Turn every interaction into revenue.",
      intro:
        "Our CRM unifies leads, deals, and customer interactions across email, calls, WhatsApp, and meetings — with automation that keeps reps focused on closing.",
      sections: [
        { heading: "Visual pipeline", body: "Drag-and-drop deal stages, customizable per team, with forecasting baked in." },
        { heading: "Conversation history", body: "Every email, call, and chat logged automatically against the right contact." },
        { heading: "Workflow automation", body: "Auto-assign leads, trigger follow-ups, and nurture cold prospects without lifting a finger." },
      ],
      benefits: ["Higher win rates", "Shorter sales cycles", "No leads slip through", "Accurate forecasts"],
      cta: "Give your sales team an unfair advantage.",
    },
  },
  {
    slug: "hrm",
    icon: Briefcase,
    name: "HRM",
    desc: "Payroll, attendance & employee lifecycle.",
    blog: {
      tagline: "People operations, simplified.",
      intro:
        "Our HRM platform manages the entire employee lifecycle — from hiring and onboarding to attendance, payroll, performance, and offboarding.",
      sections: [
        { heading: "Self-service for everyone", body: "Employees apply for leave, view payslips, and update info themselves — freeing HR for strategic work." },
        { heading: "Compliant payroll", body: "Auto-calculate PF, ESI, TDS, and statutory deductions with zero manual errors." },
        { heading: "Performance management", body: "OKRs, 360 reviews, and continuous feedback in one platform." },
      ],
      benefits: ["Error-free payroll", "Higher employee engagement", "Faster onboarding", "Compliant by default"],
      cta: "Build an HR engine that scales with you.",
    },
  },
  {
    slug: "real-estate",
    icon: Building2,
    name: "Real Estate",
    desc: "Listings, leads & site visit management.",
    blog: {
      tagline: "Sell more units with less chaos.",
      intro:
        "Our Real Estate platform helps developers and brokers manage projects, listings, leads, site visits, bookings, and post-sale handover — in one place.",
      sections: [
        { heading: "Lead-to-booking funnel", body: "Capture leads from every channel, route them to the right agent, and track every touchpoint to closure." },
        { heading: "Inventory & pricing", body: "Live unit availability and dynamic pricing across projects, towers, and floors." },
        { heading: "Customer portal", body: "Buyers track payments, documents, and construction progress from a branded portal." },
      ],
      benefits: ["Higher lead conversion", "Faster booking process", "Transparent customer experience", "Real-time inventory view"],
      cta: "Sell your next project the modern way.",
    },
  },
  {
    slug: "school",
    icon: SchoolIcon,
    name: "School",
    desc: "Admissions, attendance, exams & parent engagement.",
    blog: {
      tagline: "A modern operating system for K–12 schools.",
      intro:
        "Our School platform brings admissions, academics, attendance, exams, fees, transport, and parent communication into one secure, easy-to-use system — designed for principals, teachers, students, and parents alike.",
      sections: [
        { heading: "Academics made simple", body: "Timetables, lesson plans, assignments, and gradebooks help teachers focus on teaching while keeping records organized and accessible." },
        { heading: "Parents in the loop", body: "A dedicated parent app shares attendance, marks, homework, fee dues, and announcements in real time — building trust and engagement." },
        { heading: "Operations on autopilot", body: "Fee collection, transport routes, library, and hostel management run smoothly with automation and clear dashboards for administrators." },
      ],
      benefits: ["Paperless admissions", "Real-time parent updates", "Automated fee reminders", "Insights for school leadership"],
      cta: "Modernize your school with one trusted platform.",
    },
  },
  {
    slug: "college",
    icon: GraduationCap,
    name: "College",
    desc: "Admissions, courses, attendance & examination management.",
    blog: {
      tagline: "Run your college or university with clarity and control.",
      intro:
        "Our College platform handles the full higher-education lifecycle — from online admissions and course registration to attendance, internal assessments, examinations, results, and alumni engagement.",
      sections: [
        { heading: "End-to-end admissions", body: "Online applications, document verification, merit lists, counseling, and seat allotment — all managed from a single dashboard." },
        { heading: "Academic management", body: "Multi-program, multi-semester support with credit-based grading, elective management, and faculty workload planning." },
        { heading: "Examinations & results", body: "Hall ticket generation, internal/external marks, moderation workflows, and instant result publishing with analytics." },
      ],
      benefits: ["Faster admission cycles", "Accurate result processing", "Higher faculty productivity", "Stronger alumni network"],
      cta: "Empower your institution with the right platform.",
    },
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
