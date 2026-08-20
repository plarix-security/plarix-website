"use client";

import { motion } from "framer-motion";
import { Workflow, PieChart, Lightbulb } from "lucide-react";

const audiences = [
  {
    icon: <Workflow className="w-6 h-6 text-amber-500" />,
    title: "Operations and shared-services leaders",
    description:
      "You run a process that hasn't changed in years: invoice processing, claims handling, order management, back-office reconciliation. It's expensive, everyone knows it, and nobody has put a number on fixing it.",
    concerns: ["Process cost baseline", "Built around existing systems", "No new platform to learn", "Money and time reporting"],
  },
  {
    icon: <PieChart className="w-6 h-6 text-amber-500" />,
    title: "Finance and operations teams evaluating AI spend",
    description:
      "You've approved a few AI pilots already. Some are running, most aren't clearly worth what they cost. You need a way to compare an idea against a real number before the next budget cycle.",
    concerns: ["Break-even calculated up front", "Independent of vendor hype", "Clear go/no-go before build", "Budget-review-ready reporting"],
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-amber-500" />,
    title: "Founders and operators who tried AI and got a demo, not a result",
    description:
      "Your team built a chatbot or an internal tool. It's clever. Nobody can say what it saved. You want the next one to actually move a number.",
    concerns: ["Scoped to one measurable process", "Real baseline, not a guess", "Delivered as a working system", "Result reported in euros and hours"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function WhoWeServeSection() {
  return (
    <section className="w-full bg-slate-950 py-24 md:py-32 border-b border-slate-800/30">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="flex flex-col gap-6 mb-16">
          <div className="flex items-center gap-3 px-4 py-2 border border-slate-800/50 w-fit">
            <div className="w-2.5 h-2.5 bg-amber-500" />
            <span className="text-sm font-medium text-slate-500 tracking-wide">
              Who we serve
            </span>
          </div>
          <h2 className="text-balance text-4xl md:text-5xl font-normal tracking-tight text-white max-w-2xl">
            {"Built for teams carrying an expensive process".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ filter: "blur(10px)", opacity: 0 }}
                whileInView={{ filter: "blur(0px)", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </h2>
          <p className="text-slate-400 text-base leading-relaxed max-w-xl">
            If a process is costing real money in hours or headcount, and nobody can say what automating it would be worth, Plarix is built for that conversation.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col gap-6 p-8 border border-slate-800/30 bg-slate-900/20 hover:bg-slate-900/40 transition-colors"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-amber-500/10 border border-amber-500/20">
                {audience.icon}
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-3">{audience.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{audience.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {audience.concerns.map((concern, idx) => (
                  <span key={idx} className="px-3 py-1 text-xs text-amber-500/80 bg-amber-500/5 border border-amber-500/10">
                    {concern}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
