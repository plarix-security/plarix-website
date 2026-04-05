import Link from "next/link"

export function FounderSection() {
  return (
    <section className="w-full bg-slate-950 py-16 border-b border-slate-800/30">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3 px-4 py-2 border border-slate-800/50 w-fit">
            <div className="w-2.5 h-2.5 bg-amber-500" />
            <span className="text-sm font-medium text-slate-500 tracking-wide">
              Built by
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 p-8 border border-slate-800/30 bg-slate-900/20 max-w-2xl">
            {/* Initials avatar */}
            <div className="w-14 h-14 flex items-center justify-center bg-amber-500/10 border border-amber-500/20 shrink-0">
              <span className="text-amber-500 font-medium text-lg tracking-wide">AH</span>
            </div>

            <div className="flex flex-col gap-1.5">
              <p className="text-white text-lg font-medium tracking-tight">Aryan Haghighi</p>
              <p className="text-slate-500 text-sm">Founder, Plarix</p>
              <p className="text-slate-400 text-sm leading-relaxed mt-1">
                AI engineer and security researcher building runtime enforcement
                infrastructure for AI agents.
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 sm:ml-auto shrink-0">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
