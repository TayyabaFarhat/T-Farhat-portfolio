import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const publications = [
  {
    title: "An Explainable Deep Learning Framework for Multimodal Autism Diagnosis Using XAI GAMI-Net and Hypernetworks",
    issuer: "Diagnostics 15 (17), 2232",
    issued: "2025",
    skills: ["XAI", "GAMI-Net", "Autism Diagnosis", "Hypernetworks"],
    link: "https://www.researchgate.net/publication/395240708_An_Explainable_Deep_Learning_Framework_for_Multimodal_Autism_Diagnosis_Using_XAI_GAMI-Net_and_Hypernetworks",
    abstract: "Background: Autism Spectrum Disorder (ASD) is a neurodevelopmental condition characterized by heterogeneous behavioral and neurological patterns, complicating timely and accurate diagnosis..."
  },
  {
    title: "Unveiling Data Scientist Salaries: Predictive Modeling for Compensation Trends",
    issuer: "Journal of Computing & Biomedical Informatics 8 (02)",
    issued: "2025",
    skills: ["Predictive Modeling", "Data Science", "Salary Trends"],
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=sbJdyucAAAAJ&citation_for_view=sbJdyucAAAAJ:zYLM7Y9cAGgC",
  },
  {
    title: "Facial Image-Based Autism Detection: A Comparative Study of Deep Neural Network Classifiers",
    issuer: "Computers, Materials & Continua 78 (1)",
    issued: "2024",
    skills: ["Deep Learning", "VGG16", "MobileNet", "Autism Detection"],
    link: "https://www.researchgate.net/publication/376569691_Facial_Image-Based_Autism_Detection_A_Comparative_Study_of_Deep_Neural_Network_Classifiers",
    abstract: "Timely and precise ASD detection is crucial, particularly in regions with limited diagnostic resources like Pakistan. This study aims to conduct an extensive comparative analysis of deep neural network classifiers..."
  },
  {
    title: "Customer Segmentation for Targeted Marketing: A Comparative Analysis of Clustering Techniques",
    issuer: "2023 25th International Multitopic Conference (INMIC)",
    issued: "Nov 17, 2023",
    skills: ["K-Means", "Hierarchical Clustering", "CRISP-DM", "Marketing"],
    link: "https://ieeexplore.ieee.org/abstract/document/10466067",
    abstract: "This research employs the Cross-Industry Standard Process for Data Mining (CRISP-DM) methodology to investigate customer segmentation for targeted marketing. Our study applies K-Means and Hierarchical Clustering algorithms to create customer segments."
  },
  {
    title: "Deep Learning for Sarcasm Identification in News Headlines",
    issuer: "Applied Sciences 13 (9), 5586",
    issued: "Apr 16, 2023",
    skills: ["NLP", "Deep Learning", "LSTM", "Sarcasm Detection"],
    link: "https://www.mdpi.com/2076-3417/13/9/5586",
    abstract: "This paper proposes a deep learning architecture-based model for sarcasm identification in news headlines. The model uses LSTM to capture temporal dependencies and utilizes a GlobalMaxPool1D layer for better feature extraction."
  },
  {
    title: "Predicting Heart Disease with Machine Learning: A Comparative Study of Classifiers",
    issuer: "International Conference on Computing & Emerging Technologies",
    issued: "2023",
    skills: ["Machine Learning", "Heart Disease Prediction", "Classification"],
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=sbJdyucAAAAJ&citation_for_view=sbJdyucAAAAJ:Tyk-4Ss8FVUC"
  },
  {
    title: "Impact of excessive usage of smartphone in Kids",
    issuer: "International Journal 10 (3)",
    issued: "2021",
    skills: ["Social Impact", "Smartphone Usage", "Child Development"],
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=sbJdyucAAAAJ&citation_for_view=sbJdyucAAAAJ:d1gkVwhDpl0C"
  },
  {
    title: "ReqSpecOnto: Investigating Explicit Software Requirements Specification",
    issuer: "Innovative Computing Review 1 (2), 44-70",
    issued: "2021",
    skills: ["Requirements Engineering", "Ontology", "Software Specs"],
    link: "https://www.researchgate.net/publication/360106944_ReqSpecOnto_Investigating_Explicit_Software_Requirements_Specification",
    abstract: "Investigation of explicit software requirements specification using ontologies to reduce ambiguities in natural language requirements."
  },
];

/* ---------------- MOTION VARIANTS ---------------- */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export const Projects = () => {
  const fullText = "Research & Publications";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="research" className="py-32 relative overflow-hidden">
      {/* PARALLAX BACKGROUND BLOBS */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* HEADER */}
        <motion.div
          className="text-center mx-auto max-w-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            {typedText}
            <span className="inline-block w-[1px] h-4 bg-secondary-foreground ml-1 animate-pulse" />
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Publications that
            <span className="font-serif italic font-normal text-white">
              {" "}
              highlight expertise.
            </span>
          </h2>
          <p className="text-muted-foreground">
            Selected research work by Miss Tayyaba Farhat showcasing contributions in AI, deep learning, and medical imaging.
          </p>
        </motion.div>

        {/* PUBLICATIONS GRID */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {publications.map((pub, idx) => (
            <motion.div
              key={idx}
              variants={card}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group premium-card rounded-3xl p-8 relative overflow-hidden isolate"
            >
              {/* Enhanced Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-secondary-foreground/5 to-highlight/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[-1]" />

              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 shimmer-effect animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

              <div className="flex items-start justify-between mb-4">
                <div className="space-y-1 flex-1">
                  <p className="text-xs font-bold tracking-wider text-primary uppercase flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    {pub.issuer}
                  </p>
                  <h3 className="text-xl font-bold leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary-foreground group-hover:bg-clip-text transition-all duration-300">
                    {pub.title}
                  </h3>
                </div>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 p-3 rounded-full bg-white/5 hover:bg-primary hover:text-white transition-all duration-300 group-hover:rotate-45 group-hover:scale-110 border border-primary/10 hover:border-primary/30"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>

              <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                <span className="font-medium">Issued: {pub.issued}</span>
              </div>

              {pub.abstract && (
                <p className="text-sm text-muted-foreground/80 mb-6 line-clamp-3 leading-relaxed group-hover:text-muted-foreground transition-colors">
                  {pub.abstract}
                </p>
              )}

              <div className="flex flex-wrap gap-2 mt-auto">
                {pub.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1.5 text-[11px] font-semibold tracking-wide rounded-full bg-white/5 border border-white/10 text-muted-foreground group-hover:border-primary/30 group-hover:text-primary group-hover:bg-primary/5 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Bottom glow line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* VIEW ALL CTA */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a
            href="https://scholar.google.com/citations?user=sbJdyucAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedBorderButton>
              Google Scholar
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>

          <a
            href="https://www.researchgate.net/profile/Tayyaba-Farhat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedBorderButton>
              ResearchGate
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
