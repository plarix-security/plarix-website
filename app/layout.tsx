import React from "react"
import type { Metadata } from 'next'
import { Host_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const hostGrotesk = Host_Grotesk({ subsets: ["latin"], variable: "--font-host-grotesk" });

export const metadata: Metadata = {
  title: 'Plarix — Runtime Enforcement for AI Agents',
  description: 'Wyatt intercepts every tool call your AI agent makes and enforces policy before execution. Deny by default. Built on the AFB taxonomy — the first-principles security framework for agentic AI systems.',
  keywords: [
    'AI agent security',
    'runtime enforcement',
    'agent policy enforcement',
    'agentic AI security',
    'LLM agent security',
    'AI agent authorization',
    'AFB taxonomy',
    'agent failure boundary',
    'CEE audit log',
    'agent tool call enforcement',
    'Wyatt',
    'Plarix',
    'unauthorized action prevention',
    'AI agent runtime',
    'agent security infrastructure',
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
      <body className={`${hostGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
