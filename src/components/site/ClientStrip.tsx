const clients = ["WBSEDCL", "Puber Kalom", "FPA", "JustPizza", "WBMDFC", "CookSukh", "EasyMakan"];

export const ClientStrip = () => {
  const list = [...clients, ...clients];
  return (
    <section className="py-16 border-y border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
          Trusted by leading brands
        </p>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex gap-16 marquee w-max">
          {list.map((c, i) => (
            <span
              key={i}
              className="text-2xl md:text-3xl font-bold text-muted-foreground/60 hover:text-foreground transition-colors whitespace-nowrap"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
