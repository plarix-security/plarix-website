import type { Metadata } from "next"
import Link from "next/link"
import { NavbarSubpage } from "@/components/navbar-subpage"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About — Plarix",
  description:
    "Plarix builds runtime enforcement infrastructure for autonomous AI agents. Wyatt intercepts every tool call before execution. Built on the AFB taxonomy — the first-principles security model for agentic AI.",
  alternates: {
    canonical: "https://plarix.dev/about",
  },
  openGraph: {
    title: "About — Plarix",
    description:
      "Plarix builds runtime enforcement infrastructure for autonomous AI agents. The Authorization Gap: agents can be instructed not to do something but nothing stops them. Wyatt closes that gap.",
    url: "https://plarix.dev/about",
    siteName: "Plarix",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Plarix",
    description:
      "Plarix builds runtime enforcement infrastructure for autonomous AI agents. Wyatt closes the Authorization Gap.",
  },
}

const afbItems = [
  {
    code: "AFB01",
    name: "Context Poisoning",
    layer: "Input / RAG layer",
    description:
      "Malicious data injected into the agent's context — via poisoned RAG retrieval, indirect prompt injection, or compromised tool outputs. The agent believes corrupted information and acts on it.",
  },
  {
    code: "AFB02",
    name: "Model Boundary Compromise",
    layer: "Model layer",
    description:
      "The model itself is extracted, manipulated, or abused. Requires model-provider-level access for full enforcement — the boundary Plarix approaches via attestation and identity.",
  },
  {
    code: "AFB03",
    name: "Instruction Hijack",
    layer: "Orchestration layer",
    description:
      "Injected instructions override the agent's intended behavior mid-run. The model's output becomes an attack vector — executing instructions the operator never authorized.",
  },
  {
    code: "AFB04",
    name: "Unauthorized Action",
    layer: "Execution layer",
    description:
      "The agent executes a tool call, API request, or file operation it was not authorized to perform. This is the enforcement boundary — the one Wyatt closes deterministically.",
  },
]

const productItems = [
  {
    name: "Wyscan",
    tag: "Open Source · Apache 2.0",
    tagColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    description:
      "Static analysis CLI and GitHub App. Scans agentic codebases for AFB04 violations using AST analysis, data flow analysis, and call graph traversal. Reports every unauthorized action surface before it reaches production.",
    link: "https://github.com/apps/afb-scanner",
    linkLabel: "Install AFB Scanner →",
  },
  {
    name: "Wyatt",
    tag: "Early Access",
    tagColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    description:
      "The runtime enforcement gateway. A lightweight daemon that runs alongside your agent system, intercepts every tool call at the execution layer, and enforces declarative policy. Deny by default. Framework agnostic. Set and forget.",
    link: null,
    linkLabel: null,
  },
  {
    name: "Virgil",
    tag: "Attestation Layer · Proprietary",
    tagColor: "text-slate-400 bg-slate-400/10 border-slate-400/20",
    description:
      "Cryptographic identity and action tracing. Every agent action gets a tamper-evident record: action taken, policy matched, identity authorized, timestamp. Built for SOC 2, legal defensibility, and enterprise incident response.",
    link: null,
    linkLabel: null,
  },
  {
    name: "CEE",
    tag: "Open Standard · CC0",
    tagColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    description:
      "Canonical Execution Event — the open standard for structured agent action records. CEE-compliant audit logs answer enterprise security questionnaires directly. If buyers ask how you audit agent behavior, CEE is the answer.",
    link: null,
    linkLabel: null,
  },
]

