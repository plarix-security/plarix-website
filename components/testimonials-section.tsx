"use client";

import { motion } from "framer-motion";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full bg-zinc-950 py-24 md:py-32 border-b border-zinc-800/50">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Header */}
        <div className="flex flex-col gap-6 mb-16">
          <div className="flex items-center gap-3 px-4 py-2 border border-zinc-800 w-fit">
            <div className="w-2.5 h-2.5 bg-amber-500" />
            <span className="text-sm font-medium text-zinc-500 tracking-wide">
              Testimonials
            </span>
          </div>
          <h2 className="text-balance text-4xl md:text-5xl font-normal text-white tracking-tight">
            {"Trusted by Teams Building the Future of AI".split(" ").map((word, i) => (
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
        </div>

        {/* Testimonial Placeholder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote: "Plarix found critical prompt injection vulnerabilities in our customer-facing AI chatbot that our internal security team and automated scanners completely missed. The remediation roadmap saved us weeks of engineering time.",
              author: "VP of Engineering",
              company: "Series B FinTech SaaS",
            },
            {
              quote: "We were about to launch our AI-powered support agent without any specialized security testing. Plarix's audit revealed 12 high-severity vulnerabilities. They helped us fix every single one before go-live.",
              author: "CTO",
              company: "Healthcare AI Startup",
            },
            {
              quote: "The executive summary was clear enough for our board, and the technical report gave our engineers exactly what they needed. Fast, thorough, and genuinely actionable. We now do quarterly audits with them.",
              author: "Head of Security",
              company: "Enterprise SaaS Platform",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col gap-6 p-8 border border-zinc-800/50 bg-zinc-900/20"
            >
              <div className="text-amber-500 text-4xl font-bold">&ldquo;</div>
              <p className="text-white text-base leading-relaxed flex-1">
                {testimonial.quote}
              </p>
              <div className="border-t border-zinc-800/50 pt-4">
                <div className="text-white font-medium text-sm">{testimonial.author}</div>
                <div className="text-zinc-500 text-xs uppercase tracking-wider">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
