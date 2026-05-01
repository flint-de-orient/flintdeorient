import { useState } from "react";
import { Search, Share2, FileText, Brain, FlaskConical, Bot, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Brain, title: "AI & ML Products and Solutions", desc: "Production-ready AI/ML platforms tailored to your business problems and data." },
  { icon: FlaskConical, title: "AI/ML Research and Development", desc: "Applied research, model experimentation, and prototyping for cutting-edge use cases." },
  { icon: Bot, title: "Custom AI Chatbot Development", desc: "Domain-trained chatbots with RAG, knowledge bases, and seamless channel integrations." },
  { icon: Sparkles, title: "AI Agent Design and Deployment", desc: "Autonomous, tool-using agents designed, evaluated, and deployed at scale." },
  { icon: Search, title: "Search Engine Optimization", desc: "On-page & off-page SEO strategies with keyword-optimized content that ranks." },
  { icon: Share2, title: "Social Media Marketing", desc: "Engagement-driven campaigns across Facebook, Instagram, and LinkedIn." },
  { icon: FileText, title: "Content Marketing & Automation", desc: "Plagiarism-free expert content that drives traffic and converts visitors." },
];

const allServices: { category: string; items: { name: string; desc: string }[] }[] = [
  {
    category: "Marketing",
    items: [
      { name: "Content Marketing", desc: "Strategic content that attracts, engages, and converts your target audience." },
      { name: "Social Media Marketing", desc: "Brand-building campaigns across Facebook, Instagram, LinkedIn, and X." },
      { name: "Email Marketing", desc: "Automated nurture sequences and newsletters that drive repeat revenue." },
      { name: "Pay-Per-Click (PPC) Advertising", desc: "ROI-focused Google & Meta ad campaigns with continuous optimization." },
      { name: "Search Engine Optimization", desc: "On-page, off-page, and technical SEO to rank for high-intent keywords." },
      { name: "Lead Generation", desc: "Qualified B2B and B2C leads via funnels, outreach, and landing pages." },
      { name: "Public Relations (PR)", desc: "Media outreach and press coverage to amplify your brand story." },
      { name: "Branding and Strategy", desc: "Positioning, messaging, and visual identity that sets you apart." },
      { name: "Influencer Marketing", desc: "Creator partnerships that drive authentic reach and conversions." },
    ],
  },
  {
    category: "Developments",
    items: [
      { name: "Website Development", desc: "Fast, responsive, SEO-friendly websites built on modern stacks." },
      { name: "Custom Software", desc: "Tailored business software designed around your unique workflows." },
      { name: "Mobile App Development", desc: "Native and cross-platform apps for iOS and Android." },
      { name: "DevOps Services", desc: "CI/CD, infrastructure-as-code, and cloud automation for reliable releases." },
      { name: "Enterprise Software", desc: "Scalable ERP, CRM, and internal tools for large organizations." },
      { name: "API Development & Integration", desc: "Robust REST/GraphQL APIs and third-party system integrations." },
      { name: "E-commerce Development", desc: "High-converting online stores with secure payments and logistics." },
      { name: "AI and Machine Learning", desc: "Custom ML models, predictive analytics, and intelligent automation." },
      { name: "Internet of Things (IoT)", desc: "Connected device platforms with real-time dashboards and control." },
    ],
  },
  {
    category: "Business",
    items: [
      { name: "Translation Service", desc: "Accurate, localized translations across major global languages." },
      { name: "Content Writing", desc: "SEO-optimized blogs, web copy, and technical documentation." },
      { name: "Consulting Services", desc: "Strategic guidance on growth, technology, and digital transformation." },
      { name: "Cloud Services", desc: "AWS, Azure, and GCP setup, migration, and managed operations." },
      { name: "Data Analytics and Business Intelligence", desc: "Dashboards and insights that turn raw data into decisions." },
      { name: "Analytics and Reporting", desc: "KPI tracking, attribution, and executive-ready performance reports." },
      { name: "Maintenance and Support", desc: "Ongoing monitoring, updates, and 24/7 technical support." },
    ],
  },
  {
    category: "Design",
    items: [
      { name: "Presentation Design", desc: "Investor decks and corporate slides that tell a compelling story." },
      { name: "UI / UX Design", desc: "User-centric interfaces backed by research and usability testing." },
      { name: "Website Design / Web Development", desc: "Beautiful, conversion-focused web experiences end-to-end." },
    ],
  },
  {
    category: "Training",
    items: [
      { name: "Consulting and Training", desc: "Hands-on workshops and advisory for teams adopting new tech." },
      { name: "Software Testing and Quality Assurance", desc: "Manual and automated QA to ship bug-free, reliable software." },
    ],
  },
];

export const MarketingServices = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4">AI, ML & Digital Marketing</p>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Services that <span className="text-gradient-gold">deliver intelligence</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 shadow-glow-gold">
                <s.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="hero"
            size="lg"
            onClick={() => setShowAll((v) => !v)}
            aria-expanded={showAll}
            aria-controls="all-services"
          >
            {showAll ? "Hide All Services" : "Explore All Services"}
            <ChevronDown
              size={18}
              className={`ml-1 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
            />
          </Button>
        </div>

        <div
          id="all-services"
          className={`grid transition-all duration-500 ease-in-out ${
            showAll ? "grid-rows-[1fr] opacity-100 mt-12" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {allServices.map((group) => (
                  <div key={group.category}>
                    <h3 className="text-lg font-bold mb-5 pb-3 border-b border-gold/30 text-gradient-gold">
                      {group.category}
                    </h3>
                    <ul className="space-y-4">
                      {group.items.map((item) => (
                        <li key={item.name}>
                          <p className="font-semibold text-sm text-foreground">{item.name}</p>
                          <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                            {item.desc}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
