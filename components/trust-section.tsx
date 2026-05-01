"use client";

import { motion } from "framer-motion";
import { Layers, ShieldOff, FileCode, Lock } from "lucide-react";

const blocks = [
  {
    icon: <Layers className="w-5 h-5 text-amber-500" />,
    title: "Framework Agnostic",
    description: "ARGOS works with any agent stack. LangChain, CrewAI, LlamaIndex, MCP, custom agents. One integration. No rewrites. No framework changes.",
  },
  {
    icon: <ShieldOff className="w-5 h-5 text-amber-500" />,
    title: "Deny by Default Architecture",
    description: "Nothing executes without explicit policy permission. Not configurable. It is the architecture. The only enforcement product built this way.",
  },
  {
    icon: <FileCode className="w-5 h-5 text-amber-500" />,
    title: "Built on the AFB Taxonomy",
    description: "The only runtime enforcement product built from a first-principles security model of how agents actually fail — not a generic checklist ported from web security.",
  },
  {
    icon: <Lock className="w-5 h-5 text-amber-500" />,
    title: "Virgil Attestation Layer",
    description: "Every agent action gets a tamper-evident cryptographic record: action taken, policy matched, identity authorized, timestamp. Built for SOC 2, incident response, and enterprise due diligence.",
  },
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

export function TrustSection() {
  return (
    <section className="w-full bg-slate-950 py-24 md:py-32 border-b border-slate-800/30">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="flex flex-col gap-6 mb-16 items-center text-center">
          <div className="flex items-center gap-3 px-4 py-2 border border-slate-800/50 w-fit">
            <div className="w-2.5 h-2.5 bg-amber-500" />
            <span className="text-sm font-medium text-slate-500 tracking-wide">
              Why Plarix
            </span>
          </div>
          <h2 className="text-balance text-4xl md:text-5xl font-normal tracking-tight text-white">
            {"Core Guarantees".split(" ").map((word, i) => (
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
            Scanners tell you what is wrong. Guardrails filter text. Identity layers manage who can log in.
            ARGOS manages what the agent can do <em>after</em> it is already running — at the execution layer.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {blocks.map((block, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex gap-6 p-8 border border-slate-800/30 bg-slate-900/20 hover:bg-slate-900/40 transition-colors"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-amber-500/10 border border-amber-500/20 shrink-0">
                {block.icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium text-white">{block.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{block.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
