import type { Metadata } from "next"
import Link from "next/link"
import { NavbarSubpage } from "@/components/navbar-subpage"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "AI ROI Glossary — Plarix",
  description:
    "Definitions for the terms Plarix uses to build and measure Economically-Engineered Agentic Systems: EEAS, the ROI Gap, Process Baseline, and the four-stage EEAS Method.",
  alternates: {
    canonical: "https://plarix.dev/glossary",
  },
  openGraph: {
    title: "AI ROI Glossary — Plarix",
    description:
      "Definitions for the terms Plarix uses to build and measure Economically-Engineered Agentic Systems: EEAS, the ROI Gap, Process Baseline, and the four-stage EEAS Method.",
    url: "https://plarix.dev/glossary",
    siteName: "Plarix",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI ROI Glossary — Plarix",
    description:
      "Definitions for the terms Plarix uses to build and measure Economically-Engineered Agentic Systems.",
  },
}

const terms = [
  {
    id: "eeas",
    code: "EEAS",
    name: "Economically-Engineered Agentic System",
    definition:
      "An AI agent system built and scoped around one specific business process, sized against a measured baseline rather than a general use case.",
    explanation:
      "An EEAS starts with a process, not a technology. Before any system gets built, Plarix measures how the process runs today in cost and hours. The system is then designed and priced against that baseline, and deployed into the tools the company already uses. The name is deliberate: engineered, not experimental, and economic, not just technical.",
    whyItMatters:
      "A generic AI agent is built because the technology allows it. An EEAS is built because the baseline says it will pay for itself.",
  },
  {
    id: "roi-gap",
    code: null,
    name: "The ROI Gap",
    definition:
      "The space between an AI pilot a company has built and the result it can prove.",
    explanation:
      "Most companies can point to an AI pilot. Few can say, in euros and hours, what it changed. That gap between activity and proof is the ROI gap. It's not a technology problem. It's the result of building before measuring. Plarix closes it by measuring the baseline before any build starts, and reporting the result against that baseline after.",
    whyItMatters:
      "A pilot that can't be priced against a baseline can't survive a budget review, no matter how well it works in a demo.",
  },
  {
    id: "process-baseline",
    code: null,
    name: "Process Baseline",
    definition:
      "The measured cost and hours a process consumes before any system is built.",
    explanation:
      "The baseline is the number everything else gets compared against: current cost, current hours, volume, and error rate, measured directly rather than estimated. Every EEAS is priced and evaluated against its own baseline. Without one, there's no way to know whether a system saved anything.",
    whyItMatters:
      "You cannot report a savings number if you never measured what the process cost before you started.",
  },
  {
    id: "eeas-01-diagnose",
    code: "EEAS-01 · Diagnose",
    name: "Diagnose",
    definition:
      "The first stage of the EEAS Method: measuring how a process runs today.",
    explanation:
      "Diagnose is where the process baseline gets built. Plarix observes the process directly, timing and pricing each step, mapping volume and error rate. This stage produces the baseline every later result is measured against.",
    whyItMatters:
      "Skip this stage and there's no way to prove, later, what the system actually changed.",
  },
  {
    id: "eeas-02-design",
    code: "EEAS-02 · Design",
    name: "Design",
    definition:
      "The second stage: modeling whether automating the process is worth the cost.",
    explanation:
      "Design takes the baseline from Diagnose and models what an EEAS would cost to build and run against it. If the projected savings don't clear the cost of building and running the system, Plarix says so before any build starts.",
    whyItMatters:
      "Most AI projects skip this stage entirely and find out whether it was worth it only after the money is spent.",
  },
  {
    id: "eeas-03-deploy",
    code: "EEAS-03 · Deploy",
    name: "Deploy",
    definition:
      "The third stage: building and integrating the system into the process it was designed for.",
    explanation:
      "Deploy is the build itself: an agentic system scoped to the one process measured in Diagnose, integrated into the company's existing tools rather than a new platform layered on top.",
    whyItMatters:
      "A system built for a specific, measured process does the job it was priced to do. A general assistant dropped into a company rarely does.",
  },
  {
    id: "eeas-04-measure",
    code: "EEAS-04 · Measure",
    name: "Measure",
    definition:
      "The fourth stage: comparing actual results against the original baseline.",
    explanation:
      "Once the EEAS is live, Measure tracks real results, money saved and hours returned, against the baseline from Diagnose, on a set schedule. This is what turns a build into a provable result.",
    whyItMatters:
      "A system that isn't measured against its baseline is just a pilot with better branding.",
  },
  {
    id: "scorecard",
    code: null,
    name: "The Scorecard",
    definition:
      "The running record comparing a process's baseline against its actual results after an EEAS goes live.",
    explanation:
      "The scorecard is Plarix's reporting standard: baseline, current result, and the delta between them, in both money and hours, updated on a schedule. It's built to be handed directly to a budget review.",
    whyItMatters:
      "A savings claim without a scorecard behind it is a guess. A scorecard is the difference between \"we think this helped\" and \"this saved €180,000 and 5,500 hours, and here's the baseline it's measured against.\"",
  },
]

