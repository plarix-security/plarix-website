import React from "react"
import type { Metadata } from 'next'
import { Host_Grotesk, Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const hostGrotesk = Host_Grotesk({ subsets: ["latin"], variable: "--font-host-grotesk" });

export const metadata: Metadata = {
  title: 'Plarix',
  description: 'We find critical vulnerabilities in customer-facing AI implementations before they become breaches. Specialized security audits for B2B SaaS companies shipping LLM-powered features.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${hostGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
