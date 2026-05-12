"use client";

import { motion } from "framer-motion";

const nodes = [
  { id: "agent", label: "AI Agent", x: 50, y: 45, risk: "high" },
  { id: "rag", label: "RAG Store", x: 20, y: 25, risk: "critical" },
  { id: "api", label: "API Gateway", x: 80, y: 20, risk: "medium" },
  { id: "tools", label: "Tool Exec", x: 75, y: 70, risk: "critical" },
  { id: "user", label: "User Input", x: 15, y: 65, risk: "low" },
  { id: "db", label: "Database", x: 40, y: 15, risk: "medium" },
  { id: "fs", label: "File System", x: 85, y: 48, risk: "critical" },
  { id: "prompt", label: "Sys Prompt", x: 35, y: 75, risk: "high" },
];

const edges = [
  { from: "user", to: "agent" },
  { from: "agent", to: "rag" },
  { from: "agent", to: "tools" },
  { from: "agent", to: "api" },
  { from: "rag", to: "db" },
  { from: "api", to: "fs" },
  { from: "user", to: "prompt" },
  { from: "prompt", to: "agent" },
  { from: "tools", to: "api" },
];

const riskColor: Record<string, string> = {
  critical: "#ef4444",
  high: "#f97316",
  medium: "#eab308",
  low: "#3b82f6",
};

const riskGlow: Record<string, string> = {
  critical: "0 0 12px #ef4444, 0 0 24px #ef444460",
  high: "0 0 10px #f97316, 0 0 20px #f9731650",
  medium: "0 0 8px #eab308, 0 0 16px #eab30840",
  low: "0 0 6px #3b82f6, 0 0 12px #3b82f630",
};

export function DiscoverVisual() {
  return (
    <div className="relative w-full h-full bg-slate-950 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        {edges.map((edge, i) => {
          const from = nodes.find((n) => n.id === edge.from)!;
          const to = nodes.find((n) => n.id === edge.to)!;
          return (
            <motion.line
              key={`edge-${i}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="rgba(148,163,184,0.15)"
              strokeWidth="0.3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: i * 0.1 }}
            />
          );
        })}

        {edges.map((edge, i) => {
          const from = nodes.find((n) => n.id === edge.from)!;
          const to = nodes.find((n) => n.id === edge.to)!;
          return (
            <motion.circle
              key={`pulse-${i}`}
              r="0.5"
              fill="#f97316"
              opacity={0.6}
              initial={{ cx: from.x, cy: from.y }}
              animate={{ cx: [from.x, to.x], cy: [from.y, to.y] }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5,
              }}
            />
          );
        })}

        {nodes.map((node, i) => (
          <motion.g
            key={node.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
          >
            <circle
              cx={node.x}
              cy={node.y}
              r={node.risk === "critical" ? 3.5 : node.risk === "high" ? 3 : 2.5}
              fill={`${riskColor[node.risk]}20`}
              stroke={riskColor[node.risk]}
              strokeWidth="0.4"
              style={{ filter: `drop-shadow(${riskGlow[node.risk]})` }}
            />
            <circle cx={node.x} cy={node.y} r="1" fill={riskColor[node.risk]} />
            <text
              x={node.x}
              y={node.y + 5.5}
              textAnchor="middle"
              fill="rgba(148,163,184,0.6)"
              fontSize="2.2"
              fontFamily="monospace"
            >
              {node.label}
            </text>
          </motion.g>
        ))}
      </svg>

      {/* No enforcement — the whole point of slide 1 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute top-3 right-3 px-2 py-1 border border-red-500/30 bg-red-500/5"
      >
        <span className="text-[9px] text-red-400/80 font-mono">NO ENFORCEMENT LAYER</span>
      </motion.div>

      {/* Wyscan footnote */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {["critical", "high", "medium", "low"].map((risk) => (
            <div key={risk} className="flex items-center gap-1">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: riskColor[risk] }}
              />
              <span className="text-[9px] text-slate-500 capitalize font-mono">{risk}</span>
            </div>
          ))}
        </div>
        <span className="text-[8px] text-slate-700 font-mono">Wyscan finds these pre-production</span>
      </div>
    </div>
  );
}
