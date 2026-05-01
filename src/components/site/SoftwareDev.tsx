const tags = [
  "Marketing",
  "Software Solution",
  "Web Design",
  "Modern Technology",
  "App Development",
  "Web Development",
  "SaaS",
  "Cloud & DevOps",
  "Mobile Apps",
];

export const SoftwareDev = () => {
  const list = [...tags, ...tags];
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="container relative">
        <div className="max-w-3xl mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4">Engineering</p>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
            Software Development <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Flint De Orient specializes in high-quality software solutions —
            custom software, mobile apps, SaaS, Cloud & DevOps, all engineered
            to scale with your business.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex gap-4 marquee-fast w-max">
          {list.map((t, i) => (
            <span
              key={i}
              className="px-6 py-3 rounded-full border border-border/60 bg-card/40 backdrop-blur-sm text-sm font-medium whitespace-nowrap hover:border-gold hover:text-foreground transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
