import { Button } from "@/components/ui/button";
import { Check, Workflow } from "lucide-react";

const items = [
  "Full optimized operation solution",
  "ERP and CRM Solutions",
  "Powerful Automation System",
  "Custom-made Business Application",
];

export const ServiceBanner = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="glow-border rounded-3xl p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold-deep/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gold/15 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/60 border border-border text-xs mb-6">
                <Workflow size={14} className="text-gold" /> Featured Service
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
                Business Automation &{" "}
                <span className="text-gradient-gold">ERP Solutions</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-lg">
                Boost your business processes with customized ERP, CRM, and
                automation workflows tailored to your operations.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">Get Access All Pages</a>
              </Button>
            </div>

            <ul className="space-y-4">
              {items.map((it) => (
                <li
                  key={it}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-background/40 backdrop-blur-sm border border-border/60"
                >
                  <span className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-white" strokeWidth={3} />
                  </span>
                  <span className="font-medium">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
