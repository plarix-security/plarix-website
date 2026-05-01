"use client";

import { motion } from "framer-motion";
import { Bot, ShieldCheck, Building2 } from "lucide-react";

const audiences = [
  {
    icon: <Bot className="w-6 h-6 text-amber-500" />,
    title: "AI B2B SaaS teams shipping agents to enterprise",
    description:
      "Your agent is in production. It has tool access. Enterprise buyers are asking how you control what it can do. Wyatt answers that question with a tamper-evident audit trail and deterministic enforcement — not a policy document.",
    concerns: ["Enterprise security questionnaires", "Audit trails for every action", "Deny-by-default enforcement", "CEE-compliant logs"],
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-amber-500" />,
    title: "Teams moving agentic products upmarket",
    description:
      "Your early customers loved the agent. Now enterprise is asking for SOC 2 evidence, incident response plans, and proof that your agent cannot go rogue. Wyatt gives you the infrastructure to pass that due diligence.",
    concerns: ["SOC 2 audit readiness", "Incident response evidence", "Action authorization proof", "Security review support"],
  },
  {
    icon: <Building2 className="w-6 h-6 text-amber-500" />,
    title: "Engineers building agents that touch real data",
    description:
      "Database access. API calls. File writes. Customer records. Your agent has the keys. One prompt injection, one malformed input, one instruction hijack — and it uses them wrong. Wyatt enforces the boundary at the execution layer, every time.",
    concerns: ["Tool call enforcement", "Prompt injection defense", "Data access control", "Multi-tenant isolation"],
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

export function WhoWeServeSection() {
  return (
    <section className="w-full bg-slate-950 py-24 md:py-32 border-b border-slate-800/30">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="flex flex-col gap-6 mb-16">
          <div className="flex items-center gap-3 px-4 py-2 border border-slate-800/50 w-fit">
            <div className="w-2.5 h-2.5 bg-amber-500" />
            <span className="text-sm font-medium text-slate-500 tracking-wide">
              Who We Serve
            </span>
          </div>
          <h2 className="text-balance text-4xl md:text-5xl font-normal tracking-tight text-white max-w-2xl">
            {"Built for AI Teams Selling to Enterprise".split(" ").map((word, i) => (
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
            If your AI agent has live tool access and enterprise buyers are asking how you control it — Wyatt is the answer. Not a policy doc. Actual enforcement.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col gap-6 p-8 border border-slate-800/30 bg-slate-900/20 hover:bg-slate-900/40 transition-colors"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-amber-500/10 border border-amber-500/20">
                {audience.icon}
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-3">{audience.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{audience.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {audience.concerns.map((concern, idx) => (
                  <span key={idx} className="px-3 py-1 text-xs text-amber-500/80 bg-amber-500/5 border border-amber-500/10">
                    {concern}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
