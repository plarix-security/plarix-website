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
    question: "Does ARGOS work with my existing agent framework?",
    answer:
      "Yes. ARGOS (Wyatt) is framework-agnostic — it integrates at the tool call layer regardless of what built the agent. LangChain, CrewAI, LlamaIndex, AutoGen, MCP, or a fully custom stack. No rewrites. One integration point.",
  },
  {
    id: "2",
    question: "Do I need to rewrite my agents to add AI agent security?",
    answer:
      "No. ARGOS sits alongside your existing stack as a runtime daemon. Integration is one step. No framework changes. No code rewrites. Your agent runs exactly as before — with enforcement now sitting in front of every tool call.",
  },
  {
    id: "3",
    question: "What is the AFB Scanner (Wyscan)?",
    answer:
      "A free GitHub App that scans your agent codebase on every pull request and reports security exposures classified by Agent Failure Boundary type. It catches unauthorized action surfaces — AFB04 violations — before they reach production. Zero cost, always.",
  },
  {
    id: "4",
    question: "How does ARGOS enforce AI agent policy?",
    answer:
      "Policies are simple declarative definitions of what each agent is permitted to do — which tools, which resources, which operations. You define them once. ARGOS enforces them on every tool call, forever. Unauthorized actions are blocked before they execute.",
  },
  {
    id: "5",
    question: "Is ARGOS open source?",
    answer:
      "The static analysis tool (Wyscan) and framework adapters are open source under Apache 2.0. The runtime enforcement engine (ARGOS/Wyatt) and the Virgil attestation layer are proprietary. The CEE standard is open (CC0).",
  },
  {
    id: "6",
    question: "How does this help with enterprise AI security reviews?",
    answer:
      "Enterprise buyers ask: how do you guarantee the agent stays in bounds? ARGOS gives you a structural answer — deny-by-default policy enforcement — plus tamper-evident CEE audit logs that map directly to SOC 2 and security questionnaire requirements.",
  },
  {
    id: "7",
    question: "How is this different from LLM guardrails or prompt injection filters?",
    answer:
      "Guardrails filter model text. Prompt injection filters scan inputs. Neither stops an authorized tool from being called in an unauthorized context. ARGOS operates at the execution layer — before the action lands in the real world — not at the text layer.",
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
              How ARGOS enforces AI agent security at the execution layer — and why it works where guardrails, monitoring, and system prompts do not.
            </p>

            <p className="text-sm text-slate-500">
              Cannot find what you are looking for?{" "}
              <a href="mailto:security@plarix.dev" className="text-amber-500 hover:text-amber-400 transition-colors">
                Reach out directly.
              </a>
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
                  className="w-full py-5 flex items-center justify-between gap-4 text-left group"
                >
                  <span className="text-base md:text-lg font-normal text-white group-hover:text-slate-300 transition-colors">
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
                      <div className="pb-5 pr-12">
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
