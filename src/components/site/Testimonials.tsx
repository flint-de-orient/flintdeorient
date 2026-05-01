import { useRef } from "react";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";

const items = [
  { name: "John Peterson", role: "CEO, TechWave Solutions", quote: "Game-changer for business automation and efficiency. Our team velocity is up 3x." },
  { name: "Ananya Sharma", role: "Marketing Manager, GreenLight Inc", quote: "Improved our online presence and operational efficiency in less than a quarter." },
  { name: "Rahul Verma", role: "Operations Head, WaterFlow Systems", quote: "Their spot billing solution exceeded our expectations — field-ready from day one." },
  { name: "Sophia Martin", role: "Founder, BlueSpark Innovations", quote: "The HR tool simplified payroll and HR management end-to-end." },
];

export const Testimonials = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8 * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="py-24 md:py-32">
      <div className="container mb-16">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4">Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Loved by <span className="text-gradient-gold">teams worldwide</span>
          </h2>
        </div>
      </div>

      <div className="relative">
        <div
          ref={scrollerRef}
          className="overflow-x-hidden pb-6 [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]"
        >
          <div className="flex gap-6 px-6 md:px-12 w-max">
            {items.map((t) => (
              <div
                key={t.name}
                className="glass-card rounded-3xl p-8 w-[320px] md:w-[400px] flex-shrink-0 flex flex-col"
              >
                <Quote className="text-gold mb-4" size={28} />
                <p className="text-foreground/90 text-base leading-relaxed mb-6 flex-1">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border/60">
                  <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center font-semibold">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          aria-label="Previous testimonials"
          onClick={() => scrollBy(-1)}
          className="flex absolute left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-gold/40 bg-background/70 backdrop-blur-md text-foreground hover:border-gold hover:shadow-glow-gold transition-all"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          aria-label="Next testimonials"
          onClick={() => scrollBy(1)}
          className="flex absolute right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-gold/40 bg-background/70 backdrop-blur-md text-foreground hover:border-gold hover:shadow-glow-gold transition-all"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};
