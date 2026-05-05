import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const points = [
  "Crafted strategy according to Goal",
  "Task Prioritization & Planning",
  "Tools & Technology Integration",
  "Perfect Measurement & Optimization",
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="glass-card rounded-3xl p-10 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gold-deep/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-gold/20 blur-3xl" />
            <div className="relative">
              <div className="text-7xl md:text-8xl font-extrabold text-gradient-gold">12K+</div>
              <p className="text-xl mt-4 text-muted-foreground">Happy Clients Worldwide</p>
              <div className="mt-10 grid grid-cols-3 gap-4 text-center">
                {[
                  { n: "200+", l: "Projects" },
                  { n: "150+", l: "Clients" },
                  { n: "3+", l: "Years" },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl border border-border/60 p-4">
                    <div className="text-2xl font-bold">{s.n}</div>
                    <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-gold">Why Us</p>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Achieve Your Goals With{" "}
            <span className="text-gradient-gold">Precision and Speed</span>
          </h2>
          <ul className="space-y-4 pt-4">
            {points.map((p) => (
              <li key={p} className="flex gap-4 items-start">
                <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-gradient-gold flex items-center justify-center">
                  <Check size={14} className="text-white" strokeWidth={3} />
                </span>
                <span className="text-muted-foreground text-lg">{p}</span>
              </li>
            ))}
          </ul>
          <div className="pt-4 flex flex-wrap gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">Contact With Us</a>
            </Button>
            <Button variant="outlineGlow" size="lg" asChild>
              <Link to="/about">
                Know More <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
