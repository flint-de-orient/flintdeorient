import { useState } from "react";
import { ChevronDown, Cog, Eye, ShoppingCart, Users, Shield } from "lucide-react";

const features = [
  {
    icon: Cog,
    title: "Operational Efficiency with Automation",
    desc: "Streamline workflows and eliminate repetitive tasks across your business.",
    details:
      "We map your existing processes, identify bottlenecks, and deploy automation across tools like CRMs, ERPs, and internal dashboards. The result: faster turnaround, fewer errors, and teams free to focus on high-value work instead of repetitive tasks.",
  },
  {
    icon: Eye,
    title: "Enhanced Brand Visibility",
    desc: "Cut through the noise with strategy-led campaigns and design.",
    details:
      "From positioning and visual identity to paid media and SEO, we build brand systems that stay consistent across every touchpoint — so your audience recognizes, remembers, and chooses you over the competition.",
  },
  {
    icon: ShoppingCart,
    title: "Scalable E-commerce Solutions",
    desc: "Conversion-optimized stores built for growth at any scale.",
    details:
      "We design and engineer storefronts that load fast, convert visitors, and scale with your catalog. Integrated payments, inventory, analytics, and marketing tools come ready out of the box — built to grow from your first sale to your millionth.",
  },
  {
    icon: Users,
    title: "Customer-Centric Solutions",
    desc: "Experiences crafted around the people who matter most — your users.",
    details:
      "Every feature starts with research: interviews, journey mapping, and usability testing. We translate real user needs into intuitive interfaces and workflows that drive engagement, loyalty, and long-term retention.",
  },
  {
    icon: Shield,
    title: "Innovation and Security",
    desc: "Modern tech stacks hardened with enterprise-grade security.",
    details:
      "We pair cutting-edge frameworks with security best practices — encryption at rest and in transit, role-based access, regular audits, and compliance-ready architectures — so you can innovate quickly without putting your data or customers at risk.",
  },
];

export const Features = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
          {features.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={f.title} className="glass-card rounded-3xl p-8 group">
                <div className="w-12 h-12 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 shadow-glow-gold">
                  <f.icon size={22} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{f.desc}</p>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mb-6" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm text-muted-foreground leading-relaxed border-l-2 border-gold/40 pl-4">
                      {f.details}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:gap-3 transition-all"
                >
                  {isOpen ? "Hide Details" : "See Details"}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
