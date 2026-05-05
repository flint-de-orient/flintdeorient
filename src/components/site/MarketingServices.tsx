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
];

const allServices: { category: string; items: { name: string; desc: string }[] }[] = [
  {
    category: "Marketing",
    items: [
      { name: "Content Marketing", desc: "AI-assisted content engines that research, write, and optimize at the speed of your market." },
      { name: "Social Media Marketing", desc: "Algorithm-aware campaigns powered by AI trend detection and predictive creative testing." },
      { name: "Email Marketing", desc: "Self-optimizing email journeys where AI personalizes copy, timing, and offers per user." },
      { name: "Pay-Per-Click (PPC) Advertising", desc: "AI-driven bidding, audience modeling, and creative iteration that compounds ROAS daily." },
      { name: "Search Engine Optimization", desc: "Next-gen SEO built for AI search — semantic clusters, entity SEO, and LLM visibility." },
      { name: "Lead Generation", desc: "AI-qualified pipelines that score, route, and warm leads before your team ever calls." },
      { name: "Public Relations (PR)", desc: "Smart media intelligence that pinpoints the right journalists and pitches at the right moment." },
      { name: "Branding and Strategy", desc: "Data-driven positioning crafted with AI market simulations and audience insight engines." },
      { name: "Influencer Marketing", desc: "AI creator-matching that predicts authentic fit, reach quality, and conversion potential." },
    ],
  },
  {
    category: "Developments",
    items: [
      { name: "Website Development", desc: "AI-augmented builds — faster shipping, smarter components, and adaptive user experiences." },
      { name: "Custom Software", desc: "Intelligent business software with built-in AI copilots that learn your team's workflows." },
      { name: "Mobile App Development", desc: "AI-first iOS and Android apps with on-device intelligence and personalized UX." },
      { name: "DevOps Services", desc: "AI-monitored CI/CD pipelines that predict failures and self-heal infrastructure." },
      { name: "Enterprise Software", desc: "AI-powered ERP, CRM, and internal tools that automate decisions, not just data entry." },
      { name: "API Development & Integration", desc: "Smart APIs with AI-orchestrated workflows connecting every tool in your stack." },
      { name: "E-commerce Development", desc: "AI-personalized stores with dynamic pricing, smart search, and predictive merchandising." },
      { name: "AI and Machine Learning", desc: "End-to-end ML — from custom model training to MLOps, RAG, and agentic systems." },
      { name: "Internet of Things (IoT)", desc: "AI-powered IoT platforms that turn sensor streams into autonomous decisions in real time." },
    ],
  },
  {
    category: "Business",
    items: [
      { name: "Translation Service", desc: "Neural-AI translation tuned for tone, context, and culture — at human-grade quality." },
      { name: "Content Writing", desc: "AI-accelerated writing with human editorial polish — scale without losing your voice." },
      { name: "Consulting Services", desc: "AI-informed strategy backed by market simulations, scenario modeling, and live data." },
      { name: "Cloud Services", desc: "AI-optimized cloud architectures on AWS, Azure, and GCP — cheaper, faster, safer." },
      { name: "Data Analytics and Business Intelligence", desc: "AI dashboards that don't just report — they explain, predict, and recommend next moves." },
      { name: "Analytics and Reporting", desc: "AI-generated executive reports with anomaly detection and natural-language insights." },
      { name: "Maintenance and Support", desc: "AI-monitored 24/7 support that detects, diagnoses, and resolves issues before users notice." },
    ],
  },
  {
    category: "Design",
    items: [
      { name: "Presentation Design", desc: "AI-crafted decks that turn raw ideas into investor-ready stories in hours, not weeks." },
      { name: "UI / UX Design", desc: "AI-powered research, rapid prototyping, and usability testing for interfaces that convert." },
      { name: "Website Design / Web Development", desc: "AI-assisted design systems delivering pixel-perfect, conversion-optimized experiences." },
    ],
  },
  {
    category: "Training",
    items: [
      { name: "Consulting and Training", desc: "Hands-on AI adoption programs that upskill your team to build with the latest tools." },
      { name: "Software Testing and Quality Assurance", desc: "AI-driven QA — automated test generation, visual regression, and intelligent bug triage." },
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
