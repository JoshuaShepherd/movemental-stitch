"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/platform", label: "Platform" },
  { href: "/how-it-works", label: "Process" },
  { href: "/movement-leaders", label: "Leaders" },
  { href: "/organizations", label: "Organizations" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
];

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl">
      <div className="flex justify-between items-center px-6 md:px-12 py-5 max-w-screen-2xl mx-auto">
        <Link
          href="/"
          className="text-2xl font-headline italic text-on-surface tracking-tight"
        >
          Movemental
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide transition-colors duration-300 ${
                pathname === link.href
                  ? "text-primary-container font-semibold"
                  : "text-on-surface/70 hover:text-primary-container"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/gallery"
            className="hidden md:inline-block text-sm text-on-surface-variant hover:text-primary-container transition-colors"
          >
            Gallery
          </Link>
          <Link
            href="/#cta"
            className="bg-linear-to-br from-primary to-primary-container text-white px-6 py-2.5 text-sm font-medium hover:brightness-110 transition-all active:scale-95"
          >
            Start a Conversation
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-on-surface"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-surface border-t border-outline-variant/20 px-6 py-4 space-y-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-2 text-sm ${
                pathname === link.href
                  ? "text-primary-container font-semibold"
                  : "text-on-surface/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/gallery"
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-sm text-on-surface-variant"
          >
            Design Gallery
          </Link>
        </div>
      )}
    </nav>
  );
}
