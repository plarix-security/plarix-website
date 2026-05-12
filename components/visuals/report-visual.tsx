"use client";

import { motion } from "framer-motion";

const records = [
  {
    id: "1294",
    ts: "14:32:01Z",
    action: "write_file()",
    agent: "sales-assistant-prod",
    rule: "fs.write.system",
    verdict: "DENY",
  },
  {
    id: "1295",
    ts: "14:32:02Z",
    action: "execute_sql()",
    agent: "data-analyst-v2",
    rule: "db.read.authorized",
    verdict: "ALLOW",
  },
  {
    id: "1296",
    ts: "14:32:03Z",
    action: "http_request()",
    agent: "research-bot",
    rule: "net.external.unknown",
    verdict: "DENY",
  },
];

export function ReportVisual() {
  return (
    <div className="relative w-full h-full bg-slate-950 overflow-hidden font-mono flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-800/50 bg-slate-900/40 shrink-0">
        <span className="text-xs text-slate-300 tracking-wide">WYATT AUDIT LOG · CEE FORMAT</span>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
          <span className="text-[11px] text-green-400">SOC 2 READY</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 border-b border-slate-800/30 shrink-0">
        {[
          { label: "Denied", value: "2", color: "#ef4444" },
          { label: "Allowed", value: "1", color: "#22c55e" },
          { label: "Logged", value: "3", color: "#f59e0b" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center py-3 border-r border-slate-800/20 last:border-r-0"
          >
            <span className="text-xl font-bold" style={{ color: stat.color }}>
              {stat.value}
            </span>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* CEE Records */}
      <div className="flex-1 px-3 py-2 flex flex-col gap-2 justify-center">
        {records.map((rec, i) => (
          <motion.div
            key={rec.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 + i * 0.18 }}
            className="border border-slate-800/40 bg-slate-900/30 px-3 py-2.5"
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-slate-500">#{rec.id}</span>
                <span className="text-[11px] text-slate-600">{rec.ts}</span>
              </div>
              <span
                className="text-xs font-bold px-2 py-0.5"
                style={
                  rec.verdict === "DENY"
                    ? { color: "#ef4444", backgroundColor: "rgba(239,68,68,0.1)" }
                    : { color: "#22c55e", backgroundColor: "rgba(34,197,94,0.1)" }
                }
              >
                {rec.verdict}
              </span>
            </div>
            <p className="text-sm text-white/90 mb-1">{rec.action}</p>
            <p className="text-[11px] text-slate-500 truncate">
              {rec.agent} &nbsp;·&nbsp; {rec.rule}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-4 py-2.5 border-t border-slate-800/40 bg-slate-900/30 shrink-0 flex items-center justify-between">
        <span className="text-[11px] text-slate-400">Every decision. Tamper-evident.</span>
        <span className="text-[11px] text-amber-500/70">100% logged</span>
      </div>
    </div>
  );
}
