"use client";

import { motion } from "framer-motion";
import { FileBarChart, Workflow, LineChart } from "lucide-react";

const deliverables = [
  {
    icon: <FileBarChart className="w-6 h-6 text-amber-500" />,
    title: "Baseline report",
    description: "A clear picture of what the process cost before we touched it: hours, euros, volume, and where the time actually went.",
    items: ["Time and cost per task", "Volume and frequency", "Where delays and rework happen", "The number every result gets measured against"],
  },
  {
    icon: <Workflow className="w-6 h-6 text-amber-500" />,
    title: "A working system",
    description: "The EEAS itself, integrated into how your team already works, not a demo and not a slide deck.",
    items: ["Deployed into your existing tools", "Built for the exact process we measured", "Owned by your team once it's live", "No dependency on Plarix to keep running"],
  },
  {
    icon: <LineChart className="w-6 h-6 text-amber-500" />,
    title: "The savings record",
    description: "A running comparison of the baseline against actual results: what changed, in money and hours, updated on a set schedule.",
    items: ["Money saved, tracked against baseline", "Hours returned, tracked against baseline", "Reported on a schedule you set", "Built to hold up in a budget review"],
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
              What you get
            </span>
          </div>
          <h2 className="text-balance text-4xl md:text-5xl font-normal tracking-tight text-white">
            {"Proof, not a pitch".split(" ").map((word, i) => (
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
            Building the system is half the job. Proving what it changed is the other half. Every engagement ends with a baseline report, a working system, and a savings record.
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
