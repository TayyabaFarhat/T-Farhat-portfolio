import { profile } from "@/constants/data";
import { Briefcase, Building2, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { MagicCard } from "@/components/MagicCard";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-background/50">
      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A track record of leadership and technical innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {profile.experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <MagicCard className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start group">

                {/* Left: Role & Company */}
                <div className="w-full md:w-1/3 flex flex-col gap-2">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest mb-1">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </div>
                  <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-primary transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground font-medium">
                    <Building2 className="w-4 h-4" />
                    {exp.company}
                  </div>
                </div>

                {/* Right: Description & Skills */}
                <div className="w-full md:w-2/3 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Skills/Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {(exp.skills || []).map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/5 rounded-lg text-xs font-medium text-white/70 border border-white/5 group-hover:border-white/10 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
