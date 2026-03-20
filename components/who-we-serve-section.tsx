"use client";

import { motion } from "framer-motion";
import { Landmark, HeartPulse, Building2 } from "lucide-react";

const audiences = [
  {
    icon: <Landmark className="w-6 h-6 text-amber-500" />,
    title: "FinTech and Financial Services",
    description: "Agents handling financial operations need more than a system prompt. Wyatt enforces what your agents can and cannot touch.",
    concerns: ["Transaction boundaries", "Data access controls", "Audit compliance", "Authorized operations only"],
  },
  {
    icon: <HeartPulse className="w-6 h-6 text-amber-500" />,
    title: "HealthTech and Healthcare SaaS",
    description: "Patient data cannot be exposed through an unauthorized tool call. Wyatt enforces access boundaries at runtime.",
    concerns: ["PHI protection", "Access enforcement", "Audit trails", "Runtime boundaries"],
  },
  {
    icon: <Building2 className="w-6 h-6 text-amber-500" />,
    title: "B2B SaaS and Enterprise Tools",
    description: "Your customers trust you with their data. Wyatt makes sure your agents honor that trust on every single action.",
    concerns: ["Multi-tenant isolation", "Customer data protection", "Action enforcement", "Every call logged"],
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
            {"Built for Teams Who Ship Agents and Mean It".split(" ").map((word, i) => (
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
            No matter your industry, if your AI agents have access to tools and data, Wyatt enforces what they are permitted to do.
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
                <h3 className="text-xl font-medium text-white mb-2">{audience.title}</h3>
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
