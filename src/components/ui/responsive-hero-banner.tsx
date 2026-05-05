"use client";

import React, { useState } from "react";
import { ArrowRight, Play, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
}

interface Partner {
  name: string;
  href?: string;
  logo?: string;
}

export interface ResponsiveHeroBannerProps {
  logoUrl?: string;
  backgroundImageUrl?: string;
  brandName?: string;
  brandAccent?: string;
  navLinks?: NavLink[];
  ctaButtonText?: string;
  ctaButtonHref?: string;
  badgeLabel?: string;
  badgeText?: string;
  title?: string;
  titleLine2?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  partnersTitle?: string;
  partners?: Partner[];
  className?: string;
}

const ResponsiveHeroBanner: React.FC<ResponsiveHeroBannerProps> = ({
  logoUrl,
  backgroundImageUrl,
  brandName = "Flint",
  brandAccent = "De Orient",
  navLinks = [
    { label: "Home", href: "#home", isActive: true },
    { label: "Solutions", href: "#solutions" },
    { label: "Services", href: "#services" },
    { label: "Publications", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  ctaButtonText = "Get Started",
  ctaButtonHref = "#contact",
  badgeLabel = "New",
  badgeText = "200+ Projects · 150+ Clients",
  title = "Grow Your Business",
  titleLine2 = "With Automation",
  description = "Gain a complete understanding of your target audience and performance with our custom-built tools, automations, and intelligent workflows.",
  primaryButtonText = "Get Started",
  primaryButtonHref = "#contact",
  secondaryButtonText = "Explore Services",
  secondaryButtonHref = "#services",
  partnersTitle = "Trusted by leading brands across India",
  partners = [
    { name: "WBSEDCL" },
    { name: "Puber Kalom" },
    { name: "FPA" },
    { name: "JustPizza" },
    { name: "WBMDFC" },
    { name: "CookSukh" },
    { name: "EasyMakan" },
  ],
  className,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section
      className={cn(
        "relative isolate min-h-screen w-full overflow-hidden bg-background text-foreground",
        className
      )}
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-background" />
      {backgroundImageUrl && (
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        />
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      <div className="absolute inset-0 -z-10 grid-bg opacity-20" />
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -10%, hsl(var(--gold) / 0.18), transparent 60%), radial-gradient(ellipse 60% 50% at 80% 100%, hsl(var(--gold-deep) / 0.15), transparent 60%)",
        }}
      />


      {/* Nav */}
      <header className="relative z-20">
        <div className="container flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3">
            {logoUrl && (
              <img
                src={logoUrl}
                alt={`${brandName} ${brandAccent} logo`}
                width={40}
                height={40}
                className="h-10 w-10 object-contain drop-shadow-[0_0_10px_hsl(var(--gold)/0.5)]"
              />
            )}
            <span className="text-lg md:text-xl font-extrabold tracking-tight">
              {brandName} <span className="text-gradient-gold">{brandAccent}</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1 rounded-full border border-border/60 bg-background/40 backdrop-blur-xl px-2 py-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm rounded-full transition-colors",
                  link.isActive
                    ? "bg-gold/15 text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                )}
              >
                {link.label}
              </a>
            ))}
            <a
              href={ctaButtonHref}
              className="ml-2 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-4 py-2 text-sm font-semibold text-background shadow-glow-gold hover:scale-[1.03] transition-transform"
            >
              {ctaButtonText}
              <ArrowRight size={14} />
            </a>
          </nav>

          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-border backdrop-blur"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
            <ul className="container py-6 space-y-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-base text-muted-foreground hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={ctaButtonHref}
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center w-full rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-background shadow-glow-gold"
                >
                  {ctaButtonText}
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero content */}
      <div className="relative z-10 container pt-12 md:pt-20 pb-16">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-background/40 backdrop-blur px-3 py-1.5 text-xs animate-fade-in-down">
            <span className="inline-flex items-center rounded-full bg-gradient-gold px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-background">
              {badgeLabel}
            </span>
            <span className="text-muted-foreground">{badgeText}</span>
          </div>

          {/* Title */}
          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight animate-fade-in-up animation-delay-200">
            <span className="block">{title}</span>
            <span className="block text-gradient-gold">{titleLine2}</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-muted-foreground animate-fade-in-up animation-delay-400">
            {description}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
            <a
              href={primaryButtonHref}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-base font-semibold text-background shadow-glow-gold hover:scale-[1.03] transition-transform"
            >
              {primaryButtonText}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={secondaryButtonHref}
              className="group inline-flex items-center gap-2 rounded-full border border-gold/40 bg-background/40 backdrop-blur px-7 py-3.5 text-base font-medium text-foreground hover:border-gold hover:shadow-glow-gold transition-all"
            >
              <Play size={16} className="text-gold" />
              {secondaryButtonText}
            </a>
          </div>
        </div>

        {/* Partners */}
        <div className="mt-20 md:mt-28 animate-fade-in-up animation-delay-800">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {partnersTitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-x-10">
            {partners.map((p) => (
              <a
                key={p.name}
                href={p.href ?? "#"}
                className="group inline-flex items-center justify-center transition-all"
                aria-label={p.name}
              >
                {p.logo ? (
                  <img
                    src={p.logo}
                    alt={`${p.name} logo`}
                    className="h-10 md:h-12 w-auto object-contain opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-sm md:text-base font-display tracking-wide text-muted-foreground/80 group-hover:text-foreground transition-colors">
                    {p.name}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsiveHeroBanner;
