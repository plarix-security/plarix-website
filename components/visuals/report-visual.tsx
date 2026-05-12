"use client";

import { motion } from "framer-motion";

const records = [
  {
    id: "1294",
    ts: "14:32:01.441Z",
    agent: "sales-assistant-prod",
    action: "write_file()",
    verdict: "DENY",
    rule: "fs.write.system",
  },
  {
    id: "1295",
    ts: "14:32:02.118Z",
    agent: "data-analyst-v2",
    action: "execute_sql()",
    verdict: "ALLOW",
    rule: "db.read.authorized",
  },
  {
    id: "1296",
    ts: "14:32:03.892Z",
    agent: "research-bot",
    action: "http_request()",
    verdict: "DENY",
    rule: "net.external.unknown",
  },
  {
    id: "1297",
    ts: "14:32:05.210Z",
    agent: "sales-assistant-prod",
    action: "send_email()",
    verdict: "ALLOW",
    rule: "mail.internal",
  },
];

export function ReportVisual() {
  return (
    <div className="relative w-full h-full bg-slate-950 overflow-hidden font-mono">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800/40 bg-slate-900/30">
          <span className="text-[10px] text-slate-400">WYATT AUDIT LOG · CEE FORMAT</span>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="text-[9px] text-green-500/80">SOC 2 READY</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 border-b border-slate-800/30">
          {[
            { label: "Denied", value: "2", color: "#ef4444" },
            { label: "Allowed", value: "2", color: "#22c55e" },
            { label: "Logged", value: "4", color: "#f59e0b" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center py-2 border-r border-slate-800/20 last:border-r-0"
            >
              <span className="text-lg font-bold" style={{ color: stat.color }}>
                {stat.value}
              </span>
              <span className="text-[8px] text-slate-500 uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CEE Records */}
        <div className="flex-1 overflow-hidden px-2 py-1">
          {records.map((rec, i) => (
            <motion.div
              key={rec.id}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.12 }}
              className="py-1.5 border-b border-slate-800/15"
            >
              <div className="flex items-center justify-between mb-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-[8px] text-slate-600">#{rec.id}</span>
                  <span className="text-[8px] text-slate-600">{rec.ts}</span>
                </div>
                <span
                  className="text-[8px] font-bold px-1.5 py-0.5"
                  style={
                    rec.verdict === "DENY"
                      ? { color: "#ef4444", backgroundColor: "rgba(239,68,68,0.08)" }
                      : { color: "#22c55e", backgroundColor: "rgba(34,197,94,0.08)" }
                  }
                >
                  {rec.verdict}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-slate-300">{rec.action}</span>
                <span className="text-[8px] text-slate-600 truncate ml-2">{rec.agent}</span>
              </div>
              <span className="text-[8px] text-slate-700">rule: {rec.rule}</span>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-3 py-2 border-t border-slate-800/40 bg-slate-900/30 flex items-center justify-between">
          <span className="text-[9px] text-slate-500">Every decision. Tamper-evident.</span>
          <span className="text-[9px] text-amber-500/60">100% logged</span>
        </div>
      </div>
    </div>
  );
}
