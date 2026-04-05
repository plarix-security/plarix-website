"use client";

import React from "react"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShieldCheck, FileText, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { DiscoverVisual } from "@/components/visuals/discover-visual";
import { RedteamVisual } from "@/components/visuals/redteam-visual";
import { ReportVisual } from "@/components/visuals/report-visual";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  visual: React.ReactNode;
}

const features: Feature[] = [
  {
    id: 1,
    title: "1. Agent Calls Tool",
    description:
      "Your agent attempts to execute a tool call — file access, API request, database query, or any other operation.",
    icon: <Search className="w-5 h-5" />,
    visual: <DiscoverVisual />,
  },
  {
    id: 2,
    title: "2. Wyatt Intercepts",
    description:
      "Before execution, Wyatt intercepts the call and evaluates it against your defined policy. Every action. Every time.",
    icon: <ShieldCheck className="w-5 h-5" />,
    visual: <RedteamVisual />,
  },
  {
    id: 3,
    title: "3. Allow or Deny",
    description:
      "Wyatt enforces the policy decision. Authorized actions proceed. Unauthorized actions stop. Everything is logged.",
    icon: <FileText className="w-5 h-5" />,
    visual: <ReportVisual />,
  },
];

export function SolutionSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="solution" className="w-full bg-slate-950 text-white py-24 flex flex-col items-center overflow-hidden border-b border-slate-800/30">
      <div className="max-w-7xl w-full px-6 md:px-12 lg:px-16 gap-12 flex flex-col">
        {/* Header Section */}
        <div className="flex flex-col gap-4 max-w-[600px]">
          <div className="flex items-center gap-3 px-4 py-2 border border-slate-800/50 w-fit">
            <div className="w-2.5 h-2.5 bg-amber-500" />
            <span className="text-sm font-medium text-slate-500 tracking-wide">
              The Solution
            </span>
          </div>
          <h2 className="text-balance text-4xl md:text-5xl font-normal leading-[1.1] tracking-tight text-white">
            {"Runtime Enforcement for AI Agents".split(" ").map((word, i) => (
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
          <p className="text-balance text-slate-400 text-base leading-relaxed">
            Wyatt is infrastructure. It installs alongside any agent, intercepts every tool call, enforces policy, and logs every decision. Set it up and forget it exists.
          </p>
        </div>

        {/* Interactive Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[400px]">
          {/* Left: Visual Display */}
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-slate-800/30">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                className="absolute inset-0"
              >
                {features[activeIndex].visual}
              </motion.div>
            </AnimatePresence>

            {/* Progress indicator */}
            <div className="absolute bottom-3 left-3 right-3 h-0.5 flex gap-2 z-10">
              {features.map((_, idx) => (
                <div key={idx} className="h-full flex-1 bg-white/10 overflow-hidden">
                  {activeIndex === idx && (
                    <motion.div
                      className="h-full bg-amber-500/80"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 8, ease: "linear" }}
                    />
                  )}
                  {idx < activeIndex && (
                    <div className="h-full w-full bg-amber-500/80" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Step List */}
          <div className="flex flex-col gap-4">
            {features.map((feature, index) => (
              <motion.button
                key={feature.id}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "group relative w-full text-left p-6 transition-all duration-300 outline-none",
                  activeIndex === index
                    ? "bg-white/[0.03] border border-slate-800/60"
                    : "bg-transparent border border-transparent hover:bg-white/[0.01]"
                )}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start gap-4">
                  <div className={cn(
                    "mt-1 p-2 transition-colors duration-300",
                    activeIndex === index ? "bg-amber-500 text-slate-950" : "bg-white/5 text-slate-600"
                  )}>
                    {feature.icon}
                  </div>

                  <div className="flex-1 gap-1 flex flex-col">
                    <h3 className={cn(
                      "text-xl font-medium transition-colors duration-300",
                      activeIndex === index ? "text-white" : "text-slate-600"
                    )}>
                      {feature.title}
                    </h3>

                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="text-slate-400 text-base leading-relaxed overflow-hidden"
                        >
                          {feature.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className={cn(
                    "mt-1.5 transition-all duration-300",
                    activeIndex === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                  )}>
                    <ChevronRight className="w-5 h-5 text-white/40" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Footer/CTA Area */}
        <div className="pt-12 flex justify-center border-t border-slate-800/20">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.dispatchEvent(new CustomEvent("open-consultation"))}
            className="px-8 py-4 bg-amber-500 text-slate-950 font-medium flex items-center gap-2 hover:bg-amber-400 transition-colors"
          >
            Get Early Access to Wyatt
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
