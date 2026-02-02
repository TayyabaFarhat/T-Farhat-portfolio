import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#research", label: "Research" },
  { href: "#testimonials", label: "Reviews" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4
                  ${isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent py-6"}`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-all duration-500">
            <span className="text-xl font-black text-primary group-hover:text-white transition-colors">T</span>
          </div>
          <span className="text-xl font-black tracking-tighter text-white">
            TF<span className="text-primary group-hover:animate-pulse">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1.5 flex items-center gap-1 border border-white/5 shadow-2xl">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-6 py-2 text-sm font-bold text-muted-foreground hover:text-white rounded-full hover:bg-white/5 transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button
            className="rounded-full px-6 bg-primary hover:bg-primary/90 text-white font-bold h-11 shadow-[0_0_20px_-5px_var(--color-primary)]"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Reach Out
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden w-12 h-12 flex items-center justify-center rounded-xl glass border border-white/5 text-foreground cursor-pointer hover:bg-primary/10 transition-colors"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-2xl border-b border-white/5 shadow-2xl"
          >
            <div className="container mx-auto px-6 py-10 flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <a
                  href={link.href}
                  key={index}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-muted-foreground hover:text-primary transition-all flex items-center justify-between group"
                >
                  {link.label}
                  <div className="w-8 h-8 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs">→</span>
                  </div>
                </a>
              ))}

              <Button
                className="w-full rounded-2xl h-14 text-lg font-bold bg-primary mt-4"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Book Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
