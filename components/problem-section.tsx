"use client";

import { motion } from "framer-motion";
import { AlertTriangle, DatabaseZap, ShieldAlert } from "lucide-react";

const problems = [
  {
    icon: <ShieldAlert className="w-5 h-5 text-amber-500" />,
    title: "Unauthorized Tool Execution",
    description:
      "Your agent can call any tool it has access to. A system prompt saying 'do not delete files' is not enforcement. It is a suggestion. One unauthorized action can delete data, send emails, or exfiltrate secrets.",
  },
  {
    icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
    title: "Context Poisoning",
    description:
      "Bad data enters the model and silently corrupts its behavior. Poisoned inputs can manipulate what your agent believes, leading to decisions based on compromised context.",
  },
  {
    icon: <DatabaseZap className="w-5 h-5 text-amber-500" />,
    title: "Instruction Hijacking",
    description:
      "Injected instructions hijack agent actions mid-run. The model's output becomes unsafe instructions that the agent executes without question, turning your tool into an attack vector.",
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
      {/* Grain texture overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><filter id=%22noise%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 result=%22noise%22 /></filter><rect width=%22100%22 height=%22100%22 filter=%22url(%23noise)%22 fill=%22%23ffffff%22/></svg>'\")",
      }} />
      
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 md:px-12 lg:px-16">
        <div className="flex flex-col items-center text-center gap-8 mb-16">
          <div className="flex items-center gap-3 px-4 py-2 border border-slate-800/50 w-fit">
            <div className="w-2.5 h-2.5 bg-amber-500" />
            <span className="text-sm font-medium text-slate-500 tracking-wide">
              The Problem
            </span>
          </div>
          <h2 className="text-balance text-4xl font-normal tracking-tight text-white md:text-5xl lg:text-5xl">
            {"Your Agent Has Full Access. Nothing Is Stopping It.".split(" ").map((word, i) => (
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
            No runtime enforcement exists in any major agent framework today. Your firewall cannot stop unauthorized tool calls. Your WAF cannot detect instruction hijacking. You need an enforcement layer.
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

        <p className="mt-12 text-center text-slate-500 text-sm">
          A system prompt is not a policy. It is a suggestion. You need actual enforcement.
        </p>
      </div>
    </section>
  );
}
