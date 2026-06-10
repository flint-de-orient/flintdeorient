import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/flint-logo.png";

const links = [
  { label: "Home", id: "home" },
  { label: "Solutions", id: "solutions" },
  { label: "Services", id: "services" },
  { label: "Publications", id: "products" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Jump to a homepage section from anywhere. On the homepage we scroll
  // directly; from another page we navigate home and let Index.tsx scroll
  // to the section via the `scrollTo` location state.
  const goTo = (id: string) => {
    setOpen(false);
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  // The homepage hero has its own nav, so keep this bar hidden until the user
  // scrolls past the hero. On every other page it's always visible.
  const hidden = isHome && !scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        hidden
          ? "-translate-y-full opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100",
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border/60"
          : "bg-transparent"
      )}
    >
      <nav className="container flex items-center justify-between h-16 md:h-20">
        <button onClick={() => goTo("home")} className="flex items-center gap-3">
          <img
            src={logo}
            alt="Flint De Orient logo"
            width={40}
            height={40}
            className="h-9 w-9 md:h-10 md:w-10 object-contain drop-shadow-[0_0_10px_hsl(var(--gold)/0.5)]"
          />
          <span className="text-lg md:text-xl font-extrabold tracking-tight hidden sm:inline">
            Flint <span className="text-gradient-gold">De Orient</span>
          </span>
        </button>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <button
                onClick={() => goTo(l.id)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button variant="hero" size="lg" onClick={() => goTo("contact")}>
            Get Started
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden backdrop-blur-xl bg-background/95 border-t border-border/60">
          <ul className="container py-6 space-y-4">
            {links.map((l) => (
              <li key={l.label}>
                <button
                  onClick={() => goTo(l.id)}
                  className="block w-full text-left text-base text-muted-foreground hover:text-foreground"
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li>
              <Button variant="hero" className="w-full" onClick={() => goTo("contact")}>
                Get Started
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
