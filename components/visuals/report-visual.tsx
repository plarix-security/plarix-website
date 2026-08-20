"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const RECORDS = [
  {
    id: "baseline",
    ts: "before",
    metric: "invoice_matching",
    detail: "€300,000/yr · 8,000 hrs",
    verdict: "BASELINE" as const,
    hash: "measured",
  },
  {
    id: "result",
    ts: "after",
    metric: "invoice_matching",
    detail: "€120,000/yr · 2,500 hrs",
    verdict: "RESULT" as const,
    hash: "measured",
  },
  {
    id: "delta",
    ts: "saved",
    metric: "money + hours returned",
    detail: "€180,000 + 5,500 hrs",
    verdict: "SAVED" as const,
    hash: "logged",
  },
];

function Counter({ target, delay }: { target: number; delay: number }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const t = setTimeout(() => {
      if (cancelled) return;
      let current = 0;
      const step = () => {
        if (cancelled) return;
        if (current < target) {
          current++;
          setVal(current);
          timers.push(setTimeout(step, 120));
        }
      };
      step();
    }, delay);

    timers.push(t);
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [target, delay]);

  return <span className="tabular-nums">{val}</span>;
}

export function ReportVisual() {
  return (
    <div className="relative w-full h-full bg-slate-950 overflow-hidden font-mono flex flex-col">
      {/* Header */}
      <div className="relative flex items-center justify-between px-4 py-2.5 border-b border-slate-800/50 bg-slate-900/40 shrink-0">
        <span className="text-xs text-slate-300 tracking-wide">
          THE SCORECARD · BASELINE VS RESULT
        </span>
        <div className="flex items-center gap-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-green-500"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-[11px] text-green-400">LIVE</span>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 border-b border-slate-800/30 shrink-0">
        {[
          { label: "Money saved", target: 180, suffix: "k€", color: "#22c55e", delay: 300 },
          { label: "Hours returned", target: 5500, suffix: "", color: "#22c55e", delay: 550 },
          { label: "Baseline", target: 1, suffix: "", color: "#f59e0b", delay: 800 },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="flex flex-col items-center py-3 border-r border-slate-800/20 last:border-r-0"
          >
            <span className="text-xl font-bold" style={{ color: stat.color }}>
              <Counter target={stat.target} delay={stat.delay} />
              {stat.suffix}
            </span>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Audit chain */}
      <div className="flex-1 px-4 py-3 flex flex-col overflow-hidden">
        {RECORDS.map((rec, i) => {
          const isSaved = rec.verdict === "SAVED";
          const dotColor = isSaved ? "#22c55e" : "#f59e0b";
          return (
            <motion.div
              key={rec.id}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.3, duration: 0.35 }}
              className="relative flex gap-3 items-stretch"
            >
              {/* Chain column */}
              <div className="flex flex-col items-center shrink-0 w-5">
                <div
                  className="w-3 h-3 rounded-full border-2 shrink-0 mt-2.5"
                  style={{
                    borderColor: dotColor,
                    backgroundColor: dotColor + "25",
                  }}
                />
                {i < RECORDS.length - 1 && (
                  <motion.div
                    className="flex-1 w-px bg-slate-700/50 my-1"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{
                      delay: 0.7 + i * 0.3,
                      duration: 0.3,
                    }}
                    style={{ transformOrigin: "top" }}
                  />
                )}
              </div>

              {/* Record */}
              <div className="flex-1 border border-slate-800/40 bg-slate-900/30 px-3 py-2 mb-2">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-slate-500">
                      #{rec.id}
                    </span>
                    <span className="text-[10px] text-slate-700">{rec.ts}</span>
                  </div>
                  <span
                    className="text-[10px] font-bold px-1.5 py-0.5"
                    style={{
                      color: isSaved ? "#22c55e" : "#f59e0b",
                      backgroundColor: isSaved
                        ? "rgba(34,197,94,0.12)"
                        : "rgba(245,158,11,0.12)",
                    }}
                  >
                    {rec.verdict}
                  </span>
                </div>
                <p className="text-xs text-white/80 truncate mb-0.5">
                  {rec.metric}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-slate-600 truncate">
                    {rec.detail}
                  </span>
                  <span className="text-[10px] text-slate-700">·</span>
                  <span className="text-[10px] text-slate-700 font-mono">
                    {rec.hash}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="px-4 py-2.5 border-t border-slate-800/40 bg-slate-900/30 shrink-0 flex items-center justify-between">
        <span className="text-[11px] text-slate-400">
          Measured. Not promised.
        </span>
        <span className="text-[11px] text-green-500/80">money · hours</span>
      </div>
    </div>
  );
}
