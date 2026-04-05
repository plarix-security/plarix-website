"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { useState, useCallback } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleScrollClick = useCallback(
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
        {/* Logo */}
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

        {/* Desktop nav: Product | Glossary | Blog */}
        <div className="hidden lg:flex items-center gap-8 text-sm text-white/60 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <a
            href="#solution"
            onClick={(e) => handleScrollClick(e, "#solution")}
            className="transition-colors hover:text-white whitespace-nowrap"
          >
            Product
          </a>
          <Link href="/glossary" className="transition-colors hover:text-white whitespace-nowrap">
            Glossary
          </Link>
          <Link href="/blog" className="transition-colors hover:text-white whitespace-nowrap">
            Blog
          </Link>
        </div>

        {/* Right side: Get Started + mobile toggle */}
        <div className="ml-auto flex items-center gap-4">
          <a
            href="#cta"
            onClick={(e) => handleScrollClick(e, "#cta")}
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
            <a
              href="#solution"
              onClick={(e) => handleScrollClick(e, "#solution")}
              className="text-white/60 transition-colors hover:text-white py-2"
            >
              Product
            </a>
            <Link
              href="/glossary"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/60 transition-colors hover:text-white py-2"
            >
              Glossary
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/60 transition-colors hover:text-white py-2"
            >
              Blog
            </Link>
            <a
              href="#cta"
              onClick={(e) => handleScrollClick(e, "#cta")}
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
          {"Agents unleashed. Boundaries unbroken.".split(" ").map((word, i) => (
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
          Wyatt is the enforcement layer. A runtime daemon that intercepts every
          tool call before it executes. Deny by default. Always.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="bg-amber-500 px-6 text-slate-950 hover:bg-amber-400 font-medium"
            onClick={() => window.dispatchEvent(new CustomEvent("open-consultation"))}
          >
            Get Early Access
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white/15 bg-transparent px-6 text-white hover:bg-white/5 hover:text-white"
            onClick={() => {
              const el = document.querySelector("#solution")
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
            }}
          >
            See How It Works
          </Button>
        </div>

        <p className="mt-12 text-xs text-white/30 tracking-wide uppercase">
          Runtime Enforcement for AI Agents
        </p>
      </div>
    </section>
  )
}
