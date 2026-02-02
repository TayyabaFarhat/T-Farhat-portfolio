import { ArrowUpRight, BookOpen, ExternalLink, GraduationCap } from "lucide-react";
import { profile } from "@/constants/data";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <section id="research" className="py-32 relative overflow-hidden bg-background">
      <div className="section-divider-top" />
      <div className="section-divider-bottom" />
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest text-xs uppercase">
              <span className="w-8 h-px bg-primary" />
              Academic Contributions
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Research & <span className="text-gradient">Publications</span></h2>
          </div>
          <p className="text-muted-foreground max-w-md text-lg">
            Showcasing contributions to the global AI research community across medical imaging and applied ML.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {profile.publications.map((pub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="premium-card group p-10 rounded-[40px] border border-white/5 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-highlight/10 flex items-center justify-center border border-highlight/20">
                    <BookOpen className="w-6 h-6 text-highlight" />
                  </div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider bg-white/5 px-4 py-1.5 rounded-full border border-white/5">
                    {pub.year}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors leading-tight">
                    {pub.title}
                  </h3>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <GraduationCap className="w-4 h-4" />
                    <span className="text-sm">{pub.publishedIn}</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest">Available Online</span>
                </div>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground font-bold hover:text-primary transition-colors group/link"
                >
                  Read Paper
                  <div className="p-2 rounded-full glass border border-white/5 group-hover/link:bg-primary group-hover/link:border-primary transition-all">
                    <ExternalLink className="w-4 h-4 group-hover/link:text-white" />
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scholar CTA */}
        <div className="mt-16 flex justify-center gap-6">
          <a
            href="https://scholar.google.com/citations?user=sbJdyucAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 glass border border-white/5 rounded-full font-bold hover:border-primary/50 hover:text-primary transition-all flex items-center gap-2"
          >
            Google Scholar <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="https://www.researchgate.net/profile/Tayyaba-Farhat"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 glass border border-white/5 rounded-full font-bold hover:border-primary/50 hover:text-primary transition-all flex items-center gap-2"
          >
            ResearchGate <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
