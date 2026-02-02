import { Code, Cpu, Database, Brain, Rocket, Building, Users, Terminal, Sparkles, Layers } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  {
    name: "Deep Learning",
    category: "AI Core",
    icon: Brain,
    level: "Expert",
    description: "Multi-modal architectures, XAI GAMI-Net & Hypernetworks.",
    size: "large",
    colorKey: "primary"
  },
  {
    name: "Python",
    category: "Development",
    icon: Code,
    level: "Expert",
    description: "Scientific computing, ML pipelines & automation.",
    size: "small",
    colorKey: "highlight"
  },
  {
    name: "Computer Vision",
    category: "AI Core",
    icon: Cpu,
    level: "Advanced",
    description: "Medical Image Analysis & Facial Recognition.",
    size: "medium",
    colorKey: "primary"
  },
  {
    name: "Incubation Strategy",
    category: "Business",
    icon: Rocket,
    level: "Expert",
    description: "Scaling startups from idea to $5M+ revenue support.",
    size: "large",
    colorKey: "secondary"
  },
  {
    name: "Data Engineering",
    category: "Intelligence",
    icon: Database,
    level: "Advanced",
    description: "ETL pipelines, SQL & predictive modeling trends.",
    size: "small",
    colorKey: "primary"
  },
  {
    name: "NLP",
    category: "AI Core",
    icon: Terminal,
    level: "Advanced",
    description: "Sarcasm identification & temporal dependencies.",
    size: "medium",
    colorKey: "highlight"
  }
];

const colorVariants = {
  primary: {
    bg: "bg-primary",
    bgLight: "bg-primary/10",
    border: "border-primary/20",
    text: "text-primary",
  },
  secondary: {
    bg: "bg-secondary",
    bgLight: "bg-secondary/10",
    border: "border-secondary/20",
    text: "text-secondary",
  },
  highlight: {
    bg: "bg-highlight",
    bgLight: "bg-highlight/10",
    border: "border-highlight/20",
    text: "text-highlight",
  }
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-background">
      {/* Smooth Blending Overlays */}
      <div className="section-divider-top" />
      <div className="section-divider-bottom" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4 text-reveal">
          <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest text-xs uppercase px-4 py-1.5 rounded-full glass border border-primary/20">
            <Sparkles className="w-3.5 h-3.5" />
            The Toolbox
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight tracking-tighter">My <span className="text-gradient">Core Tech Stack</span></h2>
          <p className="text-lg text-muted-foreground">
            A diverse arsenal spanning deep technical research and strategic ecosystem leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            const isLarge = skill.size === "large";
            const isMedium = skill.size === "medium";

            // Get color classes from map
            const colors = colorVariants[skill.colorKey] || colorVariants.primary;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`bento-card p-8 group overflow-hidden border-beam-container
                  ${isLarge ? 'md:col-span-2 md:row-span-1' : ''}
                  ${isMedium ? 'md:row-span-2' : ''}
                `}
              >
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-500 shadow-glow group-hover:scale-110 group-hover:text-white ${colors.bgLight} ${colors.border} group-hover:${colors.bg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground opacity-50">{skill.category}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className={`font-black tracking-tight text-white ${isLarge ? 'text-4xl' : 'text-2xl'}`}>{skill.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{skill.description}</p>
                  </div>

                  <div className="flex items-center gap-2 mt-4">
                    <div className="h-1.5 flex-grow bg-white/5 rounded-full overflow-hidden relative">
                      {/* Explicitly mapping color classes to ensure they apply */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1.5, delay: i * 0.2 }}
                        className={`absolute left-0 top-0 h-full rounded-full ${colors.bg}`}
                      />
                    </div>
                    <span className={`text-[10px] font-black ${colors.text}`}>{skill.level}</span>
                  </div>
                </div>

                {/* Background decorative icons */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none">
                  <Icon className="w-64 h-64" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
