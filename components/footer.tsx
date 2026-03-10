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
            <p className="text-sm text-slate-500">AI Security for Modern SaaS</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6">
            <Link href="#problem" className="text-sm text-slate-500 transition-colors hover:text-white">Problem</Link>
            <Link href="#solution" className="text-sm text-slate-500 transition-colors hover:text-white">Solution</Link>
            <Link href="#features" className="text-sm text-slate-500 transition-colors hover:text-white">Features</Link>
            <Link href="#faq" className="text-sm text-slate-500 transition-colors hover:text-white">FAQ</Link>
            <Link href="mailto:security@plarix.dev" className="text-sm text-slate-500 transition-colors hover:text-white">Contact</Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 transition-colors hover:text-white"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </Link>
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
            2026 Plarix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
