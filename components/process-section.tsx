"use client";

import { motion } from "framer-motion";
import { ClipboardList, Wrench, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: <ClipboardList className="w-5 h-5" />,
    title: "Audit",
    timeline: "One process, one baseline",
    items: [
      "We pick one expensive or repetitive process with you",
      "We measure current cost and hours directly",
      "You get a written baseline and an estimate",
      "No commitment required at this stage",
    ],
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    title: "Build",
    timeline: "The EEAS, scoped to that process",
    items: [
      "We design and build the agentic system",
      "It's scoped to the process we measured, not a general tool",
      "It runs alongside your existing systems",
      "We deploy it with your team, not instead of them",
    ],
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Measure",
    timeline: "Money and time, reported",
    items: [
      "Every result compared against the original baseline",
      "Euros saved and hours returned, reported on a schedule",
      "You keep the system either way",
      "We move to the next process once this one is proven",
    ],
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

export function ProcessSection() {
  return (
    <section id="process" className="relative w-full bg-slate-950 py-24 md:py-32 border-b border-slate-800/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="flex flex-col gap-6 mb-16">
          <div className="flex items-center gap-3 px-4 py-2 border border-slate-800/50 w-fit">
            <div className="w-2.5 h-2.5 bg-amber-500" />
            <span className="text-sm font-medium text-slate-500 tracking-wide">
              How it works
            </span>
          </div>
          <h2 className="text-balance text-4xl md:text-5xl font-normal tracking-tight text-white max-w-xl">
            {"Three steps, start to finish".split(" ").map((word, i) => (
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
          <p className="text-slate-400 text-base leading-relaxed max-w-lg">
            No lengthy transformation program. No new platform for your team to learn. Plarix runs the process, builds around it, and reports the result.
          </p>
        </div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col gap-4 p-8 border border-slate-800/30 bg-slate-900/20 relative"
            >
              {/* Step Number */}
              <span className="text-xs text-slate-600 font-mono tracking-wider">
                STEP {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center bg-amber-500/10 border border-amber-500/20 text-amber-500">
                {step.icon}
              </div>

              {/* Title & Timeline */}
              <div>
                <h3 className="text-lg font-medium text-white">{step.title}</h3>
                <span className="text-sm text-amber-500/70">{step.timeline}</span>
              </div>

              {/* Items */}
              <ul className="flex flex-col gap-2 mt-2">
                {step.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                    <div className="w-1 h-1 bg-slate-600 shrink-0 mt-2" />
                    {item}
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
