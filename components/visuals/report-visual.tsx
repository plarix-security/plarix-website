"use client";

import { motion } from "framer-motion";

const findings = [
  { name: "write_file()", before: "denied", after: "logged" },
  { name: "execute_sql()", before: "denied", after: "logged" },
  { name: "read_file()", before: "allowed", after: "logged" },
  { name: "http_request()", before: "denied", after: "logged" },
  { name: "send_email()", before: "allowed", after: "logged" },
];

const severityColors: Record<string, { bg: string; text: string }> = {
  denied: { bg: "rgba(239,68,68,0.12)", text: "#ef4444" },
  allowed: { bg: "rgba(34,197,94,0.10)", text: "#22c55e" },
  logged: { bg: "rgba(59,130,246,0.10)", text: "#3b82f6" },
};

export function ReportVisual() {
  return (
    <div className="relative w-full h-full bg-slate-950 overflow-hidden font-mono">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800/40 bg-slate-900/30">
          <span className="text-[10px] text-slate-400">AUDIT LOG</span>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="text-[9px] text-green-500/80">CEE COMPLIANT</span>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 border-b border-slate-800/30">
          {[
            { label: "Denied", value: "3", color: "#ef4444" },
            { label: "Allowed", value: "2", color: "#22c55e" },
            { label: "Logged", value: "5", color: "#3b82f6" },
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
            <span>Tool Call</span>
            <span className="text-center">Decision</span>
            <span />
            <span className="text-center">Status</span>
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
          <span className="text-[9px] text-slate-500">5 decisions recorded</span>
          <span className="text-[9px] text-green-500/70">100% logged</span>
        </div>
      </div>
    </div>
  );
}
