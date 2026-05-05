import ResponsiveHeroBanner from "@/components/ui/responsive-hero-banner";
import logo from "@/assets/flint-logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import { partners } from "@/data/partners";

export const Hero = () => {
  return (
    <div id="home">
      <ResponsiveHeroBanner
        logoUrl={logo}
        backgroundImageUrl={heroBg}
        brandName="Flint"
        brandAccent="De Orient"
        badgeText="AI · ML · Agents · Automation"
        title="Grow Your Business"
        titleLine2="With AI & ML"
        description="From custom AI chatbots and autonomous agents to applied ML research — we design, build, and deploy intelligent solutions that scale with your business."
        ctaButtonHref="#contact"
        primaryButtonHref="#contact"
        secondaryButtonHref="#services"
        partners={partners}
      />
    </div>
  );
};
