import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Linkedin,
} from "lucide-react";

const skills = [
  "Artificial Intelligence",
  "Deep Learning",
  "Machine Learning",
  "Medical Image Analysis",
  "Convolutional Neural Networks (CNN)",
  "Natural Language Processing",
  "Text Classification",
  "Python",
  "Data Engineering",
  "SQL & Databases",
  "Research & Publications",
  "Startup Mentorship",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background Gradient Mesh */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-surface" />

        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary-foreground/10 rounded-full blur-3xl"
          style={{ animation: 'pulse-glow 4s ease-in-out infinite reverse' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-highlight/5 rounded-full blur-3xl animate-pulse" />

        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Floating dots with enhanced animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-60"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              backgroundColor: i % 3 === 0 ? "#0EA5E9" : i % 3 === 1 ? "#38BDF8" : "#F59E0B",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              filter: 'blur(1px)',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Incubation Manager • AI Researcher
            </span>

            {/* Headline with wipe animation */}
            <div className="space-y-4">
              <div className="wipe-container">
                <div className="wipe-overlay" />
                <h1 className="wipe-text text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Advancing <span className="text-primary glow-text">AI</span>
                  <br />
                  through research &
                  <br />
                  <span className="font-serif italic font-normal text-white">
                    real-world impact.
                  </span>
                </h1>
              </div>

              {/* Paragraph with delayed wipe */}
              <div className="wipe-container mt-6">
                <div
                  className="wipe-overlay"
                  style={{ animationDelay: "0.4s" }}
                />
                <p
                  className="wipe-text text-lg text-muted-foreground max-w-lg"
                  style={{ animationDelay: "1.1s" }}
                >
                  Hi, I’m Tayyaba Farhat — a PhD Scholar in Deep Learning and an
                  Incubation Manager with expertise in artificial intelligence,
                  medical image analysis, and academic research. I work at the
                  intersection of research, education, and innovation.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => {
                  const contactSection =
                    document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }}
              >
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Connect:
              </span>
              <a
                href="https://www.linkedin.com/in/tayyaba-farhat/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="relative max-w-md mx-auto">
              {/* Animated glow background */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-secondary-foreground/20 to-highlight/20 blur-2xl animate-pulse-glow" />

              {/* Main card with shimmer */}
              <div className="relative glass rounded-3xl p-2 glow-border group">
                <div className="absolute inset-0 shimmer-effect animate-shimmer rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative w-full aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex items-center justify-center border border-primary/20 overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(14, 165, 233, 0.3) 1px, transparent 0)',
                      backgroundSize: '40px 40px'
                    }} />
                  </div>

                  <span className="relative text-9xl font-bold bg-gradient-to-br from-primary via-secondary-foreground to-highlight bg-clip-text text-transparent select-none">
                    TF
                  </span>
                </div>

                {/* Floating badges with enhanced styling */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-5 py-3 animate-float border border-primary/20 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
                    </div>
                    <span className="text-sm font-medium bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                      PhD Scholar & AI Researcher
                    </span>
                  </div>
                </div>

                <div className="absolute -top-4 -left-4 glass rounded-xl px-5 py-3 animate-float animation-delay-500 border border-highlight/20 backdrop-blur-xl">
                  <div className="text-3xl font-bold text-transparent bg-gradient-to-br from-primary to-secondary-foreground bg-clip-text">
                    10+
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills marquee */}
        <div className="mt-20">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Areas of Expertise
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">
            Scroll
          </span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
