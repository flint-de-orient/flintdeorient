import { Search, Share2, FileText, Brain, FlaskConical, Bot, Sparkles } from "lucide-react";

const services = [
  { icon: Brain, title: "AI & ML Products and Solutions", desc: "Production-ready AI/ML platforms tailored to your business problems and data." },
  { icon: FlaskConical, title: "AI/ML Research and Development", desc: "Applied research, model experimentation, and prototyping for cutting-edge use cases." },
  { icon: Bot, title: "Custom AI Chatbot Development", desc: "Domain-trained chatbots with RAG, knowledge bases, and seamless channel integrations." },
  { icon: Sparkles, title: "AI Agent Design and Deployment", desc: "Autonomous, tool-using agents designed, evaluated, and deployed at scale." },
  { icon: Search, title: "Search Engine Optimization", desc: "On-page & off-page SEO strategies with keyword-optimized content that ranks." },
  { icon: Share2, title: "Social Media Marketing", desc: "Engagement-driven campaigns across Facebook, Instagram, and LinkedIn." },
  { icon: FileText, title: "Content Marketing & Automation", desc: "Plagiarism-free expert content that drives traffic and converts visitors." },
];

export const MarketingServices = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4">AI, ML & Digital Marketing</p>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Services that <span className="text-gradient-gold">deliver intelligence</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="glass-card rounded-3xl p-8 text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 shadow-glow-gold">
                <s.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
