import type { Metadata } from "next"
import Link from "next/link"
import { NavbarSubpage } from "@/components/navbar-subpage"
import { Footer } from "@/components/footer"

const POST_URL = "https://plarix.dev/blog/what-is-an-economically-engineered-agentic-system"
const PUBLISHED = "2026-08-19T00:00:00Z"

export const metadata: Metadata = {
  title: "What is an Economically-Engineered Agentic System? — Plarix Blog",
  description:
    "An explanation of the EEAS Method: the four stages, diagnose, design, deploy, measure, that turn an AI idea into a system with a provable return.",
  alternates: {
    canonical: POST_URL,
  },
  openGraph: {
    title: "What is an Economically-Engineered Agentic System? — Plarix Blog",
    description:
      "An explanation of the EEAS Method: the four stages, diagnose, design, deploy, measure, that turn an AI idea into a system with a provable return.",
    url: POST_URL,
    siteName: "Plarix",
    type: "article",
    publishedTime: PUBLISHED,
    authors: ["Plarix"],
  },
  twitter: {
    card: "summary_large_image",
    title: "What is an Economically-Engineered Agentic System? — Plarix Blog",
    description:
      "An explanation of the EEAS Method: the four stages that turn an AI idea into a system with a provable return.",
  },
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "What is an Economically-Engineered Agentic System?",
  description:
    "An explanation of the EEAS Method: the four stages, diagnose, design, deploy, measure, that turn an AI idea into a system with a provable return.",
  url: POST_URL,
  datePublished: PUBLISHED,
  author: {
    "@type": "Organization",
    name: "Plarix",
    url: "https://plarix.dev",
  },
  publisher: {
    "@type": "Organization",
    name: "Plarix",
    url: "https://plarix.dev",
  },
}

