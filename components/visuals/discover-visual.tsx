"use client";

import { motion } from "framer-motion";

const tools = [
  { call: "write_file()", risk: "CRITICAL", color: "#ef4444", bg: "rgba(239,68,68,0.08)" },
  { call: "execute_sql()", risk: "CRITICAL", color: "#ef4444", bg: "rgba(239,68,68,0.08)" },
  { call: "http_request()", risk: "HIGH", color: "#f97316", bg: "rgba(249,115,22,0.08)" },
  { call: "send_email()", risk: "MEDIUM", color: "#eab308", bg: "rgba(234,179,8,0.08)" },
  { call: "read_file()", risk: "HIGH", color: "#f97316", bg: "rgba(249,115,22,0.08)" },
];

export function DiscoverVisual() {
  return (
    <div className="relative w-full h-full bg-slate-950 overflow-hidden font-mono flex flex-col">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Header */}
      <div className="relative flex items-center justify-between px-4 py-2.5 border-b border-slate-800/50 bg-slate-900/40 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-xs text-slate-300 tracking-wide">AGENT RUNTIME · LIVE</span>
        </div>
        <span className="text-[11px] text-slate-500">unprotected</span>
      </div>

      {/* Tool access list */}
      <div className="relative flex-1 px-4 py-3 flex flex-col justify-center gap-2">
        <p className="text-[11px] text-slate-500 mb-1">AI Agent has unrestricted access to:</p>

        {tools.map((tool, i) => (
          <motion.div
            key={tool.call}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 + i * 0.12 }}
            className="flex items-center justify-between px-3 py-2 border border-slate-800/40 bg-slate-900/30"
          >
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: tool.color }} />
              <span className="text-sm text-slate-200">{tool.call}</span>
            </div>
            <span
              className="text-[10px] font-bold px-2 py-0.5 tracking-wider"
              style={{ color: tool.color, backgroundColor: tool.bg }}
            >
              {tool.risk}
            </span>
          </motion.div>
        ))}
      </div>

      {/* No enforcement banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="relative mx-4 mb-3 px-3 py-2 border border-red-500/25 bg-red-500/5"
      >
        <p className="text-xs text-red-400/90 font-medium">No policy defined. No enforcement. Actions execute immediately.</p>
      </motion.div>

      {/* Footer */}
      <div className="relative px-4 py-2 border-t border-slate-800/40 bg-slate-900/30 shrink-0">
        <span className="text-[11px] text-slate-600">Wyscan detects these exposures pre-production</span>
      </div>
    </div>
  );
}
