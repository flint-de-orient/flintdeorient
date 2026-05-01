import { ArrowRight, Cog, Eye, ShoppingCart, Users, Shield } from "lucide-react";

const features = [
  { icon: Cog, title: "Operational Efficiency with Automation", desc: "Streamline workflows and eliminate repetitive tasks across your business." },
  { icon: Eye, title: "Enhanced Brand Visibility", desc: "Cut through the noise with strategy-led campaigns and design." },
  { icon: ShoppingCart, title: "Scalable E-commerce Solutions", desc: "Conversion-optimized stores built for growth at any scale." },
  { icon: Users, title: "Customer-Centric Solutions", desc: "Experiences crafted around the people who matter most — your users." },
  { icon: Shield, title: "Innovation and Security", desc: "Modern tech stacks hardened with enterprise-grade security." },
];

export const Features = () => {
  return (
    <section id="solutions" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4">Core Features</p>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Everything you need to <span className="text-gradient-gold">scale</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="glass-card rounded-3xl p-8 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 shadow-glow-gold">
                <f.icon size={22} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{f.desc}</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-gold group-hover:gap-3 transition-all"
              >
                See Details <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
