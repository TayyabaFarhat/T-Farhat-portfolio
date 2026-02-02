import { profile } from "@/constants/data";
import { Quote, Heart, BadgeCheck, MessageSquareQuote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { MagicCard } from "@/components/MagicCard";

export const Testimonials = () => {
  // Split data into columns for Masonry layout
  // Assuming profile.testimonials has at least 3 items. If fewer, adjust accordingly.
  const col1 = [profile.testimonials[0], profile.testimonials[2]].filter(Boolean);
  const col2 = [profile.testimonials[1], profile.testimonials[3]].filter(Boolean);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            Reviews & <span className="text-gradient">Validation</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Honored to have supported amazing founders and students.
          </p>
        </div>

        {/* Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">

          {/* Column 1 */}
          <div className="space-y-6 flex flex-col">
            {col1.map((testi, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <MagicCard className="p-8 group">
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, si) => (
                          <Star key={si} className={`w-3.5 h-3.5 ${si < testi.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-700'}`} />
                        ))}
                      </div>
                      <Quote className="w-8 h-8 text-white/5 group-hover:text-white/20 transition-colors" />
                    </div>
                    <p className="text-foreground/90 leading-relaxed font-medium italic">
                      "{testi.content}"
                    </p>
                    <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-white font-bold border border-white/10">
                        {testi.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{testi.name}</h4>
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{testi.role}</p>
                      </div>
                    </div>
                  </div>
                </MagicCard>
              </motion.div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-6 flex flex-col lg:translate-y-12">
            {/* Summary Stat Card First in this column */}
            <MagicCard className="p-10 flex flex-col items-center justify-center text-center space-y-6 bg-primary/5 border-primary/20">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 animate-pulse">
                <Heart className="w-10 h-10 text-primary fill-primary" />
              </div>
              <div>
                <div className="text-5xl font-black text-white">4.9/5</div>
                <div className="text-xs font-bold text-primary uppercase tracking-widest mt-2">Global Rating</div>
              </div>
              <p className="text-sm text-muted-foreground px-4">
                Based on professional recommendations and direct consultations.
              </p>
            </MagicCard>

            {col2.map((testi, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1) }}
              >
                <MagicCard className="p-8 group">
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, si) => (
                          <Star key={si} className={`w-3.5 h-3.5 ${si < testi.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-700'}`} />
                        ))}
                      </div>
                      <Quote className="w-8 h-8 text-white/5 group-hover:text-white/20 transition-colors" />
                    </div>
                    <p className="text-foreground/90 leading-relaxed font-medium italic">
                      "{testi.content}"
                    </p>
                    <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-white font-bold border border-white/10">
                        {testi.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{testi.name}</h4>
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{testi.role}</p>
                      </div>
                    </div>
                  </div>
                </MagicCard>
              </motion.div>
            ))}
          </div>

          {/* Column 3 (If needed in future or for larger screens with more data) */}
          <div className="hidden lg:flex flex-col space-y-6">
            <MagicCard className="p-8 group flex items-center justify-center min-h-[200px] border-dashed border-white/20 bg-transparent">
              <div className="text-center space-y-2">
                <MessageSquareQuote className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <h3 className="text-lg font-bold">More Reviews</h3>
                <p className="text-xs text-muted-foreground">Check LinkedIn for 50+ more recommendations.</p>
              </div>
            </MagicCard>
          </div>

        </div>
      </div>
    </section>
  );
};
