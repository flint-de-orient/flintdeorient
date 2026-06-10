import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { ClientStrip } from "@/components/site/ClientStrip";
import { About } from "@/components/site/About";
import { Features } from "@/components/site/Features";
import { ServiceBanner } from "@/components/site/ServiceBanner";
import { MarketingServices } from "@/components/site/MarketingServices";
import { SoftwareDev } from "@/components/site/SoftwareDev";
import { Products } from "@/components/site/Products";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Fade page back in after navigation
    document.body.style.transition = "opacity 400ms ease";
    document.body.style.opacity = "1";

    const target =
      (location.state as { scrollTo?: string } | null)?.scrollTo ||
      (location.hash ? location.hash.replace("#", "") : null);

    if (target) {
      // Wait a tick so sections are mounted
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ClientStrip />
        <About />
        <Features />
        <ServiceBanner />
        <MarketingServices />
        <SoftwareDev />
        <Products />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
