import { Link } from "react-router-dom";
import { products } from "@/data/products";

export const Products = () => {
  return (
    <section id="products" className="py-24 md:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4">Prime Suite</p>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Products built for{" "}
            <span className="text-gradient-gold">every industry</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <Link
              key={p.name}
              to={`/products/${p.slug}`}
              className="glass-card rounded-2xl p-6 flex gap-4 items-start group transition-all hover:border-gold/50 hover:shadow-glow-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center flex-shrink-0 group-hover:border-gold/50 transition-colors">
                <p.icon size={20} className="text-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-base mb-1 group-hover:text-gold transition-colors">{p.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
