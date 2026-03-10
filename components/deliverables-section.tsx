"use client";

import { motion } from "framer-motion";
import { FileBarChart, Code2, Map, Video } from "lucide-react";

const deliverables = [
  {
    icon: <FileBarChart className="w-6 h-6 text-amber-500" />,
    title: "Executive Summary",
    description: "Clear, non-technical overview of findings and risk assessment. Perfect for board presentations and stakeholder communication.",
    items: ["Overall security posture", "Critical findings overview", "Business impact analysis", "Recommended priorities"],
  },
  {
    icon: <Code2 className="w-6 h-6 text-amber-500" />,
    title: "Technical Security Report",
    description: "Deep technical documentation for your engineering team.",
    items: ["Detailed vulnerability descriptions", "Severity ratings (Critical, High, Medium, Low)", "Step-by-step reproduction guides", "Code-level remediation examples"],
  },
  {
    icon: <Map className="w-6 h-6 text-amber-500" />,
    title: "Remediation Roadmap",
    description: "Prioritized action plan to fix vulnerabilities efficiently.",
    items: ["Quick wins vs. long-term fixes", "Implementation timelines", "Security best practices", "Future-proofing guidance"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function DeliverablesSection() {
  return (
    <section className="w-full bg-slate-950 py-24 md:py-32 border-b border-slate-800/30">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="flex flex-col gap-6 mb-16">
          <div className="flex items-center gap-3 px-4 py-2 border border-slate-800/50 w-fit">
            <div className="w-2.5 h-2.5 bg-amber-500" />
            <span className="text-sm font-medium text-slate-500 tracking-wide">
              Deliverables
            </span>
          </div>
          <h2 className="text-balance text-4xl md:text-5xl font-normal tracking-tight text-white">
            {"What You Receive".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ filter: "blur(10px)", opacity: 0 }}
                whileInView={{ filter: "blur(0px)", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {deliverables.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col gap-6 p-8 border border-slate-800/30 bg-slate-900/20 hover:bg-slate-900/40 transition-colors"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-amber-500/10 border border-amber-500/20">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
              <ul className="flex flex-col gap-2">
                {item.items.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-400">
                    <div className="w-1 h-1 bg-amber-500 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bonus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 flex items-center gap-4 p-6 border border-slate-800/30 bg-slate-900/20"
        >
          <div className="w-10 h-10 flex items-center justify-center bg-amber-500/10 border border-amber-500/20 shrink-0">
            <Video className="w-5 h-5 text-amber-500" />
          </div>
          <div>
            <h4 className="text-white font-medium">30-Minute Walkthrough Call</h4>
            <p className="text-sm text-slate-400">Live session with your team to explain findings, answer questions, and provide implementation guidance.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
