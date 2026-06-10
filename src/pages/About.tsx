import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Target,
  Telescope,
  Rocket,
  Globe,
  GraduationCap,
  HeartHandshake,
  Quote,
  Gem,
  ShieldCheck,
  Compass,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

const stats = [
  { n: "12K+", l: "Clients served" },
  { n: "40+", l: "Countries" },
  { n: "200+", l: "Projects shipped" },
  { n: "3+", l: "Years of craft" },
];

const goals = [
  {
    icon: Rocket,
    title: "Empower 10,000+ businesses",
    body: "Equip founders and enterprises with automation, software, and growth systems that compound year over year.",
  },
  {
    icon: Globe,
    title: "Build from Kolkata, for the world",
    body: "Prove that world-class digital products can ship from Eastern India to clients across 40+ countries.",
  },
  {
    icon: GraduationCap,
    title: "Create 500+ tech careers",
    body: "Train and hire the next generation of designers, engineers, and marketers — turning local talent global.",
  },
  {
    icon: HeartHandshake,
    title: "Service that feels personal",
    body: "Stay small in spirit as we scale. Every client gets a dedicated strategist and a partner who picks up the phone.",
  },
];

const values = [
  { icon: Gem, title: "Craft over shortcuts", body: "We sweat the details others skip." },
  { icon: Target, title: "Outcomes over output", body: "Impact is the only metric that counts." },
  { icon: ShieldCheck, title: "Honesty over hype", body: "Straight talk, even when it's hard." },
  { icon: Compass, title: "Curiosity over comfort", body: "We chase the better way, always." },
];

const About = () => {
  const navigate = useNavigate();

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    document.body.style.transition = "opacity 300ms ease";
    document.body.style.opacity = "0";
    setTimeout(() => {
      navigate("/", { state: { scrollTo: "about" } });
    }, 280);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.opacity = "1";
    document.title = "About — Flint De Orient";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Flint De Orient — our mission, goals, and the vision of CEO Sabir Ali for building world-class software and growth systems from Kolkata."
      );
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="relative">
        {/* Ambient gold glow */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-32 left-1/2 h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-gold/15 blur-[150px] animate-pulse-glow" />
          <div className="absolute top-1/3 -left-24 h-72 w-72 rounded-full bg-gold-deep/20 blur-3xl animate-float" />
          <div className="absolute inset-0 dot-bg opacity-[0.15] [mask-image:radial-gradient(ellipse_at_top,black,transparent_60%)]" />
        </div>

        {/* Hero header */}
        <section className="pt-28 md:pt-36 pb-16">
          <div className="container max-w-5xl">
            <a
              href="/#about"
              onClick={handleBack}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-10 transition-colors"
            >
              <ArrowLeft size={16} /> Back to home
            </a>

            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-background/40 backdrop-blur px-4 py-1.5 text-xs mb-8">
              <span className="inline-flex items-center rounded-full bg-gradient-gold px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-background">
                About
              </span>
              <span className="text-muted-foreground">Crafted in Kolkata, delivered worldwide</span>
            </div>

            <h1 className="max-w-3xl text-4xl md:text-6xl font-extrabold leading-[1.08] tracking-tight mb-8">
              We turn ambition into{" "}
              <span className="text-gradient-gold">measurable growth.</span>
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              Flint De Orient is a digital growth studio building software, automation, and
              marketing systems for businesses that refuse to settle for average. Over the years
              we've worked with 12,000+ clients across 40+ countries.
            </p>

            {/* Stat band */}
            <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div
                  key={s.l}
                  className="glass-card rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl md:text-4xl font-extrabold text-gradient-gold">{s.n}</div>
                  <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission / Vision */}
        <section className="py-16">
          <div className="container max-w-5xl grid md:grid-cols-2 gap-6">
            <div className="glass-card rounded-3xl p-8 md:p-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 shadow-glow-gold">
                <Target size={22} className="text-white" />
              </div>
              <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3">Mission</p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Make world-class technology and growth strategy accessible to every ambitious
                business — regardless of size, sector, or geography.
              </p>
            </div>
            <div className="glass-card rounded-3xl p-8 md:p-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 shadow-glow-gold">
                <Telescope size={22} className="text-white" />
              </div>
              <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3">Vision</p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Become the most trusted growth partner for emerging brands worldwide — known
                for the businesses we quietly transform behind the scenes.
              </p>
            </div>
          </div>
        </section>

        {/* Goals */}
        <section className="py-16">
          <div className="container max-w-5xl">
            <div className="max-w-2xl mb-12">
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">What we're building</p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Goals that keep us <span className="text-gradient-gold">honest</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {goals.map((g, i) => (
                <div key={g.title} className="glass-card rounded-3xl p-8 group">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-secondary border border-border flex items-center justify-center group-hover:border-gold/50 transition-colors">
                      <g.icon size={22} className="text-gold" />
                    </div>
                    <span className="text-sm font-bold text-gold/60 tabular-nums">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{g.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{g.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CEO Vision — featured */}
        <section className="py-16">
          <div className="container max-w-5xl">
            <div className="glow-border rounded-3xl p-8 md:p-14 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gold/15 blur-3xl" />
              <Quote className="text-gold/30 mb-6" size={56} />
              <div className="relative grid lg:grid-cols-3 gap-10 items-start">
                <div className="lg:col-span-2 space-y-6">
                  <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight">
                    "We don't sell services.{" "}
                    <span className="text-gradient-gold">We sell certainty."</span>
                  </h2>
                  <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                    <p>
                      When I started Flint De Orient, the digital industry was crowded with agencies
                      making big promises and delivering small results. I wanted to build the
                      opposite — a team obsessed with outcomes, not invoices.
                    </p>
                    <p>
                      My vision for the next decade is simple: become the partner that businesses call
                      <em> before</em> they need help, not after. I want every founder we work with to
                      feel that hiring us was the smartest commercial decision they ever made.
                    </p>
                    <p>
                      We're investing heavily in AI-driven automation and a global delivery network —
                      so that a small team in Kolkata can out-execute agencies ten times our size.
                      The goal isn't to be bigger. It's to be undeniably better.
                    </p>
                  </div>
                </div>

                {/* Founder card */}
                <div className="lg:border-l lg:border-border/60 lg:pl-10 flex flex-col items-start gap-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-gold flex items-center justify-center text-2xl font-extrabold text-background shadow-glow-gold">
                    SA
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-foreground">Sabir Ali</p>
                    <p className="text-sm text-muted-foreground">Founder &amp; CEO</p>
                  </div>
                  <a
                    href="https://www.linkedin.com/company/flint-de-orient"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    <Linkedin size={16} /> Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="container max-w-5xl">
            <div className="max-w-2xl mb-12">
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Principles</p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                What we <span className="text-gradient-gold">stand for</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => (
                <div key={v.title} className="glass-card rounded-3xl p-7">
                  <div className="w-11 h-11 rounded-xl bg-gradient-gold flex items-center justify-center mb-5 shadow-glow-gold">
                    <v.icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-base font-semibold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container max-w-5xl">
            <div className="glow-border rounded-3xl p-10 md:p-16 relative overflow-hidden text-center">
              <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-gold/15 blur-3xl" />
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                  Let's build something that{" "}
                  <span className="text-gradient-gold">moves the needle.</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                  Tell us where you want to be 12 months from now — we'll map the route.
                </p>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/#contact">
                    Start the conversation <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
