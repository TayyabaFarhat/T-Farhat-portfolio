import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const education = [
    {
        school: "Superior University",
        degree: "Ph.D. Scholar in Deep Learning",
        date: "Ongoing",
        description: "Specializing in Deep Learning applications.",
    },
    {
        school: "Superior University",
        degree: "M.S. in Computer Science",
        date: "2012 - 2014",
        description: "Graduated with 3.77 CGPA (A+). Focused on Advanced Database Systems and Data Science.",
    },
    {
        school: "Lahore College for Women University",
        degree: "B.S. in Computer Science",
        date: "2007 - 2011",
        description: "Foundation in Computer Science.",
    },
];

/* ---------------- MOTION VARIANTS ---------------- */
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const card = {
    hidden: { opacity: 0, x: -30 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export const Education = () => {
    return (
        <section id="education" className="py-32 relative overflow-hidden">
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
                        Academic Background
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
                        Education &{" "}
                        <span className="font-serif italic font-normal text-white">
                            Qualifications
                        </span>
                    </h2>
                </motion.div>

                {/* EDUCATION LIST */}
                {/* EDUCATION LIST */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:left-1/2 md:-ml-[1px]" />

                    <motion.div
                        className="space-y-12"
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                variants={card}
                                className={`relative flex items-center md:justify-between gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-8 md:left-1/2 -ml-3 w-6 h-6 rounded-full border-4 border-background bg-primary z-10 shadow-[0_0_20px_rgba(14,165,233,0.5)]" />

                                {/* Content Card */}
                                <div className="ml-16 md:ml-0 md:w-[45%]">
                                    <div className="premium-card p-8 rounded-3xl group hover:border-primary/40 transition-colors">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                                <GraduationCap className="w-6 h-6" />
                                            </div>
                                            <span className="text-xs font-bold text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                                                {edu.date}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                                            {edu.school}
                                        </h3>
                                        <h4 className="text-sm font-medium text-muted-foreground mb-4">
                                            {edu.degree}
                                        </h4>

                                        {edu.description && (
                                            <p className="text-sm text-muted-foreground/80 leading-relaxed">
                                                {edu.description}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Empty visual balance for desktop */}
                                <div className="hidden md:block md:w-[45%]" />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
