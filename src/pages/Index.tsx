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
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
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
