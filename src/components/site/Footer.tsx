import logo from "@/assets/flint-logo.png";

const cols = [
  {
    title: "Featured Services",
    items: ["Custom Software Dev", "SEO", "Mobile App Dev", "Lead Generation", "Consulting & Training"],
  },
  {
    title: "Quick Links",
    items: ["Home", "Contact", "Privacy Policy", "Disclaimer", "Terms of Use"],
  },
  {
    title: "Featured Products",
    items: ["Prime Hospital", "Prime News", "Prime Real Estate", "Prime Spot Billing", "Prime Restaurant"],
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-card/30 backdrop-blur-sm">
      <div className="container py-16">
        <div className="grid lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Flint De Orient" width={40} height={40} className="h-10 w-10 object-contain" loading="lazy" />
              <div className="text-xl font-extrabold">
                Flint <span className="text-gradient-gold">De Orient</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building automation, software, and growth solutions for ambitious
              businesses from Kolkata to the world.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-semibold mb-5">{c.title}</h4>
              <ul className="space-y-3">
                {c.items.map((i) => (
                  <li key={i}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-border/60 flex flex-col md:flex-row justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 Flint De Orient. All rights reserved.</p>
          <p>Crafted in Kolkata 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
};
