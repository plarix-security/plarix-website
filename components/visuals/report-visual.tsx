"use client";

import { motion } from "framer-motion";

const findings = [
  { name: "Prompt Injection", before: "critical", after: "fixed" },
  { name: "RAG Data Leak", before: "critical", after: "fixed" },
  { name: "Agent Authority", before: "high", after: "mitigated" },
  { name: "PII Exposure", before: "high", after: "fixed" },
  { name: "Tool Misuse", before: "medium", after: "mitigated" },
];

const severityColors: Record<string, { bg: string; text: string }> = {
  critical: { bg: "rgba(239,68,68,0.12)", text: "#ef4444" },
  high: { bg: "rgba(249,115,22,0.12)", text: "#f97316" },
  medium: { bg: "rgba(234,179,8,0.12)", text: "#eab308" },
  fixed: { bg: "rgba(34,197,94,0.10)", text: "#22c55e" },
  mitigated: { bg: "rgba(59,130,246,0.10)", text: "#3b82f6" },
};

export function ReportVisual() {
  return (
    <div className="relative w-full h-full bg-slate-950 overflow-hidden font-mono">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800/40 bg-slate-900/30">
          <span className="text-[10px] text-slate-400">EXECUTIVE SUMMARY</span>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="text-[9px] text-green-500/80">ALL REMEDIATED</span>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 border-b border-slate-800/30">
          {[
            { label: "Critical", value: "2", color: "#ef4444" },
            { label: "High", value: "2", color: "#f97316" },
            { label: "Medium", value: "1", color: "#eab308" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center py-2 border-r border-slate-800/20 last:border-r-0"
            >
              <span className="text-lg font-bold" style={{ color: stat.color }}>{stat.value}</span>
              <span className="text-[8px] text-slate-500 uppercase tracking-wider">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Before / After table */}
        <div className="flex-1 overflow-hidden">
          <div className="grid grid-cols-[1fr_70px_16px_70px] items-center px-3 py-1.5 border-b border-slate-800/30 text-[8px] text-slate-500 uppercase tracking-wider">
            <span>Finding</span>
            <span className="text-center">Before</span>
            <span />
            <span className="text-center">After</span>
          </div>

          {findings.map((finding, i) => {
            const beforeStyle = severityColors[finding.before];
            const afterStyle = severityColors[finding.after];
            return (
              <motion.div
                key={finding.name}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="grid grid-cols-[1fr_70px_16px_70px] items-center px-3 py-1.5 border-b border-slate-800/15"
              >
                <span className="text-[10px] text-slate-400 truncate">{finding.name}</span>
                <div className="flex justify-center">
                  <span
                    className="px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider"
                    style={{ backgroundColor: beforeStyle.bg, color: beforeStyle.text }}
                  >
                    {finding.before}
                  </span>
                </div>
                <div className="flex justify-center">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1 4H7M7 4L5 2M7 4L5 6" stroke="#475569" strokeWidth="0.8" />
                  </svg>
                </div>
                <div className="flex justify-center">
                  <span
                    className="px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider"
                    style={{ backgroundColor: afterStyle.bg, color: afterStyle.text }}
                  >
                    {finding.after}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-3 py-2 border-t border-slate-800/40 bg-slate-900/30 flex items-center justify-between">
          <span className="text-[9px] text-slate-500">5 findings remediated</span>
          <span className="text-[9px] text-green-500/70">100% resolved</span>
        </div>
      </div>
    </div>
  );
}
