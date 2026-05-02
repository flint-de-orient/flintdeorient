import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Target, Eye, Compass, Sparkles, Rocket, Users, Globe2, Heart, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

const goals = [
  {
    icon: Rocket,
    title: "Empower 10,000+ Businesses",
    body: "Equip ambitious founders and enterprises across the globe with automation, software, and growth systems that compound results year over year.",
  },
  {
    icon: Globe2,
    title: "Build From Kolkata, For The World",
    body: "Prove that world-class digital products can be engineered from Eastern India — and shipped to clients in 40+ countries with the same craft and care.",
  },
  {
    icon: Users,
    title: "Create 500+ Tech Careers",
    body: "Train, mentor, and hire the next generation of designers, engineers, and marketers — turning local talent into global problem-solvers.",
  },
  {
    icon: Heart,
    title: "Service That Feels Personal",
    body: "Stay small in spirit even as we scale — every client gets a dedicated strategist, transparent reporting, and a partner who actually picks up the phone.",
  },
];

const values = [
  "Craft over shortcuts — we ship work we'd proudly sign our name to.",
  "Outcomes over output — measurable growth is the only real deliverable.",
  "Honesty over hype — clear timelines, clear pricing, clear results.",
  "Curiosity over comfort — we learn faster than the market changes.",
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About — Flint De Orient";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Discover Flint De Orient's mission, company goals, and the CEO's vision for building world-class software and growth systems from Kolkata.");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-28 md:pt-36 pb-24">
        <article className="container max-w-4xl">
          <Link
            to="/#about"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft size={16} /> Back to home
          </Link>

          {/* Header */}
          <header className="mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4">About Us</p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              We turn ambition into <span className="text-gradient-gold">measurable growth</span>.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Flint De Orient is a full-stack digital growth studio building software, automation,
              and marketing systems for businesses that refuse to settle for average. For over a
              decade we've helped 12,000+ clients across 40+ countries scale faster, smarter, and
              with far less friction.
            </p>
          </header>

          {/* Mission / Vision */}
          <section className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="glass-card rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center mb-5">
                <Target size={22} className="text-gold" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To make world-class technology and growth strategy accessible to every ambitious
                business — regardless of size, sector, or geography. We exist to remove the
                guesswork between an idea and the revenue it deserves.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center mb-5">
                <Eye size={22} className="text-gold" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted growth partner for emerging brands worldwide — known
                not for the noise we make, but for the businesses we quietly transform behind the
                scenes.
              </p>
            </div>
          </section>

          {/* Goals */}
          <section className="mb-16">
            <div className="mb-10">
              <p className="text-sm uppercase tracking-[0.3em] text-gold mb-3">What we're building</p>
              <h2 className="text-3xl md:text-4xl font-extrabold">
                Our <span className="text-gradient-gold">company goals</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {goals.map((g) => (
                <div key={g.title} className="glass-card rounded-2xl p-7">
                  <div className="w-11 h-11 rounded-xl bg-secondary border border-border flex items-center justify-center mb-4">
                    <g.icon size={20} className="text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{g.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{g.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CEO Vision */}
          <section className="mb-16">
            <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gold-deep/30 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-gold/20 blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <Sparkles size={20} className="text-gold" />
                  <p className="text-sm uppercase tracking-[0.3em] text-gold">From the CEO's desk</p>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                  "We don't sell services. We <span className="text-gradient-gold">sell certainty</span>."
                </h2>
                <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
                  <p>
                    When I started Flint De Orient, the digital industry was crowded with agencies
                    making big promises and delivering small results. I wanted to build the
                    opposite — a team obsessed with outcomes, not invoices. A team where strategy,
                    engineering, and design sit at the same table from day one.
                  </p>
                  <p>
                    My vision for the next decade is simple: become the partner that businesses
                    call <em>before</em> they need help, not after. I want every founder we work
                    with to feel that hiring us was the smartest commercial decision they ever
                    made — not because we were the cheapest, but because we were the most
                    invested in their win.
                  </p>
                  <p>
                    We're investing heavily in AI-driven automation, in-house product
                    intelligence, and a global delivery network — all so that a small team in
                    Kolkata can out-execute agencies ten times our size. The goal isn't to be
                    bigger. It's to be undeniably better.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-border/60">
                  <p className="font-semibold text-foreground">Founder & CEO</p>
                  <p className="text-sm text-muted-foreground">Flint De Orient</p>
                </div>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="mb-16">
            <div className="mb-8 flex items-center gap-3">
              <Compass size={22} className="text-gold" />
              <h2 className="text-3xl md:text-4xl font-extrabold">
                What we <span className="text-gradient-gold">stand for</span>
              </h2>
            </div>
            <ul className="grid sm:grid-cols-2 gap-4">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3 glass-card rounded-xl p-5">
                  <CheckCircle2 size={20} className="text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/90 leading-relaxed">{v}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <section className="text-center glass-card rounded-2xl p-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to build something that actually moves the needle?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Tell us where you want to be 12 months from now — we'll show you exactly how to get there.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/#contact">Start the conversation</Link>
            </Button>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default About;
