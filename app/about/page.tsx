import type { Metadata } from "next"
import Link from "next/link"
import { NavbarSubpage } from "@/components/navbar-subpage"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About — Plarix",
  description:
    "Plarix builds Economically-Engineered Agentic Systems for companies with expensive, repetitive, or slow processes. We measure the baseline, build the system, and report what it saved in money and hours.",
  alternates: {
    canonical: "https://plarix.dev/about",
  },
  openGraph: {
    title: "About — Plarix",
    description:
      "Plarix builds Economically-Engineered Agentic Systems for companies with expensive, repetitive, or slow processes. We measure the baseline, build the system, and report what it saved in money and hours.",
    url: "https://plarix.dev/about",
    siteName: "Plarix",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Plarix",
    description:
      "Plarix builds Economically-Engineered Agentic Systems for companies with expensive, repetitive, or slow processes.",
  },
}

const eeasItems = [
  {
    code: "EEAS-01",
    name: "Diagnose",
    layer: "Process baseline",
    description:
      "We measure how the process runs today: steps, time per step, cost per step, volume, and error rate. This is the number everything else gets compared against. Skip this step and there's nothing to measure the result against later.",
  },
  {
    code: "EEAS-02",
    name: "Design",
    layer: "Economic model",
    description:
      "Before any build starts, we model what the system would cost to build and run against the baseline we just measured. If the number doesn't clear, we say so. This is the stage most AI projects skip entirely.",
  },
  {
    code: "EEAS-03",
    name: "Deploy",
    layer: "The build",
    description:
      "The agentic system gets built and integrated into your existing tools, scoped to the exact process measured in stage one. Not a general assistant. A system built for one job.",
  },
  {
    code: "EEAS-04",
    name: "Measure",
    layer: "The scorecard",
    description:
      "Once live, results get compared against the original baseline on a set schedule: money saved, hours returned. If the number doesn't hold up in production, that gets reported too.",
  },
]

const productItems = [
  {
    name: "Process Scan",
    tag: "Free · No obligation",
    tagColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    description:
      "A short, no-cost review of one process: current cost, current hours, and an estimate of what an EEAS could realistically save. You get a number before you commit to anything.",
    link: null,
    linkLabel: null,
  },
  {
    name: "EEAS Build",
    tag: "Engagement",
    tagColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    description:
      "The core offering. We design and build the Economically-Engineered Agentic System around one measured process, integrated into your existing tools.",
    link: null,
    linkLabel: null,
  },
  {
    name: "The Scorecard",
    tag: "Reporting layer",
    tagColor: "text-slate-400 bg-slate-400/10 border-slate-400/20",
    description:
      "A running comparison of baseline against actual results, updated on a schedule. Built to answer a budget review directly: what did this cost, what did it save, in money and hours.",
    link: null,
    linkLabel: null,
  },
  {
    name: "Plarix Platform",
    tag: "In development",
    tagColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    description:
      "The long-term goal: a self-serve version of this process, so companies can run it across many workflows without a consulting team behind every one. Early customers help shape it.",
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
                We build AI when the math says it should exist.
              </h1>
              <p className="text-base md:text-lg text-slate-400 leading-relaxed">
                Plarix sits between a process that costs too much and an AI system that's actually worth building. We measure the baseline, build a system scoped to one process, and report exactly what changed in money and hours.
              </p>
            </div>
          </div>
        </section>

        {/* The ROI Gap */}
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
                  The ROI gap
                </h2>
                <p className="text-slate-400 text-base leading-relaxed">
                  Most companies can build an AI pilot. Almost none of them can say, in euros and hours, what it changed. A demo gets applause in a meeting. It rarely gets a number in a budget review.
                </p>
                <p className="text-slate-400 text-base leading-relaxed">
                  That's the ROI gap: the space between what a company built and what it can prove. MIT's 2025 review of enterprise AI found that 95% of generative AI pilots produced no measurable financial return. The problem was rarely the model. It was that nobody measured the baseline, scoped the build to a real process, or checked the result afterward.
                </p>
                <p className="text-slate-400 text-base leading-relaxed">
                  Plarix closes that gap by doing the measurement first. Every build starts with a baseline in money and hours, not a demo.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="p-8 border border-slate-800/30 bg-slate-900/20">
                  <p className="text-xs text-slate-600 font-mono tracking-wider mb-4">BEFORE PLARIX</p>
                  <div className="flex flex-col gap-3">
                    {[
                      'process: "invoice matching"',
                      "baseline: unknown",
                      "pilot.build()",
                      "→ result: \"looks promising\"",
                      "→ savings: unmeasured",
                    ].map((line, i) => (
                      <p key={i} className={`text-sm font-mono ${line.startsWith("→ savings") ? "text-red-400" : line.startsWith("→") ? "text-slate-500" : "text-slate-400"}`}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="p-8 border border-amber-500/20 bg-amber-500/5">
                  <p className="text-xs text-amber-500/60 font-mono tracking-wider mb-4">WITH PLARIX</p>
                  <div className="flex flex-col gap-3">
                    {[
                      'process: "invoice matching"',
                      "baseline: €300,000/yr · 8,000 hrs",
                      "eeas.build(process, baseline)",
                      "→ result: €120,000/yr · 2,500 hrs",
                      "→ savings: €180,000 + 5,500 hrs, logged",
                    ].map((line, i) => (
                      <p key={i} className={`text-sm font-mono ${line.includes("logged") ? "text-emerald-400" : line.startsWith("→") ? "text-slate-400" : "text-slate-300"}`}>
                        {line}
                      </p>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 font-mono tracking-wider mt-4">
                    Example — illustrative calculation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The EEAS Method */}
        <section className="w-full bg-slate-950 py-16 border-b border-slate-800/30">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4 max-w-2xl">
                <div className="flex items-center gap-3 px-4 py-2 border border-slate-800/50 w-fit">
                  <div className="w-2.5 h-2.5 bg-amber-500" />
                  <span className="text-sm font-medium text-slate-500 tracking-wide">
                    The EEAS Method
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white">
                  How an EEAS gets built
                </h2>
                <p className="text-slate-400 text-base leading-relaxed">
                  Every engagement moves through four stages. Skipping one is how AI pilots turn into demos nobody can price.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {eeasItems.map((item) => (
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

        {/* What Plarix builds */}
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
                  The offering has four parts. The free scan is the entry point. The build is the core. The scorecard is what makes the result defensible. The platform is where this is going.
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
                AI, priced like every other investment.
              </h2>
              <p className="text-slate-400 text-base leading-relaxed">
                Most companies today run AI pilots with no baseline, no economic model, and no result that survives a budget review. That's not a failure of the technology. It's a gap in how the work gets scoped.
              </p>
              <p className="text-slate-400 text-base leading-relaxed">
                Plarix is building the discipline to close that gap: measure first, build only what pays for itself, and report the result the same way you'd report any other investment. The long-term goal is a platform any company can run itself, across as many processes as it has.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center mt-4">
                <Link
                  href="/#cta"
                  className="inline-flex items-center justify-center px-6 py-3 bg-amber-500 text-slate-950 text-sm font-medium hover:bg-amber-400 transition-colors"
                >
                  Get a Free Process Audit
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center px-6 py-3 border border-slate-800 text-white text-sm font-medium hover:bg-slate-900/40 transition-colors"
                >
                  Read the blog
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
