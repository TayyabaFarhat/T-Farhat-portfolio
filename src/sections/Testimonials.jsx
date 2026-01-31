import { ChevronLeft, ChevronRight, Award } from "lucide-react";
import { useState } from "react";

const certificates = [
  { title: "Improving Insights with OpenAI's Advanced Data Analysis", issuer: "LinkedIn", issued: "Aug 2024" },
  { title: "Learning Graph Neural Networks", issuer: "LinkedIn", issued: "Aug 2024" },
  { title: "Analyzing Data with Python", issuer: "edX", issued: "Jun 2021" },
  { title: "Python Essentials", issuer: "edX", issued: "Jun 2021" },
  { title: "Using Python for Research", issuer: "Harvard University", issued: "Jun 2017" },
  { title: "Intro to Python for Data Science", issuer: "DataCamp", issued: "Online" },
  { title: "Python DataScience ToolBox (Part 2)", issuer: "DataCamp", issued: "Online" },
  { title: "Python for DataScience", issuer: "DataCamp", issued: "Online" },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => setActiveIdx((prev) => (prev + 1) % certificates.length);
  const previous = () => setActiveIdx((prev) => (prev - 1 + certificates.length) % certificates.length);

  return (
    <section id="certificates" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Certifications & Learning
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Achievements that{" "}
            <span className="font-serif italic font-normal text-white">
              showcase expertise.
            </span>
          </h2>
        </div>

        {/* Certificates Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="premium-card p-10 rounded-[2.5rem] md:p-14 border border-primary/20 relative overflow-hidden group">
              {/* Background Glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary-foreground/10 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 shadow-lg shadow-primary/5 ring-4 ring-primary/5">
                  <Award className="w-8 h-8 text-primary drop-shadow-[0_0_8px_rgba(14,165,233,0.5)]" />
                </div>

                <div className="text-2xl md:text-3xl font-bold leading-tight mb-4 text-foreground tracking-tight">
                  {certificates[activeIdx].title}
                </div>

                <div className="flex flex-col items-center gap-2">
                  <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm md:text-base font-medium text-primary">
                    {certificates[activeIdx].issuer}
                  </span>
                  <span className="text-sm text-muted-foreground/60 tracking-wider uppercase font-medium mt-2">
                    {certificates[activeIdx].issued}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {certificates.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIdx
                      ? "w-8 bg-primary"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
