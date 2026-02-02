import { profile } from "@/constants/data";
import { Brain, Rocket, Building, Users, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { MagicCard } from "@/components/MagicCard";

const iconMap = {
  Brain,
  Rocket,
  Building,
  Users
};

export const Services = () => {
  return (
    <section id="services" className="py-20 relative bg-background">
      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Comprehensive <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Bridging the gap between conceptual AI research and enterprise implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profile.services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="h-full"
              >
                <MagicCard className="p-8 h-full flex flex-col justify-between group">
                  <div className="space-y-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between group/btn cursor-pointer">
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                      Details
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </MagicCard>
              </motion.div>
            );
          })}
        </div>

        {/* Consulting CTA */}
        <div className="mt-16 text-center">
          <MagicCard className="inline-block p-1 rounded-full">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            >
              Book a Consultation
            </button>
          </MagicCard>
        </div>
      </div>
    </section>
  );
};
