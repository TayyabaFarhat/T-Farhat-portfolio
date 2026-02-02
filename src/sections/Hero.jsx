import { motion } from "framer-motion";
import {
  Linkedin,
  Mail,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { profile } from "@/constants/data";
import { MagicCard } from "@/components/MagicCard";

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-background flex items-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-highlight/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Main Headline - Largest Tile */}
          <div className="md:col-span-2 md:row-span-2">
            <MagicCard className="h-full p-8 md:p-12 flex flex-col justify-center min-h-[400px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-primary uppercase tracking-widest">
                  <Sparkles className="w-3 h-3 animate-pulse" />
                  Innovation District Lead
                </div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight text-white">
                  Designing <br />
                  <span className="text-gradient">Intelligence.</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl font-medium">
                  I am <span className="text-white font-bold">{profile.name}</span>. {profile.headline}
                </p>
              </motion.div>
            </MagicCard>
          </div>

          {/* Social Links / Connect */}
          <div className="md:col-span-1">
            <MagicCard className="h-full p-8 flex flex-col justify-between gap-6 min-h-[200px]">
              <div className="space-y-2">
                <h3 className="text-lg font-bold">Connect</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Available for consulting</p>
              </div>
              <div className="flex gap-4">
                <a href={profile.contact.linkedin} target="_blank" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href={`mailto:${profile.contact.email}`} className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </MagicCard>
          </div>

          {/* Action Button */}
          <div className="md:col-span-1">
            <MagicCard className="h-full min-h-[120px] group cursor-pointer overflow-hidden p-0 relative">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="absolute inset-0 w-full h-full bg-primary flex items-center justify-center gap-4 text-white font-black text-xl hover:bg-primary/90 transition-all"
              >
                HIRE ME
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </MagicCard>
          </div>

          {/* Stats Bento Tiles */}
          {profile.stats.map((stat, i) => (
            <div key={i} className="md:col-span-1">
              <MagicCard className="h-full p-8 flex flex-col justify-center min-h-[160px]">
                <div className="text-4xl font-black text-white tracking-tighter mb-1">{stat.value}</div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">{stat.label}</div>
              </MagicCard>
            </div>
          ))}

          {/* Skills Marquee / Showcase - Full Width */}
          <div className="md:col-span-3">
            <MagicCard className="p-8 overflow-hidden flex items-center min-h-[100px]">
              <div className="flex animate-marquee gap-12 text-2xl font-black text-white/20 whitespace-nowrap">
                {[...profile.skills, ...profile.skills, ...profile.skills].map((skill, idx) => (
                  <span key={idx} className="hover:text-primary transition-colors cursor-default">{skill}</span>
                ))}
              </div>
            </MagicCard>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