export default function AboutPage() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-50">
        <div className="mx-auto h-full max-w-7xl">
          <div className="relative h-full">
            <div className="absolute left-0 top-0 h-full w-px bg-slate-800/20" />
            <div className="absolute right-0 top-0 h-full w-px bg-slate-800/20" />
          </div>
        </div>
      </div>

      <NavbarSubpage />

      <main className="bg-slate-950 min-h-screen">
        {/* Hero */}
        <section className="w-full bg-slate-950 pt-32 pb-16 border-b border-slate-800/30">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
            <div className="flex flex-col gap-6 max-w-3xl">
              <div className="flex items-center gap-3 px-4 py-2 border border-slate-800/50 w-fit">
                <div className="w-2.5 h-2.5 bg-amber-500" />
                <span className="text-sm font-medium text-slate-500 tracking-wide">
                  About Plarix
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.1]">
                The enforcement infrastructure that makes AI agent behavior controllable at the execution layer.
              </h1>
              <p className="text-base md:text-lg text-slate-400 leading-relaxed">
                Plarix sits between what an AI agent decides and what it is allowed to execute.
                Not a guardrail. Not a prompt. Not a monitor. The enforcement layer — operating before the action lands, every time.
              </p>
            </div>
          </div>
        </section>

        {/* The Authorization Gap */}
        <section className="w-full bg-slate-950 py-16 border-b border-slate-800/30">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3 px-4 py-2 border border-slate-800/50 w-fit">
                  <div className="w-2.5 h-2.5 bg-amber-500" />
                  <span className="text-sm font-medium text-slate-500 tracking-wide">
                    The Core Thesis
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white">
                  The Authorization Gap
                </h2>
                <p className="text-slate-400 text-base leading-relaxed">
                  Every major agent framework today relies on system prompts to constrain behavior.
                  A prompt can say &ldquo;do not exfiltrate user data.&rdquo; The agent can still do it.
                  There is no mechanism in any framework that deterministically stops it.
                </p>
                <p className="text-slate-400 text-base leading-relaxed">
                  That gap — between what you instruct the agent to do and what it is physically
                  capable of doing — is the Authorization Gap. It is the core attack surface for
                  every production agentic system today.
                </p>
                <p className="text-slate-400 text-base leading-relaxed">
                  AI safety is not a prompt engineering problem. It is a computational medium problem.
                  It requires deterministic interception at the execution layer.
                  That is what Wyatt is.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="p-8 border border-slate-800/30 bg-slate-900/20">
                  <p className="text-xs text-slate-600 font-mono tracking-wider mb-4">BEFORE PLARIX</p>
                  <div className="flex flex-col gap-3">
                    {[
                      'system_prompt: "do not delete files"',
                      "agent.run(task)",
                      "→ agent calls delete_file(path)",
                      "→ file deleted ✗",
                    ].map((line, i) => (
                      <p key={i} className={`text-sm font-mono ${line.startsWith("→ file") ? "text-red-400" : line.startsWith("→") ? "text-slate-500" : "text-slate-400"}`}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="p-8 border border-amber-500/20 bg-amber-500/5">
                  <p className="text-xs text-amber-500/60 font-mono tracking-wider mb-4">WITH WYATT</p>
                  <div className="flex flex-col gap-3">
                    {[
                      "wyatt.policy: delete_file → DENY",
                      "agent.run(task)",
                      "→ agent calls delete_file(path)",
                      "→ Wyatt intercepts ✓",
                      "→ action denied, logged ✓",
                    ].map((line, i) => (
                      <p key={i} className={`text-sm font-mono ${line.includes("denied") ? "text-emerald-400" : line.startsWith("→") ? "text-slate-400" : "text-slate-300"}`}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AFB Taxonomy */}
        <section className="w-full bg-slate-950 py-16 border-b border-slate-800/30">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4 max-w-2xl">
                <div className="flex items-center gap-3 px-4 py-2 border border-slate-800/50 w-fit">
                  <div className="w-2.5 h-2.5 bg-amber-500" />
                  <span className="text-sm font-medium text-slate-500 tracking-wide">
                    AFB Taxonomy
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white">
                  How agent systems actually fail
                </h2>
                <p className="text-slate-400 text-base leading-relaxed">
                  The Agent Failure Boundary taxonomy is Plarix&apos;s first-principles model of how agentic
                  AI systems break. Four distinct failure categories. Four distinct enforcement
                  boundaries. Most &ldquo;AI security&rdquo; products protect against generic vulnerabilities.
                  AFB is built specifically for agents.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {afbItems.map((item) => (
                  <div
                    key={item.code}
                    className="flex flex-col gap-4 p-8 border border-slate-800/30 bg-slate-900/20"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-amber-500 font-mono text-sm font-medium">{item.code}</span>
                      <span className="text-slate-600 text-xs">·</span>
                      <span className="text-slate-600 text-xs">{item.layer}</span>
                    </div>
                    <h3 className="text-lg font-medium text-white">{item.name}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Product Stack */}
        <section className="w-full bg-slate-950 py-16 border-b border-slate-800/30">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4 max-w-2xl">
                <div className="flex items-center gap-3 px-4 py-2 border border-slate-800/50 w-fit">
                  <div className="w-2.5 h-2.5 bg-amber-500" />
                  <span className="text-sm font-medium text-slate-500 tracking-wide">
                    Product Stack
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white">
                  What Plarix builds
                </h2>
                <p className="text-slate-400 text-base leading-relaxed">
                  The enforcement stack is composed of four layers. Each addresses a distinct part
                  of the authorization problem. The free tool is the wedge. Wyatt is the core.
                  Virgil and CEE are what enterprise requires.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {productItems.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col gap-4 p-8 border border-slate-800/30 bg-slate-900/20"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-white">{item.name}</h3>
                      <span className={`text-xs px-2 py-1 border ${item.tagColor}`}>
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                    {item.link && (
                      <Link
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-amber-500 hover:text-amber-400 transition-colors w-fit mt-auto"
                      >
                        {item.linkLabel}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="w-full bg-slate-950 py-16 border-b border-slate-800/30">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
            <div className="flex flex-col gap-8 max-w-2xl">
              <div className="flex items-center gap-3 px-4 py-2 border border-slate-800/50 w-fit">
                <div className="w-2.5 h-2.5 bg-amber-500" />
                <span className="text-sm font-medium text-slate-500 tracking-wide">
                  Founder
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start gap-6 p-8 border border-slate-800/30 bg-slate-900/20">
                <div className="w-14 h-14 flex items-center justify-center bg-amber-500/10 border border-amber-500/20 shrink-0">
                  <span className="text-amber-500 font-medium text-lg tracking-wide">AH</span>
                </div>

                <div className="flex flex-col gap-3">
                  <div>
                    <p className="text-white text-lg font-medium">Aryan Haghighi</p>
                    <p className="text-slate-500 text-sm">Founder, Plarix · Istanbul, Turkey</p>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Solo founder. 2nd year Electrical Engineering undergraduate at Bahcesehir University.
                    EE coursework is deprioritized until the first paying customer is secured.
                    The entire cognitive budget goes to Plarix.
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    The bet: AI safety is a computational medium problem, not a prompt problem.
                    Deterministic enforcement at the execution layer is the right architectural approach.
                    Wyatt is the proof of concept. If it wins, it proves the model for every layer above it.
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    <Link
                      href="https://www.linkedin.com/in/aryan-haghighi-24b779304/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </Link>
                    <Link
                      href="https://x.com/theplarix"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-white transition-colors"
                      aria-label="X"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </Link>
                    <Link
                      href="mailto:security@plarix.dev"
                      className="text-slate-500 hover:text-white transition-colors text-sm"
                    >
                      security@plarix.dev
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="w-full bg-slate-950 py-16">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
            <div className="flex flex-col gap-6 max-w-2xl">
              <div className="flex items-center gap-3 px-4 py-2 border border-slate-800/50 w-fit">
                <div className="w-2.5 h-2.5 bg-amber-500" />
                <span className="text-sm font-medium text-slate-500 tracking-wide">
                  Mission
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white">
                Human control over AI systems.
              </h2>
              <p className="text-slate-400 text-base leading-relaxed">
                The current state of agentic AI is: agents have full access to tools and data,
                system prompts are the only constraint, and no mechanism exists to enforce what
                they can actually do. That is not a gap in product features. It is a gap in
                infrastructure.
              </p>
              <p className="text-slate-400 text-base leading-relaxed">
                Plarix is building that infrastructure. The goal is a world where any team can
                deploy an AI agent into production with the same confidence they deploy any other
                piece of software — knowing exactly what it can and cannot do, and having a
                tamper-evident record of every decision it makes.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center mt-4">
                <Link
                  href="/#cta"
                  className="inline-flex items-center justify-center px-6 py-3 bg-amber-500 text-slate-950 text-sm font-medium hover:bg-amber-400 transition-colors"
                >
                  Apply for Early Access
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center px-6 py-3 border border-slate-800 text-white text-sm font-medium hover:bg-slate-900/40 transition-colors"
                >
                  Read the Research
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
