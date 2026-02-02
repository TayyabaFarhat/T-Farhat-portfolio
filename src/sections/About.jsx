import { profile } from "@/constants/data";
import { Brain, Rocket, Users, Award, Globe, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { MagicCard } from "@/components/MagicCard";

export const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Who <span className="text-gradient">I Am</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {profile.headline}
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">

          {/* Main Bio Card */}
          <MagicCard className="md:col-span-2 md:row-span-2 p-8 md:p-10 flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Brain className="w-7 h-7" />
              </div>
              <h3 className="text-3xl font-bold text-white">
                Designing the Future of AI
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {profile.about}
              </p>
            </div>
            {/* Quick Stats inside the main card */}
            <div className="pt-8 grid grid-cols-3 gap-4 border-t border-white/5 mt-8">
              <div>
                <div className="text-2xl font-black text-white">10+</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Years Exp.</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">100+</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Projects</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">50+</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Clients</div>
              </div>
            </div>
          </MagicCard>

          {/* Specialization / Area of Focus */}
          <MagicCard className="p-8 flex flex-col justify-center space-y-4 group">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center border border-white/5 group-hover:bg-secondary group-hover:text-background transition-colors duration-300">
              <Code2 className="w-6 h-6 text-secondary-foreground group-hover:text-inherit" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">Tech Stack</h4>
              <p className="text-sm text-muted-foreground mt-2">
                Specialized in Python, React, Tailwind, and Machine Learning frameworks.
              </p>
            </div>
          </MagicCard>

          {/* Another Stat / Feature */}
          <MagicCard className="p-8 flex flex-col justify-center space-y-4 group">
            <div className="w-12 h-12 rounded-lg bg-highlight/10 flex items-center justify-center border border-white/5 group-hover:bg-highlight group-hover:text-black transition-colors duration-300">
              <Rocket className="w-6 h-6 text-highlight group-hover:text-inherit" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">Startups</h4>
              <p className="text-sm text-muted-foreground mt-2">
                Helping early-stage startups scale their technical infrastructure.
              </p>
            </div>
          </MagicCard>

          {/* Global Reach */}
          <MagicCard className="md:col-span-1 p-8 flex flex-col justify-center space-y-4 group">
            <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-white/5 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
              <Globe className="w-6 h-6 text-emerald-500 group-hover:text-inherit" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">Global Reach</h4>
              <p className="text-sm text-muted-foreground mt-2">
                Collaborating with clients worldwide to deliver impactful solutions.
              </p>
            </div>
          </MagicCard>

        </div>
      </div>
    </section>
  );
};
