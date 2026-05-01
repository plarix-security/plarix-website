"use client";

import { motion } from "framer-motion";
import { FileBarChart, Bell, FileText } from "lucide-react";

const deliverables = [
  {
    icon: <FileBarChart className="w-6 h-6 text-amber-500" />,
    title: "Complete Audit Logs",
    description: "Every agent decision, timestamped and structured. Full visibility into what your agents are doing.",
    items: ["Every tool call logged", "Timestamped decision records", "Structured for analysis", "Exportable audit trails"],
  },
  {
    icon: <Bell className="w-6 h-6 text-amber-500" />,
    title: "Real-Time Alerts",
    description: "Know immediately when policy violations occur. No surprises.",
    items: ["Instant violation notifications", "Configurable alert thresholds", "Integration with your stack", "Clear violation context"],
  },
  {
    icon: <FileText className="w-6 h-6 text-amber-500" />,
    title: "AFB Exposure Reports",
    description: "Automated reports classifying your exposure by Agent Failure Boundary type.",
    items: ["Generated automatically", "Classified by AFB type", "Prioritized remediation steps", "Track improvement over time"],
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
              What You Get
            </span>
          </div>
          <h2 className="text-balance text-4xl md:text-5xl font-normal tracking-tight text-white">
            {"AI Agent Security Outputs That Matter".split(" ").map((word, i) => (
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

          <p className="text-slate-400 text-base leading-relaxed max-w-xl">
            Enforcement is the core. But enterprise AI compliance requires proof — structured audit trails, real-time violation alerts, and AFB exposure reports that answer security reviews directly.
          </p>
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
      </div>
    </section>
  );
}
