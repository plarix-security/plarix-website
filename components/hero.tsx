"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { useState, useCallback } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Features", href: "#features" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault()
      setMobileMenuOpen(false)
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    },
    [],
  )

  return (
    <nav className="fixed top-0 left-0 z-[100] w-full bg-slate-950/25 backdrop-blur-md">
      <div className="relative mx-auto flex h-14 max-w-7xl items-center px-6">
        {/* Logo: absolute, independent of navbar height */}
        <Link href="/" className="absolute left-6 top-1/2 -translate-y-1/2 z-10">
          <Image
            src="/images/plarix-logo-dark.png"
            alt="Plarix"
            width={400}
            height={100}
            className="invert brightness-200"
            style={{ height: "76px", width: "auto" }}
            priority
          />
        </Link>

        {/* Desktop nav links: absolutely centered in the bar */}
        <div className="hidden lg:flex items-center gap-8 text-sm text-white/60 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="transition-colors hover:text-white whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side: Get Started + mobile toggle */}
        <div className="ml-auto flex items-center gap-4">
          <a
            href="#cta"
            onClick={(e) => handleNavClick(e, "#cta")}
            className="hidden text-sm font-medium text-white transition-colors hover:text-white/80 lg:block"
          >
            Get Started
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="bg-slate-950/95 backdrop-blur-sm border-t border-slate-800/50 lg:hidden">
          <div className="flex flex-col px-6 py-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white/60 transition-colors hover:text-white py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={(e) => handleNavClick(e, "#cta")}
              className="mt-2 text-white font-medium py-2 border-t border-slate-800/50"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background - User's uploaded space image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/space-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-slate-950/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col justify-center items-center px-6 pt-14 text-center">
        <h1 className="max-w-4xl text-balance text-5xl font-normal tracking-tight text-white md:text-6xl lg:text-7xl">
          {"Your AI Agent Is Live. Is It Secure?".split(" ").map((word, i) => (
            <motion.span
              key={`hero-word-${word}-${i}`}
              initial={{ filter: "blur(10px)", opacity: 0 }}
              whileInView={{ filter: "blur(0px)", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-center text-sm leading-relaxed text-white/50 md:text-base">
          We find critical vulnerabilities in customer-facing AI implementations
          before they become breaches. Specialized security audits for B2B SaaS
          companies shipping LLM-powered features.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="bg-amber-500 px-6 text-slate-950 hover:bg-amber-400 font-medium"
            onClick={() => window.dispatchEvent(new CustomEvent("open-consultation"))}
          >
            Get a Free Security Assessment
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white/15 bg-transparent px-6 text-white hover:bg-white/5 hover:text-white"
            onClick={() => {
              const el = document.querySelector("#features")
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
            }}
          >
            See What We Test For
          </Button>
        </div>

        <p className="mt-12 text-xs text-white/30 tracking-wide uppercase">
          Specialized AI security for B2B SaaS companies
        </p>
      </div>
    </section>
  )
}
