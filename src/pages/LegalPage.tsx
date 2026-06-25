import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { getLegalDoc } from "@/data/legal";
import { useSEO } from "@/lib/seo";

interface LegalPageProps {
  slug: string;
}

const LegalPage = ({ slug }: LegalPageProps) => {
  const doc = getLegalDoc(slug);

  useSEO({
    title: doc?.title ?? "Not found",
    path: `/${slug}`,
    description: doc?.intro ?? "",
    noindex: !doc,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.opacity = "1";
  }, [doc]);

  if (!doc) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="container py-40 text-center">
          <h1 className="text-3xl font-bold mb-4">Page not found</h1>
          <Button asChild variant="hero">
            <Link to="/">Back to home</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-28 md:pt-36 pb-24">
        <article className="container max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-12 transition-colors"
          >
            <ArrowLeft size={16} /> Back to home
          </Link>

          {/* Header */}
          <header className="mb-16 pb-12 border-b border-border/60">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">Legal</p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] tracking-tight mb-6">
              {doc.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">{doc.intro}</p>
            <p className="text-sm text-muted-foreground/70">Last updated: {doc.updated}</p>
          </header>

          {/* Sections */}
          <div className="space-y-12">
            {doc.sections.map((section, i) => (
              <section key={section.heading}>
                <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-4">
                  <span className="text-gold tabular-nums mr-3 text-base">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {section.heading}
                </h2>
                <div className="space-y-4 pl-0 md:pl-9">
                  {section.body.map((p, j) => (
                    <p key={j} className="text-base text-muted-foreground leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* CTA */}
          <section className="mt-20 pt-10 border-t border-border/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-1">Still have questions?</h2>
              <p className="text-sm text-muted-foreground">We're happy to help — reach out any time.</p>
            </div>
            <Button variant="hero" size="lg" asChild>
              <Link to="/#contact">Contact us</Link>
            </Button>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default LegalPage;
