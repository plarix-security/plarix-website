import type { Metadata } from "next"
import Link from "next/link"
import { NavbarSubpage } from "@/components/navbar-subpage"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "AI Agent Security Glossary — Plarix",
  description:
    "Authoritative definitions for AFB01 Context Poisoning, AFB02 Model Boundary Compromise, AFB03 Instruction Hijack, AFB04 Unauthorized Action, CEE, Authorization Gap, Wyatt, and Wyscan — the AI agent security terms defined by Plarix.",
  alternates: {
    canonical: "https://plarix.dev/glossary",
  },
  openGraph: {
    title: "AI Agent Security Glossary — Plarix",
    description:
      "Authoritative definitions for AFB01–AFB04, CEE, Authorization Gap, Wyatt, and Wyscan — the core vocabulary of AI agent security.",
    url: "https://plarix.dev/glossary",
    siteName: "Plarix",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent Security Glossary — Plarix",
    description:
      "Authoritative definitions for AFB01–AFB04, CEE, Authorization Gap, Wyatt, and Wyscan.",
  },
}

const terms = [
  {
    id: "afb01",
    code: "AFB01",
    name: "Context Poisoning",
    definition:
      "A failure where the model ingests corrupted, forged, or manipulated context.",
    explanation:
      "Context Poisoning occurs when untrusted external data enters the model's context window without sanitization. Hidden instructions embedded in retrieved documents, web pages, emails, or database records can override the model's intended behavior — causing it to exfiltrate secrets, ignore constraints, or act against user intent. The attack surface grows with every external source the agent is allowed to read.",
    whyItMatters:
      "An agent that reads from the web, a database, or a document store is one poisoned input away from full compromise.",
  },
  {
    id: "afb02",
    code: "AFB02",
    name: "Model Boundary Compromise",
    definition:
      "Integrity or confidentiality failures at the model's input/output boundary.",
    explanation:
      "Model Boundary Compromise describes failures where the interface between the model and the broader system is exploited. This includes system prompt extraction, model inversion, and manipulation of the input/output pipeline in ways that bypass intended constraints. It maps to OWASP LLM supply-chain and information-disclosure categories and is the subtlest of the four AFBs because the attack targets the boundary itself rather than data flowing through it.",
    whyItMatters:
      "The model boundary is where your system's intent meets raw model behavior — any failure there undermines every downstream control you have built.",
  },
  {
    id: "afb03",
    code: "AFB03",
    name: "Instruction Hijack",
    definition:
      "A failure where model output becomes unsafe instructions executed by the agent layer.",
    explanation:
      "Instruction Hijack occurs when an attacker — via injected content, adversarial inputs, or chained prompt manipulation — causes the model to produce output that the agent executes as legitimate instructions. Unlike direct prompt injection (which targets the model), Instruction Hijack specifically exploits the trust the agent layer places in model output. The result: the agent acts on attacker-controlled commands while believing they are genuine model decisions.",
    whyItMatters:
      "Your agent treats model output as ground truth. If that output has been hijacked, your agent becomes an execution vector for arbitrary attacker instructions.",
  },
  {
    id: "afb04",
    code: "AFB04",
    name: "Unauthorized Action",
    definition:
      "A failure where the agent attempts or performs an action outside its authorized policy.",
    explanation:
      "Unauthorized Action is the most operationally visible AFB. It occurs when no policy layer exists — or is bypassed — between the model's decision to act and actual execution. An agent with access to file deletion, email sending, or database writes can perform any of those operations if there is no enforcement gate. Wyscan detects AFB04 exposures statically by tracing reachable call paths from tool registrations. Wyatt prevents them at runtime by intercepting every tool call before execution.",
    whyItMatters:
      "One unauthorized tool call can delete data, send communications, or exfiltrate secrets. System prompts are suggestions — not enforcement.",
  },
  {
    id: "cee",
    code: "CEE",
    name: "Canonical Execution Event",
    definition:
      "A four-field normalization schema for evaluating and recording every agent action.",
    explanation:
      "Introduced in AFB spec v2.0 (March 20, 2026), the Canonical Execution Event defines the minimum information required to evaluate policy and produce an audit record for any agent action: Operation (what is being done), Principal (who or what is requesting it), State Delta (what will change in the world), and Policy Basis (the rule that permits or denies it). Every tool call Wyatt intercepts is normalized into a CEE before policy evaluation occurs.",
    whyItMatters:
      "You cannot enforce what you cannot describe. The CEE gives every agent action a consistent, auditable shape — the foundation of any real enforcement layer.",
  },
  {
    id: "authorization-gap",
    code: null,
    name: "Authorization Gap",
    definition:
      "The space between what a system prompt instructs and what runtime actually enforces.",
    explanation:
      "The Authorization Gap is the fundamental vulnerability underlying AFB04. Every major agent framework ships without a runtime enforcement layer — system prompts describe desired behavior but cannot prevent an agent from executing any tool it has access to. The gap between \"the model is told not to delete files\" and \"the model cannot delete files\" is the Authorization Gap. It is not a configuration problem. It is an architectural absence. Wyatt closes it.",
    whyItMatters:
      "Every AI agent in production today has an Authorization Gap. The question is whether an attacker — or an unintended model decision — will ever fall into it.",
  },
  {
    id: "wyatt",
    code: null,
    name: "Wyatt",
    definition:
      "The runtime enforcement layer that intercepts every agent tool call before execution.",
    explanation:
      "Wyatt is Plarix's core product: a daemon that sits in the execution path of any AI agent and intercepts tool calls before they reach the underlying system. It evaluates each call against a declarative policy, normalizes it as a Canonical Execution Event, and either allows or denies it — logging every decision for audit. Wyatt is framework-agnostic and integrates with LangChain, CrewAI, custom agents, and MCP without requiring code rewrites. Deny by default. Always.",
    whyItMatters:
      "Wyatt is the only way to move from \"agents are told what to do\" to \"agents are prevented from doing what they are not allowed to do.\"",
  },
  {
    id: "wyscan",
    code: null,
    name: "Wyscan",
    definition:
      "A static analysis scanner that detects AFB04 exposures in agent codebases before production.",
    explanation:
      "Wyscan parses Python codebases with tree-sitter, resolves tool registrations semantically, and traces reachable call paths to identify dangerous operations — shell execution, file deletion, database writes, HTTP mutations — that lack authorization gates. It runs as a CLI or as a GitHub App on every pull request, classifying findings as critical, warning, or info. Wyscan covers AFB04 only; it does not detect AFB01–AFB03. It is the static complement to Wyatt's runtime enforcement.",
    whyItMatters:
      "Most agent security issues are visible in the code before deployment. Wyscan makes them findable before they reach production.",
  },
]

const schemaData = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "Plarix AI Agent Security Glossary",
  description:
    "Authoritative definitions for the core vocabulary of AI agent security, including AFB01–AFB04, CEE, Authorization Gap, Wyatt, and Wyscan.",
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
                The authoritative definitions for terms Plarix has introduced into the AI agent
                security vocabulary. Each entry links to its source specification.
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
                Definitions derived from the{" "}
                <a
                  href="https://github.com/plarix-security/afb-spec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors underline underline-offset-2"
                >
                  AFB Taxonomy Specification
                </a>{" "}
                (CC0-1.0).
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
