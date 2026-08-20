import React from "react"
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Plarix — Money Saved. Time Returned.',
  description: 'Plarix builds Economically-Engineered Agentic Systems: AI agents scoped to one business process, priced against a real baseline, and measured in euros and hours saved.',
  keywords: [
    'AI ROI',
    'economically engineered agentic system',
    'process automation',
    'AI cost savings',
    'business process AI',
    'agentic AI systems',
    'AI process audit',
    'workflow automation',
    'back-office automation',
    'AI implementation consulting',
  ],
  metadataBase: new URL('https://plarix.dev'),
  alternates: {
    canonical: 'https://plarix.dev',
  },
  openGraph: {
    title: 'Plarix — Money Saved. Time Returned.',
    description: 'Plarix builds Economically-Engineered Agentic Systems: AI agents scoped to one business process, priced against a real baseline, and measured in euros and hours saved.',
    url: 'https://plarix.dev',
    siteName: 'Plarix',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plarix — Money Saved. Time Returned.',
    description: 'Plarix builds Economically-Engineered Agentic Systems: AI agents scoped to one business process, priced against a real baseline, and measured in euros and hours saved.',
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
  '@type': 'Organization',
  name: 'Plarix',
  description: 'Plarix builds Economically-Engineered Agentic Systems for companies with expensive, repetitive, or slow processes. We measure the baseline, build the system, and report what it saved in money and hours.',
  url: 'https://plarix.dev',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@plarix.dev',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Host+Grotesk:wght@300..800&display=swap"
        />
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
