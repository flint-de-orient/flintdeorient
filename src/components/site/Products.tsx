import { Hotel, Hospital, Package, Truck, ShoppingBag, Calculator, Users2, Briefcase, Building2, Brain, FlaskConical, Bot, Sparkles } from "lucide-react";

const products = [
  { icon: Brain, name: "AI & ML Suite", desc: "Production-ready AI/ML products and solutions for any industry." },
  { icon: FlaskConical, name: "AI Research Lab", desc: "Applied AI/ML research, experimentation & rapid prototyping." },
  { icon: Bot, name: "Chatbot Studio", desc: "Custom AI chatbots with RAG and multi-channel deployment." },
  { icon: Sparkles, name: "AI Agents", desc: "Design and deploy autonomous, tool-using AI agents at scale." },
  { icon: Hotel, name: "Hotel", desc: "End-to-end hotel management & bookings." },
  { icon: Hospital, name: "Hospital", desc: "Patient records, OPD, IPD & billing." },
  { icon: Package, name: "Inventory", desc: "Real-time inventory & warehouse control." },
  { icon: Truck, name: "Transport", desc: "Fleet, dispatch & logistics tracking." },
  { icon: ShoppingBag, name: "eCommerce", desc: "Modern storefronts with full backend." },
  { icon: Calculator, name: "Accounts", desc: "GST-ready accounting & financials." },
  { icon: Users2, name: "CRM", desc: "Leads, pipeline & customer journeys." },
  { icon: Briefcase, name: "HRM", desc: "Payroll, attendance & employee lifecycle." },
  { icon: Building2, name: "Real Estate", desc: "Listings, leads & site visit management." },
];

export const Products = () => {
  return (
    <section id="products" className="py-24 md:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4">Prime Suite</p>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Products built for{" "}
            <span className="text-gradient-gold">every industry</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.name} className="glass-card rounded-2xl p-6 flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center flex-shrink-0">
                <p.icon size={20} className="text-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-base mb-1">{p.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
