import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { getProduct } from "@/data/products";
import { useEffect } from "react";

const ProductBlog = () => {
  const { slug = "" } = useParams();
  const product = getProduct(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      document.title = `${product.name} — Flint De Orient`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", product.blog.tagline);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="container py-40 text-center">
          <h1 className="text-3xl font-bold mb-4">Product not found</h1>
          <Button asChild variant="hero">
            <Link to="/#products">Back to products</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = product.icon;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-28 md:pt-36 pb-24">
        <article className="container max-w-3xl">
          <Link
            to="/#products"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft size={16} /> Back to products
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-secondary border border-border flex items-center justify-center">
              <Icon size={26} className="text-gold" />
            </div>
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Prime Suite</p>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            {product.name}
          </h1>
          <p className="text-xl text-muted-foreground mb-10">{product.blog.tagline}</p>

          <p className="text-base md:text-lg leading-relaxed text-foreground/90 mb-12">
            {product.blog.intro}
          </p>

          <div className="space-y-10 mb-12">
            {product.blog.sections.map((s) => (
              <section key={s.heading}>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  <span className="text-gradient-gold">{s.heading}</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">{s.body}</p>
              </section>
            ))}
          </div>

          <div className="glass-card rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-semibold mb-5">Why teams choose {product.name}</h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              {product.blog.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/90">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <p className="text-lg mb-6">{product.blog.cta}</p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/#contact">Get in touch</Link>
            </Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ProductBlog;
