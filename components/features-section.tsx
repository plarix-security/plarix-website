"use client";

import React from "react"
import { motion } from "framer-motion";
import { ShieldAlert, Database, Bot, FileOutput, Lock, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
}

const DEFAULT_FEATURES: FeatureItem[] = [
  {
    id: "1",
    icon: <ShieldAlert className="w-5 h-5 text-white" />,
    title: "Prompt Injection Vulnerabilities",
    description: "Comprehensive testing against all injection attack vectors.",
    items: ["Direct and indirect injection attacks", "System prompt extraction", "Instruction override attempts", "Multi-turn attack chains"],
  },
  {
    id: "2",
    icon: <Database className="w-5 h-5 text-white" />,
    title: "RAG Security Assessment",
    description: "Protect your retrieval-augmented generation systems.",
    items: ["Document retrieval manipulation", "Data leakage via context stuffing", "Access control bypasses", "Poisoned document detection"],
  },
  {
    id: "3",
    icon: <Bot className="w-5 h-5 text-white" />,
    title: "Agentic AI Security",
    description: "Secure your autonomous AI agents and tool integrations.",
    items: ["Unauthorized tool and API usage", "Privilege escalation paths", "Runaway automation risks", "Data exfiltration via functions"],
  },
  {
    id: "4",
    icon: <FileOutput className="w-5 h-5 text-white" />,
    title: "Output Security Testing",
    description: "Ensure your AI outputs are safe and controlled.",
    items: ["Sensitive information disclosure", "Toxic and harmful content generation", "Hallucination-based vulnerabilities", "Input validation weaknesses"],
  },
  {
    id: "5",
    icon: <Lock className="w-5 h-5 text-white" />,
    title: "Authentication and Access Control",
    description: "Verify user isolation and authorization boundaries.",
    items: ["User isolation failures", "Multi-tenant data leakage", "Session manipulation", "Authorization bypasses"],
  },
  {
    id: "6",
    icon: <Cpu className="w-5 h-5 text-white" />,
    title: "Model Security",
    description: "Protect the model itself from extraction and abuse.",
    items: ["Model denial of service", "Training data extraction attempts", "Model theft vulnerabilities", "Supply chain security review"],
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

interface FeaturesSectionProps {
  className?: string;
}

export function FeaturesSection({ className }: FeaturesSectionProps) {
  return (
    <section
      id="features"
      className={cn(
        "w-full bg-slate-950 py-24 border-b border-slate-800/30",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 mb-16"
        >
          <div className="flex items-center gap-3 px-4 py-2 border border-slate-800/50 w-fit">
            <div className="w-2.5 h-2.5 bg-amber-500" />
            <span className="text-sm font-medium text-slate-500 tracking-wide">
              What We Test
            </span>
          </div>
          <h2 className="text-balance text-white text-4xl md:text-5xl lg:text-5xl font-normal leading-[1.1] max-w-[700px] tracking-tight">
            {"Comprehensive Security Coverage".split(" ").map((word, i) => (
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
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {DEFAULT_FEATURES.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="flex flex-col group p-8 border border-slate-800/30 bg-slate-900/20 hover:bg-slate-900/40 transition-colors"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-amber-500/10 border border-amber-500/20 transform transition-transform group-hover:scale-110 duration-300">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3">
                <h4 className="text-white text-lg font-medium tracking-tight">
                  {feature.title}
                </h4>
                <p className="text-balance text-slate-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
                <ul className="mt-2 flex flex-col gap-2">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-400">
                      <div className="w-1 h-1 bg-amber-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
