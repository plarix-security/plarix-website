"use client";

import React, { useEffect } from "react"

import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

const AGENT_STACKS = [
  "LangChain",
  "CrewAI",
  "LlamaIndex",
  "MCP (Model Context Protocol)",
  "AutoGen",
  "LangGraph",
  "Custom / Internal",
  "Other",
];

export function CtaSection() {
  const [formOpen, setFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const handler = () => setFormOpen(true);
    window.addEventListener("open-consultation", handler);
    return () => window.removeEventListener("open-consultation", handler);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      company: formData.get("company") as string,
      email: formData.get("email") as string,
      agentStack: formData.get("agentStack") as string,
      repoUrl: formData.get("repoUrl") as string,
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setFormOpen(false);
          setSubmitted(false);
        }, 3000);
      } else {
        alert("Failed to submit. Please try again.");
      }
    } catch {
      alert("Failed to submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="cta" className="relative w-full overflow-hidden bg-slate-100">
      <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-14 md:py-20 flex justify-center">
        <div className="max-w-2xl flex flex-col items-center text-center gap-6">
          <Image
            src="/images/plarix-shield.png"
            alt="Plarix Shield"
            width={96}
            height={96}
            className="w-24 h-24 object-contain"
          />

          <h2 className="text-balance text-4xl font-normal tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
            {"Your Agents Are Running Right Now".split(" ").map((word, i) => (
              <motion.span
                key={`cta-${i}`}
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

          <p className="text-balance max-w-xl text-base leading-relaxed text-slate-500 md:text-lg">
            Nothing is enforcing what they can and cannot do. ARGOS (Wyatt) changes that — runtime enforcement at the execution layer, deny by default, always on.
          </p>

          <p className="text-sm text-slate-400 max-w-md">
            We are working directly with a small number of design partner teams — AI B2B SaaS companies with agents in production. Apply below and we will reach out within 24 hours.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center w-full">
            <Button
              size="lg"
              className="bg-slate-950 px-8 text-white hover:bg-slate-800 font-medium"
              onClick={() => setFormOpen(true)}
            >
              Apply for Early Access
            </Button>
            <span className="text-sm text-slate-400">
              Or install Wyscan free:{" "}
              <a
                href="https://github.com/apps/afb-scanner"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-slate-600 transition-colors"
              >
                GitHub App
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Form Panel */}
      <AnimatePresence>
        {formOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm"
              onClick={() => setFormOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-0 z-[201] flex items-center justify-center px-4 py-8 overflow-y-auto"
            >
              <div className="relative w-full max-w-md bg-slate-950/90 backdrop-blur-xl border border-slate-800/50 p-8 my-auto">
                <button
                  onClick={() => setFormOpen(false)}
                  className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
                  aria-label="Close form"
                >
                  <X className="w-5 h-5" />
                </button>

                {submitted ? (
                  <div className="flex flex-col items-center gap-4 py-8">
                    <Image
                      src="/images/plarix-shield.png"
                      alt="Plarix"
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain invert brightness-200"
                    />
                    <p className="text-white text-lg font-medium">
                      Application received.
                    </p>
                    <p className="text-slate-400 text-sm text-center">
                      We will reach out within 24 hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="flex items-start gap-3 mb-2">
                      <Image
                        src="/images/plarix-shield.png"
                        alt="Plarix"
                        width={40}
                        height={40}
                        className="w-10 h-10 object-contain invert brightness-200 shrink-0 mt-0.5"
                      />
                      <div>
                        <h3 className="text-white text-lg font-medium">
                          Apply for Early Access
                        </h3>
                        <p className="text-slate-500 text-sm mt-1">
                          We are selecting design partner teams. Tell us about your stack and we will reach out within 24 hours.
                        </p>
                      </div>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-4 mt-6"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs text-slate-400">
                            First Name
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            required
                            placeholder="John"
                            className="bg-slate-900 border border-slate-800 text-white text-sm px-3 py-2.5 placeholder:text-slate-600 focus:outline-none focus:border-slate-600 transition-colors"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs text-slate-400">
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            required
                            placeholder="Doe"
                            className="bg-slate-900 border border-slate-800 text-white text-sm px-3 py-2.5 placeholder:text-slate-600 focus:outline-none focus:border-slate-600 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-slate-400">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          required
                          placeholder="Acme AI"
                          className="bg-slate-900 border border-slate-800 text-white text-sm px-3 py-2.5 placeholder:text-slate-600 focus:outline-none focus:border-slate-600 transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-slate-400">
                          Work Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="john@acme.com"
                          className="bg-slate-900 border border-slate-800 text-white text-sm px-3 py-2.5 placeholder:text-slate-600 focus:outline-none focus:border-slate-600 transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-slate-400">
                          Agent Stack
                        </label>
                        <select
                          name="agentStack"
                          required
                          defaultValue=""
                          className="bg-slate-900 border border-slate-800 text-white text-sm px-3 py-2.5 focus:outline-none focus:border-slate-600 transition-colors appearance-none"
                        >
                          <option value="" disabled className="text-slate-600">
                            Select your framework
                          </option>
                          {AGENT_STACKS.map((stack) => (
                            <option key={stack} value={stack}>
                              {stack}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-slate-400">
                          GitHub Repo{" "}
                          <span className="text-slate-600">(optional)</span>
                        </label>
                        <input
                          type="url"
                          name="repoUrl"
                          placeholder="https://github.com/your-org/your-agent"
                          className="bg-slate-900 border border-slate-800 text-white text-sm px-3 py-2.5 placeholder:text-slate-600 focus:outline-none focus:border-slate-600 transition-colors"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={submitting}
                        className="mt-2 w-full bg-amber-500 text-slate-950 hover:bg-amber-400 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {submitting ? "Submitting..." : "Submit Application"}
                      </Button>

                      <p className="text-xs text-slate-500 text-center">
                        No spam. We respond within 24 hours.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
