import {
  Brain,
  Lightbulb,
  Network,
  GraduationCap,
  Briefcase,
  Palette,
  ArrowRight,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";

const services = [
  {
    icon: Lightbulb,
    title: "AI Strategy & Roadmap",
    description:
      "Helping founders define where AI makes sense in their product, creating clear roadmaps aligned with business goals.",
  },
  {
    icon: Brain,
    title: "Research-to-Product Translation",
    description:
      "Converting academic research and complex algorithms into practical, scalable market-ready solutions.",
  },
  {
    icon: GraduationCap,
    title: "Incubation & Program Design",
    description:
      " designing and managing incubation programs for universities and organizations to foster startup growth.",
  },
  {
    icon: Briefcase,
    title: "Business & IT Consulting",
    description:
      "Expert consulting in Business Strategy, IT implementation, and Career Development Coaching.",
  },
  {
    icon: Users,
    title: "Founder Mentorship",
    description:
      "Mentoring early-stage founders on product development, team building, and fundraising strategies.",
  },
  {
    icon: Network,
    title: "Corporate Training",
    description:
      "Delivering workshops and training sessions on AI, Machine Learning, and Entrepreneurship.",
  },
];

/* ------------------ MOTION VARIANTS ------------------ */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const Services = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* PARALLAX BACKGROUND BLOBS */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-highlight/5 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
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
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            What I{" "}
            <span className="font-serif italic font-normal text-white">
              Offer
            </span>
          </h2>
          <p className="text-muted-foreground">
            Specialized AI services combining research, innovation, and
            production-grade engineering.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="group premium-card p-8 rounded-3xl border border-primary/20 transition-all relative isolate"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl z-[-1]" />

              {/* Icon container with enhanced effects */}
              <motion.div
                className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary-foreground/10 flex items-center justify-center mb-6 overflow-hidden"
                whileHover={{ scale: 1.15, rotate: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Icon glow effect */}
                <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/40 transition-colors duration-300" />
                <service.icon className="relative w-7 h-7 text-primary group-hover:text-secondary-foreground transition-colors duration-300" />
              </motion.div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                {service.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* MAGNETIC CTA BUTTON */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            whileHover={{ x: 6 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Button
              size="lg"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-2"
            >
              Request for Services <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
