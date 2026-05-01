import React from "react"
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Plarix — Runtime Enforcement for AI Agents',
  description: 'Wyatt intercepts every tool call your AI agent makes and enforces policy before execution. Deny by default. Built on the AFB taxonomy — the first-principles security framework for agentic AI systems.',
  keywords: [
    // High-volume — what the ICP actively searches
    'AI agent security',
    'LLM security',
    'secure AI agents',
    'AI agent compliance',
    'AI agent governance',
    'AI agent monitoring',
    'AI agent access control',
    'LLM guardrails',
    'prompt injection protection',
    'prompt injection prevention',
    'AI agent safety',
    'enterprise AI security',
    'autonomous AI safety',
    'AI agent audit trail',
    'AI agent SOC 2',
    'AI agent permissions',
    'AI agent sandboxing',
    'restrict AI agent actions',
    'control AI agent behavior',
    'AI agent policy enforcement',
    'AI agent runtime protection',
    'LLM agent governance',
    'agentic AI compliance',
    'AI agent firewall',
    'AI agent authorization',
    'LLM agent security',
    'MCP security',
    'Model Context Protocol security',
    'LangChain security',
    'CrewAI security',
    'AI agent tool call security',
    'how to secure AI agents',
    'AI agent risk management',
    'enterprise AI compliance',
    'AI agent incident response',
    'agentic AI security',
    // Plarix-specific
    'AFB taxonomy',
    'agent failure boundary',
    'CEE audit log',
    'ARGOS agent runtime',
    'Wyatt enforcement',
    'Plarix',
    'unauthorized action prevention',
    'runtime enforcement infrastructure',
    'agent security framework',
    'AI safety infrastructure',
    'deny by default AI',
  ],
  metadataBase: new URL('https://plarix.dev'),
  alternates: {
    canonical: 'https://plarix.dev',
  },
  openGraph: {
    title: 'Plarix — Runtime Enforcement for AI Agents',
    description: 'Wyatt intercepts every tool call your AI agent makes and enforces policy before execution. Deny by default. Built on the AFB taxonomy.',
    url: 'https://plarix.dev',
    siteName: 'Plarix',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plarix — Runtime Enforcement for AI Agents',
    description: 'Wyatt intercepts every tool call your AI agent makes and enforces policy before execution. Deny by default.',
    site: '@theplarix',
    creator: '@theplarix',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/apple-icon.png',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Wyatt by Plarix',
  applicationCategory: 'SecurityApplication',
  description: 'Runtime enforcement layer for AI agents. Intercepts every tool call before execution and enforces policy. Deny by default.',
  url: 'https://plarix.dev',
  author: {
    '@type': 'Organization',
    name: 'Plarix',
    url: 'https://plarix.dev',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'security@plarix.dev',
    },
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Free AFB Scanner (Wyscan) — runtime enforcement available via early access.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
