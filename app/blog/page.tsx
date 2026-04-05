import type { Metadata } from "next"
import Link from "next/link"
import { NavbarSubpage } from "@/components/navbar-subpage"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Blog — Plarix",
  description:
    "Security research and technical writing on AI agent failure modes from the team building Wyatt and the AFB taxonomy.",
  alternates: {
    canonical: "https://plarix.dev/blog",
  },
  openGraph: {
    title: "Blog — Plarix",
    description:
      "Security research and technical writing on AI agent failure modes from the team building Wyatt and the AFB taxonomy.",
    url: "https://plarix.dev/blog",
    siteName: "Plarix",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Plarix",
    description:
      "Security research and technical writing on AI agent failure modes from the team building Wyatt and the AFB taxonomy.",
  },
}

const posts = [
  {
    slug: "what-is-an-agent-failure-boundary",
    title: "What is an Agent Failure Boundary?",
    date: "April 5, 2026",
    dateISO: "2026-04-05",
    excerpt:
      "AFB01 through AFB04 define the four distinct ways an AI agent system can fail — at the context input, at the model boundary, at the model output, and at execution. Here is what each one means and why the distinction matters for anyone building agents in production.",
  },
]

export default function BlogPage() {
  return (
    <>
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
                  Writing
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white">
                Blog
              </h1>
              <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl">
                Security research and technical writing on AI agent failure modes, the AFB
                taxonomy, and the infrastructure for keeping agents under human control.
              </p>
            </div>
          </div>
        </section>

        {/* Post list */}
        <section className="w-full bg-slate-950 py-16">
          <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
            <div className="flex flex-col gap-6">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="flex flex-col gap-4 p-8 border border-slate-800/30 bg-slate-900/20 hover:bg-slate-900/40 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <time
                      dateTime={post.dateISO}
                      className="text-xs font-mono text-slate-500 tracking-wide uppercase"
                    >
                      {post.date}
                    </time>
                  </div>

                  <h2 className="text-xl md:text-2xl font-normal tracking-tight text-white group-hover:text-slate-200 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-base text-slate-400 leading-relaxed max-w-2xl">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm text-amber-500 hover:text-amber-400 transition-colors w-fit"
                  >
                    Read more →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
