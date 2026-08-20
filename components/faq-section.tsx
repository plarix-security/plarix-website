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
    question: "Is this a consulting engagement or a piece of software?",
    answer:
      "Today, it's a build: our team maps your process, builds the EEAS around it, and hands over a working system plus a savings record. The long-term plan is a platform that does this for many processes without a project team behind every one. Early customers get the build now.",
  },
  {
    id: "2",
    question: "Do we need to already be using AI somewhere?",
    answer:
      "No. Most of the processes worth automating haven't been touched yet. We start from how the process runs today, not from whatever AI tooling you already have in place.",
  },
  {
    id: "3",
    question: "How do you calculate the savings number?",
    answer:
      "We measure the process directly before we build anything: hours per task, cost per task, volume, error rate. That becomes the baseline. After the EEAS is live, we compare actual results against that same baseline, on a set schedule.",
  },
  {
    id: "4",
    question: "What if the process isn't actually worth automating?",
    answer:
      "Then we tell you before you pay for a build. The economic model runs before the build does. If the number doesn't clear, the honest answer is not to build it.",
  },
  {
    id: "5",
    question: "Will this replace our existing systems?",
    answer:
      "No. The EEAS runs alongside what you already use: your CRM, your ERP, your ticketing system, your spreadsheets. There's no migration project before you see a result.",
  },
  {
    id: "6",
    question: "How long does one engagement take?",
    answer:
      "The process audit typically takes about a week. The build depends on the process, but most engagements are scoped to a single, well-defined workflow rather than a company-wide transformation, which keeps the timeline short.",
  },
  {
    id: "7",
    question: "How is this different from a general AI consultancy?",
    answer:
      "Most AI consultancies start with the technology and ask where to apply it. We start with the process, measure what it costs, and only build when the economics work. The deliverable isn't a strategy deck. It's a working system and a number.",
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
              {"Common questions".split(" ").map((word, i) => (
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
              Get quick answers about how Plarix scopes, builds, and measures an AI system against a real business process.
            </p>

            <p className="text-sm text-slate-500">
              Cannot find what you are looking for?{" "}
              <a href="mailto:hello@plarix.dev" className="text-amber-500 hover:text-amber-400 transition-colors">
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
