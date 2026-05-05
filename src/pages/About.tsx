import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

const goals = [
  {
    title: "Empower 10,000+ businesses",
    body: "Equip founders and enterprises with automation, software, and growth systems that compound year over year.",
  },
  {
    title: "Build from Kolkata, for the world",
    body: "Prove that world-class digital products can ship from Eastern India to clients across 40+ countries.",
  },
  {
    title: "Create 500+ tech careers",
    body: "Train and hire the next generation of designers, engineers, and marketers — turning local talent global.",
  },
  {
    title: "Service that feels personal",
    body: "Stay small in spirit as we scale. Every client gets a dedicated strategist and a partner who picks up the phone.",
  },
];

const values = [
  "Craft over shortcuts.",
  "Outcomes over output.",
  "Honesty over hype.",
  "Curiosity over comfort.",
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
    if (meta) meta.setAttribute("content", "Flint De Orient — our mission, goals, and the vision of CEO Sabil Ali for building world-class software and growth systems from Kolkata.");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-28 md:pt-36 pb-24">
        <article className="container max-w-3xl">
          <a
            href="/#about"
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-12 transition-colors"
          >
            <ArrowLeft size={16} /> Back to about section
          </a>

          {/* Header */}
          <header className="mb-20">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">About</p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] tracking-tight mb-8">
              We turn ambition into measurable growth.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Flint De Orient is a digital growth studio building software, automation, and
              marketing systems for businesses that refuse to settle for average. Over the past
              decade we've worked with 12,000+ clients across 40+ countries.
            </p>
          </header>

          {/* Mission / Vision */}
          <section className="grid md:grid-cols-2 gap-12 mb-20 pb-20 border-b border-border/60">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3">Mission</p>
              <p className="text-base text-foreground/90 leading-relaxed">
                Make world-class technology and growth strategy accessible to every ambitious
                business — regardless of size, sector, or geography.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3">Vision</p>
              <p className="text-base text-foreground/90 leading-relaxed">
                Become the most trusted growth partner for emerging brands worldwide — known
                for the businesses we quietly transform behind the scenes.
              </p>
            </div>
          </section>

          {/* Goals */}
          <section className="mb-20 pb-20 border-b border-border/60">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">What we're building</p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-10">Our goals</h2>
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
              {goals.map((g, i) => (
                <div key={g.title}>
                  <p className="text-sm text-gold mb-2">0{i + 1}</p>
                  <h3 className="text-lg font-medium mb-2">{g.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{g.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CEO Vision */}
          <section className="mb-20 pb-20 border-b border-border/60">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">From the CEO</p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-10">
              "We don't sell services. We sell certainty."
            </h2>
            <div className="space-y-5 text-base text-muted-foreground leading-relaxed">
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
            <div className="mt-10">
              <p className="font-medium text-foreground">Sabil Ali</p>
              <p className="text-sm text-muted-foreground">Founder &amp; CEO, Flint De Orient</p>
            </div>
          </section>

          {/* Values */}
          <section className="mb-20">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Principles</p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-10">What we stand for</h2>
            <ul className="divide-y divide-border/60">
              {values.map((v, i) => (
                <li key={v} className="flex items-baseline gap-6 py-4">
                  <span className="text-sm text-gold tabular-nums">0{i + 1}</span>
                  <span className="text-base text-foreground/90">{v}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <section className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-10 border-t border-border/60">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-1">Let's build something that moves the needle.</h2>
              <p className="text-sm text-muted-foreground">Tell us where you want to be 12 months from now.</p>
            </div>
            <Button variant="hero" size="lg" asChild>
              <Link to="/#contact">Start the conversation <ArrowRight size={16} /></Link>
            </Button>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default About;
