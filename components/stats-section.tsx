"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "Zero", label: "frameworks", context: "No runtime enforcement exists in any major agent framework today" },
  { value: "100%", label: "suggestions", context: "System prompts are suggestions, not policies. They can be ignored." },
  { value: "One", label: "tool call", context: "One unauthorized action can delete data, send emails, or exfiltrate secrets" },
  { value: "AFB", label: "taxonomy", context: "Four failure boundaries define how agent systems actually break" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

export function StatsSection() {
  return (
    <section className="relative w-full bg-slate-950 py-24 md:py-32 border-b border-slate-800/30">
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="flex flex-col items-center text-center gap-8 mb-16">
          <div className="flex items-center gap-3 px-4 py-2 border border-slate-800/50 w-fit">
            <div className="w-2.5 h-2.5 bg-amber-500" />
            <span className="text-sm font-medium text-slate-500 tracking-wide">
              The Reality
            </span>
          </div>
          <h2 className="text-balance text-4xl md:text-5xl font-normal tracking-tight text-white">
            {"The Enforcement Gap Is Real".split(" ").map((word, i) => (
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center gap-3 p-8 border border-slate-800/30 bg-slate-900/20"
            >
              <span className="text-4xl md:text-5xl font-normal text-amber-500 tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-white uppercase tracking-wider">
                {stat.label}
              </span>
              <p className="text-sm text-slate-500 leading-relaxed">
                {stat.context}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-12 text-center text-slate-400 text-base max-w-2xl mx-auto">
          Your firewall cannot stop unauthorized tool calls. Your WAF cannot detect instruction hijacking. You need Wyatt.
        </p>
      </div>
    </section>
  );
}
