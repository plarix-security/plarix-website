"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function NavbarSubpage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8 text-sm text-white/60 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link href="/#solution" className="transition-colors hover:text-white whitespace-nowrap">
            Product
          </Link>
          <Link href="/about" className="transition-colors hover:text-white whitespace-nowrap">
            About
          </Link>
          <Link href="/glossary" className="transition-colors hover:text-white whitespace-nowrap">
            Glossary
          </Link>
          <Link href="/blog" className="transition-colors hover:text-white whitespace-nowrap">
            Blog
          </Link>
        </div>

        {/* Right side */}
        <div className="ml-auto flex items-center gap-4">
          <Link
            href="/#cta"
            className="hidden text-sm font-medium text-white transition-colors hover:text-white/80 lg:block"
          >
            Get Early Access
          </Link>
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
            <Link
              href="/#solution"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/60 transition-colors hover:text-white py-2"
            >
              Product
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/60 transition-colors hover:text-white py-2"
            >
              About
            </Link>
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
            <Link
              href="/#cta"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-white font-medium py-2 border-t border-slate-800/50"
            >
              Get Early Access
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
