"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Calculator, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: <Calculator className="w-5 h-5 text-amber-500" />,
    title: "Nobody scoped the process",
    description:
      "Teams pick a process because it's visible, not because it's expensive. The processes actually draining budget and headcount are rarely the ones that get automated first.",
  },
  {
    icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
    title: "Nobody priced it before building",
    description:
      "A pilot ships, then someone asks what it cost to build and run. By then the number is fixed, and there's no baseline to compare it against.",
  },
  {
    icon: <TrendingDown className="w-5 h-5 text-amber-500" />,
    title: "Nobody can prove the return",
    description:
      "Leadership asks what the AI initiative saved. There's an answer for adoption and usage. There's rarely an answer in euros or hours.",
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

export function ProblemSection() {
  return (
    <section id="problem" className="relative w-full bg-slate-950 py-24 md:py-32 border-b border-slate-800/30">
      <div className="pointer-events-none absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><filter id=%22noise%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 result=%22noise%22 /></filter><rect width=%22100%22 height=%22100%22 filter=%22url(%23noise)%22 fill=%22%23ffffff%22/></svg>'\")",
      }} />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 md:px-12 lg:px-16">
        <div className="flex flex-col items-center text-center gap-8 mb-16">
          <div className="flex items-center gap-3 px-4 py-2 border border-slate-800/50 w-fit">
            <div className="w-2.5 h-2.5 bg-amber-500" />
            <span className="text-sm font-medium text-slate-500 tracking-wide">
              The problem
            </span>
          </div>
          <h2 className="text-balance text-4xl font-normal tracking-tight text-white md:text-5xl lg:text-5xl">
            {"Most AI initiatives don't fail because the model is bad. They fail because nobody did the math first.".split(" ").map((word, i) => (
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

          <p className="text-balance text-lg leading-relaxed text-slate-400 md:text-xl max-w-3xl">
            A team sees what AI can do and starts building. Nobody has asked what it costs to run, what it replaces, or whether the savings are real. Three questions arrive later that should have come first.
          </p>
        </div>

        {/* Problem Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col gap-4 p-8 border border-slate-800/30 bg-slate-900/20"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-amber-500/10 border border-amber-500/20">
                {problem.icon}
              </div>
              <h3 className="text-xl font-medium text-white">{problem.title}</h3>
              <p className="text-base leading-relaxed text-slate-400">{problem.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
