import Link from "next/link"

export function FounderSection() {
  return (
    <section className="w-full bg-slate-950 py-16 border-b border-slate-800/30">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3 px-4 py-2 border border-slate-800/50 w-fit">
            <div className="w-2.5 h-2.5 bg-amber-500" />
            <span className="text-sm font-medium text-slate-500 tracking-wide">
              The Founder
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Identity */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-6 p-8 border border-slate-800/30 bg-slate-900/20">
              <div className="w-14 h-14 flex items-center justify-center bg-amber-500/10 border border-amber-500/20 shrink-0">
                <span className="text-amber-500 font-medium text-lg tracking-wide">AH</span>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-white text-lg font-medium tracking-tight">Aryan Haghighi</p>
                  <p className="text-slate-500 text-sm mt-0.5">Founder, Plarix</p>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed">
                  Solo founder. Electrical Engineering undergraduate at Bahcesehir University, Istanbul.
                  Building runtime enforcement infrastructure for autonomous AI agents.
                </p>

                <p className="text-slate-400 text-sm leading-relaxed">
                  The thesis: a system prompt saying &ldquo;do not delete files&rdquo; is a suggestion, not enforcement.
                  Wyatt is the first product built to close that gap deterministically — at the execution layer,
                  before any tool call runs.
                </p>

                <div className="flex items-center gap-4 mt-2">
                  <Link
                    href="https://www.linkedin.com/in/aryan-haghighi-24b779304/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Aryan Haghighi on LinkedIn"
                    className="text-slate-500 hover:text-white transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </Link>
                  <Link
                    href="https://x.com/theplarix"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Plarix on X"
                    className="text-slate-500 hover:text-white transition-colors"
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

            {/* Right: The Authorization Gap thesis */}
            <div className="flex flex-col gap-6 p-8 border border-slate-800/30 bg-slate-900/20">
              <h3 className="text-white text-lg font-medium">The Authorization Gap</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Every major agent framework today relies on system prompts to constrain agent behavior.
                A prompt can say &ldquo;do not exfiltrate user data.&rdquo; The agent can still do it.
                There is no mechanism in any framework that deterministically stops it.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                That gap — between what you instruct the agent to do and what it is physically capable of doing —
                is the Authorization Gap. It is the core attack surface for every production agentic system.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Plarix was built to close it. Wyatt intercepts at the execution layer.
                Before any tool call runs. Every time.
                Not a guardrail. Not a prompt. Deterministic enforcement.
              </p>

              <div className="flex flex-col gap-2 mt-2">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <div className="w-1 h-1 bg-amber-500 shrink-0" />
                  AFB taxonomy: first-principles model of how agent systems fail
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <div className="w-1 h-1 bg-amber-500 shrink-0" />
                  Wyscan (OSS): static analysis to find AFB04 exposures before production
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <div className="w-1 h-1 bg-amber-500 shrink-0" />
                  Wyatt: runtime enforcement daemon, deny by default, always on
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <div className="w-1 h-1 bg-amber-500 shrink-0" />
                  Virgil: cryptographic attestation layer — tamper-evident audit trail
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
