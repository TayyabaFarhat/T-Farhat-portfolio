// Endorsements.jsx
import { User } from "lucide-react";
import { motion } from "framer-motion";

const endorsements = [
  {
    name: "Mian Asad Ali",
    title: "CEO @ Appsians | $5M Revenue",
    date: "Jan 27, 2026",
    context: "Client",
    quote:
      "Tayyaba provided excellent business consulting support. She was highly helpful, structured in her approach, and delivered practical insights that added real value.",
  },
  {
    name: "Inam Fareed",
    title: "CRM Developer | Full Stack Developer",
    date: "Jan 28, 2026",
    context: "Client",
    quote:
      "My project with Tayaba was a great experience. She was professional, reliable, and delivered quality work on time. Communication was clear throughout the project.",
  },
  {
    name: "Faheem Bilal",
    title: "Full Stack Developer | Laravel Specialist",
    date: "Jan 27, 2026",
    context: "Mentee",
    quote:
      "Miss Tayyaba is an outstanding mentor with deep experience in project-based learning and startup guidance. Their practical insights make complex concepts easy to understand.",
  },
  {
    name: "Muhammad Ali",
    title: "Founder & CEO @ Ascode Solutions",
    date: "Jan 26, 2026",
    context: "Former Student",
    quote:
      "It was an absolute honour working with Mrs Tayyaba. She is a pure tech diva, her professional and personal advice helped me a lot in my life and career.",
  },
  {
    name: "Abdul Haseeb",
    title: "Founder at Appointify",
    date: "Jan 27, 2026",
    context: "Client",
    quote:
      "She is actively helping me scale my startup and offers insightful consultation that actually works. Highly supportive and knowledgeable. Fully Recommended.",
  },
];

/* ---------------- MOTION VARIANTS ---------------- */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const Endorsements = () => {
  return (
    <section id="endorsements" className="py-32 relative overflow-hidden">
      {/* PARALLAX BACKGROUND BLOBS */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-52 sm:w-64 h-52 sm:h-64 bg-highlight/5 rounded-full blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* HEADER */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Recommendations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            What People{" "}
            <span className="font-serif italic font-normal text-white">
              Say
            </span>
          </h2>
          <p className="text-muted-foreground">
            Real testimonials from colleagues, students, and professionals who
            have worked with Tayyaba.
          </p>
        </motion.div>

        {/* ENDORSEMENTS GRID */}
        <motion.div
          className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {endorsements.map((endorsement, index) => (
            <motion.div
              key={index}
              variants={card}
              className="premium-card p-8 rounded-3xl relative group"
            >
              {/* Internal Gradient blob */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* HEADER */}
              <div className="flex items-center mb-6 relative z-10">
                <motion.div
                  className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mr-4 border border-primary/20"
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <User className="w-7 h-7 text-primary" />
                </motion.div>

                <div>
                  <div className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {endorsement.name}
                  </div>
                  <div className="text-xs font-medium text-primary mb-0.5 uppercase tracking-wide">
                    {endorsement.title}
                  </div>
                  <div className="text-[10px] text-muted-foreground/60">
                    {endorsement.date} • {endorsement.context}
                  </div>
                </div>
              </div>

              {/* QUOTE */}
              <p className="text-muted-foreground text-[15px] leading-relaxed relative z-10 italic">
                "{endorsement.quote}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
