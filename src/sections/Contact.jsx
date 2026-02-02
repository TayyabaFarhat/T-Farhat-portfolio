import {
  Mail,
  Send,
  Linkedin,
  Phone,
  MapPin,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { useState } from "react";
import { profile } from "@/constants/data";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const formBody = new FormData();
      formBody.append("access_key", "616efa12-19db-4af5-a7c9-aa772c86c293");
      formBody.append("name", formData.name);
      formBody.append("email", formData.email);
      formBody.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formBody,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! I'll be in touch shortly.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed");
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-background">
      <div className="section-divider-top" />
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Side - Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest text-xs uppercase px-4 py-1.5 rounded-full glass border border-primary/20">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Connectivity
              </div>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Let's start a <br /><span className="text-gradient">conversation.</span></h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
                Whether you're a startup founder, a researcher, or just looking to discuss AI, my door is always open.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <a href={`mailto:${profile.contact.email}`} className="premium-card p-6 rounded-3xl border border-white/5 space-y-4 hover:border-primary/50 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                  <Mail className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Email Me</div>
                  <div className="text-sm font-bold truncate">{profile.contact.email}</div>
                </div>
              </a>
              <a href={`tel:${profile.contact.phone}`} className="premium-card p-6 rounded-3xl border border-white/5 space-y-4 hover:border-highlight/50 group">
                <div className="w-12 h-12 rounded-2xl bg-highlight/10 flex items-center justify-center group-hover:bg-highlight transition-all duration-500">
                  <Phone className="w-6 h-6 text-highlight group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Call Me</div>
                  <div className="text-sm font-bold">{profile.contact.phone}</div>
                </div>
              </a>
              <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="premium-card p-6 rounded-3xl border border-white/5 space-y-4 hover:border-primary/50 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                  <Linkedin className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">LinkedIn</div>
                  <div className="text-sm font-bold">Connect on LinkedIn</div>
                </div>
              </a>
              <div className="premium-card p-6 rounded-3xl border border-white/5 space-y-4 group">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Location</div>
                  <div className="text-sm font-bold">Lahore, Pakistan</div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="glass p-8 rounded-[40px] border border-white/5 bg-gradient-to-br from-primary/10 to-transparent"
            >
              <h4 className="text-xl font-bold mb-2">Available for:</h4>
              <ul className="space-y-2">
                {["AI Strategy Consulting", "PhD Research Mentorship", "Startup Incubation Leadership", "Corporate AI Training"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="premium-card p-10 md:p-12 rounded-[48px] border border-white/10 shadow-2xl relative"
          >
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground px-1">Full Name</label>
                <input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 focus:bg-white/10 transition-all text-white font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground px-1">Email Address</label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 focus:bg-white/10 transition-all text-white font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground px-1">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can I help you?"
                  className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 focus:bg-white/10 transition-all text-white font-medium resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-16 bg-primary hover:bg-primary/90 text-white font-black text-lg rounded-2xl shadow-[0_20px_40px_-10px_rgba(56,189,248,0.3)] transition-all flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-50"
              >
                {isLoading ? "Delivering..." : <>Send Message <Send className="w-5 h-5 shadow-glow" /></>}
              </button>

              {submitStatus.type && (
                <div className={`text-center font-bold animate-fade-in ${submitStatus.type === "success" ? "text-green-400" : "text-red-400"}`}>
                  {submitStatus.message}
                </div>
              )}
            </form>

            {/* Subtle background blob for the form */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
