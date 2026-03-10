"use client";

import React, { useEffect } from "react"

import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

export function CtaSection() {
  const [formOpen, setFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handler = () => setFormOpen(true);
    window.addEventListener("open-consultation", handler);
    return () => window.removeEventListener("open-consultation", handler);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormOpen(false);
      setSubmitted(false);
    }, 2500);
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
            {"Do Not Wait for a Security Incident".split(" ").map((word, i) => (
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
            Every day your AI is in production without security testing is a day
            of risk. Get a comprehensive audit before attackers find what we
            would have caught.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Button
              size="lg"
              className="bg-slate-950 px-8 text-white hover:bg-slate-800 font-medium"
              onClick={() => setFormOpen(true)}
            >
              Schedule a Free Consultation
            </Button>
            <span className="text-sm text-slate-400">
              Or email us at{" "}
              <a
                href="mailto:security@plarix.dev"
                className="underline underline-offset-2 hover:text-slate-600 transition-colors"
              >
                security@plarix.dev
              </a>
            </span>
          </div>

          <p className="text-xs text-slate-400">
            No sales pressure. Just honest conversation about your AI security
            needs.
          </p>
        </div>
      </div>

      {/* Consultation Form Panel */}
      <AnimatePresence>
        {formOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm"
              onClick={() => setFormOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-0 z-[201] flex items-center justify-center px-4"
            >
              <div className="relative w-full max-w-md bg-slate-950/70 backdrop-blur-xl border border-slate-800/50 p-8">
                {/* Close button */}
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
                      Thank you!
                    </p>
                    <p className="text-slate-400 text-sm text-center">
                      We will reach out within 24 hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <Image
                        src="/images/plarix-shield.png"
                        alt="Plarix"
                        width={40}
                        height={40}
                        className="w-10 h-10 object-contain invert brightness-200"
                      />
                      <h3 className="text-white text-lg font-medium">
                        Schedule a Consultation
                      </h3>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-4"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs text-slate-400">
                            First Name
                          </label>
                          <input
                            type="text"
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
                            required
                            placeholder="Doe"
                            className="bg-slate-900 border border-slate-800 text-white text-sm px-3 py-2.5 placeholder:text-slate-600 focus:outline-none focus:border-slate-600 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-slate-400">
                          Company Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Acme Inc."
                          className="bg-slate-900 border border-slate-800 text-white text-sm px-3 py-2.5 placeholder:text-slate-600 focus:outline-none focus:border-slate-600 transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-slate-400">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="john@acme.com"
                          className="bg-slate-900 border border-slate-800 text-white text-sm px-3 py-2.5 placeholder:text-slate-600 focus:outline-none focus:border-slate-600 transition-colors"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="mt-2 w-full bg-amber-500 text-slate-950 hover:bg-amber-400 font-medium"
                      >
                        Submit Request
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
