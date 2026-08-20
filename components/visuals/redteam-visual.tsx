"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EVENTS = [
  {
    ts: "baseline",
    fn: "invoice_matching",
    cost: "€300,000/yr · 8,000 hrs",
    verdict: "MEASURED" as const,
  },
  {
    ts: "model",
    fn: "eeas.build(process, baseline)",
    cost: "build + run cost vs baseline",
    verdict: "DESIGNED" as const,
  },
  {
    ts: "result",
    fn: "invoice_matching",
    cost: "€120,000/yr · 2,500 hrs",
    verdict: "DEPLOYED" as const,
  },
];

type Phase = "incoming" | "scanning" | "verdict";

export function RedteamVisual() {
  const [eventIdx, setEventIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>("incoming");

  useEffect(() => {
    const currentEvent = EVENTS[eventIdx];
    let cancelled = false;

    const t1 = setTimeout(() => {
      if (!cancelled) setPhase("scanning");
    }, 700);

    const t2 = setTimeout(() => {
      if (!cancelled) setPhase("verdict");
    }, 1800);

    const t3 = setTimeout(() => {
      if (cancelled) return;
      setEventIdx((i) => (i + 1) % EVENTS.length);
      setPhase("incoming");
    }, 3200);

    return () => {
      cancelled = true;
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [eventIdx]);

  const ev = EVENTS[eventIdx];
  const isDeployed = ev.verdict === "DEPLOYED";

  return (
    <div className="relative w-full h-full bg-slate-950 overflow-hidden font-mono flex flex-col">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.05) 3px, rgba(255,255,255,0.05) 4px)",
        }}
      />

      {/* Amber glow when measuring */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: phase === "scanning" ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(245,158,11,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Header */}
      <div className="relative flex items-center justify-between px-4 py-2.5 border-b border-slate-800/50 bg-slate-900/40 shrink-0">
        <div className="flex items-center gap-2">
          <motion.div
            className="w-2 h-2 rounded-full bg-amber-500"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-xs text-slate-300 tracking-wide">
            EEAS · ECONOMICALLY-ENGINEERED · ACTIVE
          </span>
        </div>
        <span className="text-green-400 text-[11px] tabular-nums">
          baseline → build → result
        </span>
      </div>

      {/* Event display */}
      <div className="relative flex-1 px-4 py-4 flex flex-col gap-3 justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={eventIdx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28 }}
            className="flex flex-col gap-3"
          >
            {/* Incoming call block */}
            <div className="border border-slate-800/50 bg-slate-900/40 px-3 py-2.5">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] text-slate-600 uppercase tracking-wider">
                  Process
                </span>
                <span className="text-[10px] text-slate-700">·</span>
                <span className="text-[10px] text-slate-500">{ev.ts}</span>
              </div>
              <p className="text-sm text-white/90 leading-snug mb-1 truncate">
                {ev.fn}
              </p>
              <p className="text-[11px] text-slate-500">{ev.cost}</p>
            </div>

            {/* Evaluation block */}
            <div className="border border-amber-500/20 bg-amber-500/[0.04] px-3 py-2.5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] text-amber-500/80 uppercase tracking-wider">
                  Measuring against baseline
                </span>
                <span className="text-[10px] text-slate-600">
                  money · hours
                </span>
              </div>
              <div className="h-1 bg-slate-800/50 overflow-hidden">
                <motion.div
                  className="h-full bg-amber-500"
                  initial={{ width: "0%" }}
                  animate={{ width: phase !== "incoming" ? "100%" : "0%" }}
                  transition={{
                    duration: phase === "scanning" ? 1.1 : 0,
                    ease: "easeOut",
                  }}
                />
              </div>
            </div>

            {/* Verdict block */}
            <AnimatePresence>
              {phase === "verdict" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="border px-3 py-2.5 flex items-center justify-between"
                  style={{
                    borderColor: isDeployed
                      ? "rgba(34,197,94,0.3)"
                      : "rgba(245,158,11,0.3)",
                    backgroundColor: isDeployed
                      ? "rgba(34,197,94,0.05)"
                      : "rgba(245,158,11,0.05)",
                  }}
                >
                  <span className="text-sm text-slate-300">
                    {isDeployed
                      ? "Result logged against baseline"
                      : "Stage complete — continuing"}
                  </span>
                  <motion.span
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="text-sm font-bold px-2.5 py-1 shrink-0"
                    style={{
                      color: isDeployed ? "#22c55e" : "#f59e0b",
                      backgroundColor: isDeployed
                        ? "rgba(34,197,94,0.15)"
                        : "rgba(245,158,11,0.15)",
                    }}
                  >
                    {ev.verdict}
                  </motion.span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="relative px-4 py-2.5 border-t border-slate-800/40 bg-slate-900/30 shrink-0 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-amber-500"
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-[11px] text-slate-400">
            Economics first · built around your process
          </span>
        </div>
        <span className="text-[11px] text-slate-600 font-mono">
          money · hours
        </span>
      </div>
    </div>
  );
}
