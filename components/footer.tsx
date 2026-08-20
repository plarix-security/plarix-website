import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800/30">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Logo & Tagline */}
          <div className="flex flex-col gap-2">
            <Link href="/">
              <Image
                src="/images/plarix-logo-dark.png"
                alt="Plarix"
                width={400}
                height={100}
                className="invert brightness-200"
                style={{ height: "76px", width: "auto" }}
              />
            </Link>
            <p className="text-sm text-slate-500">Money saved. Time returned.</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/#approach" className="text-sm text-slate-500 transition-colors hover:text-white">Approach</Link>
            <Link href="/about" className="text-sm text-slate-500 transition-colors hover:text-white">About</Link>
            <Link href="/glossary" className="text-sm text-slate-500 transition-colors hover:text-white">Glossary</Link>
            <Link href="/blog" className="text-sm text-slate-500 transition-colors hover:text-white">Blog</Link>
            <Link href="/privacy" className="text-sm text-slate-500 transition-colors hover:text-white">Privacy</Link>
            <Link href="mailto:hello@plarix.dev" className="text-sm text-slate-500 transition-colors hover:text-white">Contact</Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <Link
              href="https://x.com/theplarix"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 transition-colors hover:text-white"
              aria-label="X (formerly Twitter)"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-slate-800/30 pt-8">
          <p className="text-xs text-slate-600">
            &copy; 2026 Plarix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
