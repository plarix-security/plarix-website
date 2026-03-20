"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "1",
    question: "Does Wyatt work with my existing agent framework?",
    answer:
      "Yes. Wyatt is framework-agnostic. It integrates at the tool call layer regardless of what built the agent. LangChain, CrewAI, custom agents, MCP — all work.",
  },
  {
    id: "2",
    question: "Do I need to rewrite my agents?",
    answer:
      "No. Wyatt sits alongside your existing stack. Integration is one step. No framework changes. No code rewrites.",
  },
  {
    id: "3",
    question: "What is the AFB Scanner?",
    answer:
      "A free GitHub App that analyzes your agent repositories on every PR and reports security exposures classified by AFB type. It is the fastest way to see your exposure before deploying Wyatt.",
  },
  {
    id: "4",
    question: "What is Wyatt's policy language?",
    answer:
      "Policies are simple declarative definitions of what each agent is permitted to do. You define them once. Wyatt enforces them forever.",
  },
  {
    id: "5",
    question: "Is Wyatt open source?",
    answer:
      "The SDK and framework adapters are open source. The enforcement engine is not.",
  },
  {
    id: "6",
    question: "What is Plarix building beyond Wyatt?",
    answer:
      "Wyatt is the first product. Plarix is building the infrastructure layer for human control over AI systems. More coming.",
  },
];

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleQuestion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="w-full bg-slate-950 py-24 md:py-32 border-b border-slate-800/30"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Header */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 px-4 py-2 border border-slate-800/50 w-fit">
              <div className="w-2.5 h-2.5 bg-amber-500" />
              <span className="text-sm font-medium text-slate-500 tracking-wide">
                FAQ
              </span>
            </div>
            
            <h2 className="text-balance text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.1]">
              {"Common Questions".split(" ").map((word, i) => (
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

            <p className="text-balance text-base md:text-lg text-slate-400 leading-relaxed max-w-md">
              Get quick answers about Wyatt and how it enforces your AI agent policies. Cannot find what you are looking for? Reach out below.
            </p>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="flex flex-col">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className={cn(
                  "border-t border-slate-800/40",
                  index === faqs.length - 1 && "border-b"
                )}
              >
                <button
                  onClick={() => toggleQuestion(faq.id)}
                  className="w-full py-6 flex items-center justify-between gap-4 text-left group"
                >
                  <span className="text-lg md:text-xl font-normal text-white group-hover:text-slate-300 transition-colors">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-slate-500" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pr-12">
                        <p className="text-base leading-relaxed text-slate-400">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