export default function BlogPostPage() {
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
        {/* Article header */}
        <section className="w-full bg-slate-950 pt-32 pb-12 border-b border-slate-800/30">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
            <div className="max-w-3xl flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 px-4 py-2 border border-slate-800/50 w-fit">
                  <div className="w-2.5 h-2.5 bg-amber-500" />
                  <span className="text-sm font-medium text-slate-500 tracking-wide">
                    Blog
                  </span>
                </div>
                <time
                  dateTime="2026-08-19"
                  className="text-xs font-mono text-slate-500 tracking-wide uppercase"
                >
                  August 19, 2026
                </time>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-[1.15]">
                What is an Economically-Engineered Agentic System?
              </h1>

              <p className="text-base md:text-lg text-slate-400 leading-relaxed">
                EEAS-01 through EEAS-04 define the four stages that turn an AI idea into a
                measured result. Here is what each stage means and why skipping one is how AI
                pilots turn into demos nobody can price.
              </p>
            </div>
          </div>
        </section>

        {/* Article body */}
        <section className="w-full bg-slate-950 py-16">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
            <div className="max-w-3xl">
              <div className="prose-styles">

                {/* Intro */}
                <p className="text-base text-slate-300 leading-relaxed mb-8">
                  When a company deploys an AI agent, tool access, data access, real actions,
                  it's making an investment. The question worth asking isn't whether the agent
                  works. It's whether what it costs to build and run is less than what it saves.
                  Most companies never answer that question, because nobody measured it before
                  they started building.
                </p>
                <p className="text-base text-slate-300 leading-relaxed mb-12">
                  An Economically-Engineered Agentic System, or EEAS, is Plarix's answer: an
                  agent system built only after its economics have been measured, modeled, and
                  checked. The method has four stages. Skipping any one of them is how a working
                  AI pilot turns into a system nobody can price.
                </p>

                {/* EEAS-01 */}
                <h2 className="text-2xl font-normal tracking-tight text-white mt-12 mb-4 flex items-center gap-3">
                  <span className="px-2 py-0.5 text-xs font-mono bg-amber-500/10 border border-amber-500/20 text-amber-500">
                    EEAS-01
                  </span>
                  Diagnose
                </h2>
                <p className="text-base text-slate-300 leading-relaxed mb-4">
                  Every EEAS starts with a process, not a use case. Diagnose is where Plarix
                  measures how that process runs today: time per step, cost per step, volume, and
                  error rate.
                </p>
                <p className="text-base text-slate-300 leading-relaxed mb-4">
                  This is direct measurement, not a survey. If a claims team spends 40 minutes per
                  ticket on manual lookups, that number comes from watching the process, not from
                  an estimate in a planning meeting.
                </p>
                <p className="text-base text-slate-300 leading-relaxed mb-8">
                  A real example of what this looks like: a back-office team estimated invoice
                  matching cost them about €200,000 a year. Measured directly, it was closer to
                  €300,000, once rework and the hours spent chasing missing documentation were
                  counted.{" "}
                  <Link
                    href="/glossary#eeas-01-diagnose"
                    className="text-amber-500 hover:text-amber-400 transition-colors underline underline-offset-2"
                  >
                    Full EEAS-01 definition →
                  </Link>
                </p>

                {/* EEAS-02 */}
                <h2 className="text-2xl font-normal tracking-tight text-white mt-12 mb-4 flex items-center gap-3">
                  <span className="px-2 py-0.5 text-xs font-mono bg-amber-500/10 border border-amber-500/20 text-amber-500">
                    EEAS-02
                  </span>
                  Design
                </h2>
                <p className="text-base text-slate-300 leading-relaxed mb-4">
                  Diagnose produces a baseline. Design is where that baseline gets tested against
                  a cost model: what it would actually cost to build and run an agentic system for
                  this process, and whether the projected saving clears that cost.
                </p>
                <p className="text-base text-slate-300 leading-relaxed mb-4">
                  This is the stage most AI projects skip. Teams go from idea straight to build,
                  and only find out afterward whether the number worked. Design puts that question
                  before the build, not after it.
                </p>
                <p className="text-base text-slate-300 leading-relaxed mb-8">
                  If the model says the process isn't worth automating yet, that's the answer
                  Plarix gives. Not every expensive process is a good build. Some are expensive
                  because of a decision two levels up that a bot can't fix.
                </p>

                {/* EEAS-03 */}
                <h2 className="text-2xl font-normal tracking-tight text-white mt-12 mb-4 flex items-center gap-3">
                  <span className="px-2 py-0.5 text-xs font-mono bg-amber-500/10 border border-amber-500/20 text-amber-500">
                    EEAS-03
                  </span>
                  Deploy
                </h2>
                <p className="text-base text-slate-300 leading-relaxed mb-4">
                  Design says whether to build. Deploy is the build itself: an agentic system
                  scoped to the one process measured in Diagnose, integrated into the tools the
                  company already runs.
                </p>
                <p className="text-base text-slate-300 leading-relaxed mb-8">
                  This isn't a general assistant dropped into a company and left to find its own
                  use case. It's built for the volume, edge cases, and error patterns Diagnose
                  already found. That scoping is what keeps a build inside its projected cost.
                </p>

                {/* EEAS-04 */}
                <h2 className="text-2xl font-normal tracking-tight text-white mt-12 mb-4 flex items-center gap-3">
                  <span className="px-2 py-0.5 text-xs font-mono bg-amber-500/10 border border-amber-500/20 text-amber-500">
                    EEAS-04
                  </span>
                  Measure
                </h2>
                <p className="text-base text-slate-300 leading-relaxed mb-4">
                  Once the system is live, Measure compares actual results against the original
                  baseline from Diagnose, on a set schedule. Two numbers matter: money saved and
                  hours returned.
                </p>
                <p className="text-base text-slate-300 leading-relaxed mb-8">
                  This is where the earlier example resolves: a process baselined at €300,000 a
                  year and 8,000 hours came down to €120,000 and 2,500 hours after deployment.
                  €180,000 saved, 5,500 hours returned, both logged against the original baseline.{" "}
                  <Link
                    href="/glossary#eeas-04-measure"
                    className="text-amber-500 hover:text-amber-400 transition-colors underline underline-offset-2"
                  >
                    Full EEAS-04 definition →
                  </Link>
                </p>

                {/* Closing */}
                <h2 className="text-2xl font-normal tracking-tight text-white mt-12 mb-4">
                  What the EEAS Method is for
                </h2>
                <p className="text-base text-slate-300 leading-relaxed mb-4">
                  The four stages aren't a checklist for its own sake. They're what turns
                  "we built an AI agent" into "we built a system that saves €180,000 and 5,500
                  hours a year, and here's the baseline it's measured against." Most AI
                  initiatives stop at deploy. The EEAS Method treats deploy as stage three of
                  four, not the finish line.
                </p>
                <p className="text-base text-slate-300 leading-relaxed mb-12">
                  If you're evaluating whether a process is worth automating, start at{" "}
                  <Link
                    href="/glossary#eeas-01-diagnose"
                    className="text-amber-500 hover:text-amber-400 transition-colors underline underline-offset-2"
                  >
                    Diagnose
                  </Link>
                  . Most companies skip straight to a build and find out the economics later, if
                  at all.
                </p>

                {/* Bottom links */}
                <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-slate-800/30">
                  <Link
                    href="/glossary"
                    className="flex items-center gap-2 px-6 py-3 border border-slate-800/50 text-sm text-slate-300 hover:text-white hover:border-slate-700 transition-colors w-fit"
                  >
                    View full glossary →
                  </Link>
                  <Link
                    href="/blog"
                    className="flex items-center gap-2 px-6 py-3 text-sm text-slate-500 hover:text-slate-300 transition-colors w-fit"
                  >
                    ← All posts
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
