import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      toast.success("Thanks! We'll be in touch within 24 hours. Check your inbox for a confirmation.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not send your message. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4">Contact</p>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Are you ready to experience <span className="text-gradient-gold">the journey?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <form
            onSubmit={onSubmit}
            className="glass-card rounded-3xl p-8 md:p-10 lg:col-span-3 space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <Input name="name" value={form.name} onChange={onChange} placeholder="Your name" required className="h-12 bg-background/60 border-border" />
              <Input name="email" type="email" value={form.email} onChange={onChange} placeholder="Email address" required className="h-12 bg-background/60 border-border" />
            </div>
            <Input name="phone" value={form.phone} onChange={onChange} placeholder="Phone number" className="h-12 bg-background/60 border-border" />
            <Textarea name="message" value={form.message} onChange={onChange} placeholder="Tell us about your project..." rows={5} required className="bg-background/60 border-border resize-none" />
            <Button variant="hero" size="lg" type="submit" className="w-full" disabled={sending}>
              {sending ? "Sending..." : "Send Message"}
            </Button>
          </form>

          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: MapPin, label: "Visit us", value: "Unit 320, PS Abacus, New Town, Kolkata 700161" },
              { icon: Phone, label: "Call us", value: "+91 8777654651" },
              { icon: Mail, label: "Email us", value: "hello@flintdeorient.com" },
            ].map((item) => (
              <div key={item.label} className="glass-card rounded-2xl p-6 flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-gradient-gold flex items-center justify-center flex-shrink-0">
                  <item.icon size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
