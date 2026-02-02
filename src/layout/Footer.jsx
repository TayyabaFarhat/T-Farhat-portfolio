import { Linkedin, Mail, Phone, Heart } from "lucide-react";
import { profile } from "@/constants/data";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 space-y-6">
            <a href="#" className="text-3xl font-black tracking-tighter">
              TF<span className="text-primary">.</span>
            </a>
            <p className="text-muted-foreground text-lg max-w-sm">
              Helping founders and researchers turn ambitious AI visions into practical, scalable solutions.
            </p>
            <div className="flex gap-4">
              <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass border border-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all shadow-lg">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={`mailto:${profile.contact.email}`} className="w-12 h-12 rounded-full glass border border-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all shadow-lg">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Navigation</h4>
            <div className="flex flex-col gap-4">
              {["About", "Services", "Experience", "Research", "Testimonials"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Contact</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-sm">{profile.contact.email}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-sm">{profile.contact.phone}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground font-medium">
            © {currentYear} Tayyaba Farhat. Crafted with precision for innovation.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
            Developed with <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />
    </footer>
  );
};