const schemaData = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "Plarix AI ROI Glossary",
  description:
    "Definitions for the terms Plarix uses to build and measure Economically-Engineered Agentic Systems.",
  url: "https://plarix.dev/glossary",
  hasDefinedTerm: terms.map((term) => ({
    "@type": "DefinedTerm",
    "@id": `https://plarix.dev/glossary#${term.id}`,
    name: term.code ? `${term.code} — ${term.name}` : term.name,
    description: term.definition,
    inDefinedTermSet: "https://plarix.dev/glossary",
  })),
}

export default function GlossaryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Vertical margin lines */}
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
        {/* Page header */}
        <section className="w-full bg-slate-950 pt-32 pb-16 border-b border-slate-800/30">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 px-4 py-2 border border-slate-800/50 w-fit">
                <div className="w-2.5 h-2.5 bg-amber-500" />
                <span className="text-sm font-medium text-slate-500 tracking-wide">
                  Reference
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white">
                Glossary
              </h1>
              <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl">
                The terms Plarix uses to scope, build, and measure an AI system against a real process. Each entry links back to where it's used.
              </p>
            </div>
          </div>
        </section>

        {/* Term list */}
        <section className="w-full bg-slate-950 py-16">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
            <div className="flex flex-col">
              {terms.map((term, index) => (
                <div
                  key={term.id}
                  id={term.id}
                  className={`py-12 ${index < terms.length - 1 ? "border-b border-slate-800/30" : ""}`}
                >
                  <div className="flex flex-col gap-5 max-w-3xl">
                    {/* Term heading */}
                    <div className="flex items-center gap-3 flex-wrap">
                      {term.code && (
                        <span className="px-2.5 py-1 text-xs font-mono font-medium bg-amber-500/10 border border-amber-500/20 text-amber-500 tracking-wider">
                          {term.code}
                        </span>
                      )}
                      <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-white">
                        {term.name}
                      </h2>
                    </div>

                    {/* One-line definition */}
                    <p className="text-lg text-amber-400/90 leading-snug font-normal">
                      {term.definition}
                    </p>

                    {/* Explanation */}
                    <p className="text-base text-slate-400 leading-relaxed">
                      {term.explanation}
                    </p>

                    {/* Why it matters */}
                    <div className="flex gap-3 p-4 border border-slate-800/50 bg-slate-900/30">
                      <div className="w-px bg-amber-500/40 shrink-0" />
                      <p className="text-sm text-slate-300 leading-relaxed">
                        <span className="text-amber-500 font-medium">Why it matters: </span>
                        {term.whyItMatters}
                      </p>
                    </div>

                    {/* Anchor link */}
                    <div>
                      <Link
                        href={`#${term.id}`}
                        className="text-xs text-slate-600 hover:text-slate-400 transition-colors font-mono"
                      >
                        #{term.id}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 pt-12 border-t border-slate-800/30 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
              <p className="text-sm text-slate-500">
                Definitions maintained by the Plarix team.
              </p>
              <Link
                href="/blog"
                className="text-sm text-amber-500 hover:text-amber-400 transition-colors whitespace-nowrap"
              >
                Read the blog →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
