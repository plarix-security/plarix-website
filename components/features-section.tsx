"use client";

import React from "react"
import { motion } from "framer-motion";
import { ClipboardList, TrendingUp, Wrench, Search } from "lucide-react";
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
    icon: <ClipboardList className="w-5 h-5 text-white" />,
    title: "Process diagnostic",
    description: "We sit with the team doing the work and measure it: steps, time per step, cost per step, error rate, volume. This becomes the baseline every result gets measured against.",
    items: ["Time and cost per task, measured directly", "Volume and frequency mapped", "Error and rework rate captured", "A written baseline before any build starts"],
  },
  {
    id: "2",
    icon: <TrendingUp className="w-5 h-5 text-white" />,
    title: "Economic modeling",
    description: "Before we write any code, we model what automating the process would cost to build and run, and compare it to the baseline. If the number doesn't work, we say so and stop.",
    items: ["Build and run cost estimated up front", "Compared against the measured baseline", "Break-even point calculated before build", "No build recommended when the math doesn't hold"],
  },
  {
    id: "3",
    icon: <Wrench className="w-5 h-5 text-white" />,
    title: "EEAS build",
    description: "We build the agentic system around the specific process we measured, using the tools and data your company already has. No rebuild of your stack, no new platform to adopt.",
    items: ["Built around your existing systems", "Scoped to one process, not a general assistant", "Deployed alongside your team, not instead of oversight", "Handles the volume and edge cases we measured"],
  },
  {
    id: "4",
    icon: <Search className="w-5 h-5 text-white" />,
    title: "Free process scan",
    description: "A short, no-cost session where we estimate the savings on one process before you commit to anything. You get a number. You decide if it's worth building.",
    items: ["One process, reviewed in under a week", "Estimated savings in euros and hours", "No obligation to continue", "Always free"],
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
              Capabilities
            </span>
          </div>
          <h2 className="text-balance text-white text-4xl md:text-5xl lg:text-5xl font-normal leading-[1.1] max-w-[700px] tracking-tight">
            {"How Plarix builds an EEAS".split(" ").map((word, i) => (
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
            Turning a process into a measurable AI system takes more than a model. It takes a baseline, an economic model, a build, and a report.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
