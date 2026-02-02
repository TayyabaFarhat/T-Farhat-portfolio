import { GraduationCap, Award, BookOpen, Scroll, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const education = [
    {
        school: "Superior University",
        degree: "Ph.D. Scholar in Deep Learning",
        date: "2024 - Present",
        description: "Specializing in advanced Deep Learning applications and research-led innovation.",
        icon: Award,
        color: "primary",
        location: "Lahore, Pakistan"
    },
    {
        school: "Superior University",
        degree: "M.S. in Computer Science",
        date: "2012 - 2014",
        description: "Graduated with 3.77 CGPA (A+). Focused on Advanced Database Systems and Data Science.",
        icon: GraduationCap,
        color: "highlight",
        location: "Lahore, Pakistan"
    },
    {
        school: "Lahore College for Women University",
        degree: "B.S. in Computer Science",
        date: "2007 - 2011",
        description: "Foundation in Computer Science and Software Engineering principles.",
        icon: BookOpen,
        color: "secondary",
        location: "Lahore, Pakistan"
    },
];

export const Education = () => {
    return (
        <section id="education" className="py-32 relative overflow-hidden bg-background">
            <div className="section-divider-top" />
            <div className="section-divider-bottom" />
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-24">
                    <div className="space-y-4 max-w-2xl">
                        <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest text-xs uppercase px-4 py-1.5 rounded-full glass border border-primary/20">
                            <GraduationCap className="w-3.5 h-3.5" />
                            Academic Credentials
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter">Academic <span className="text-gradient">Foundation</span></h2>
                    </div>
                    <div className="hidden md:block">
                        <div className="w-24 h-24 rounded-full border border-white/5 flex items-center justify-center animate-spin-slow">
                            <Scroll className="w-10 h-10 text-muted-foreground opacity-20" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {education.map((edu, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="bento-card group p-10 rounded-[48px] border border-white/5 space-y-8 hover:-translate-y-4 transition-all duration-500 bg-surface/50"
                        >
                            <div className="flex justify-between items-start">
                                <div className={`w-20 h-20 rounded-3xl bg-${edu.color}/10 flex items-center justify-center border border-${edu.color}/20 group-hover:bg-${edu.color} group-hover:text-white transition-all duration-700 shadow-2xl`}>
                                    <edu.icon className="w-10 h-10" />
                                </div>
                                <div className="text-xs font-black text-muted-foreground bg-white/5 px-4 py-2 rounded-full border border-white/5">
                                    {edu.date}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-3xl font-black text-white leading-tight tracking-tight">{edu.school}</h3>
                                <div className="space-y-2">
                                    <div className={`text-lg font-bold text-${edu.color}`}>{edu.degree}</div>
                                    <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                                        <MapPin className="w-3.5 h-3.5" />
                                        {edu.location}
                                    </div>
                                </div>
                            </div>

                            <p className="text-muted-foreground leading-relaxed text-lg">
                                {edu.description}
                            </p>

                            <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-1000" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
