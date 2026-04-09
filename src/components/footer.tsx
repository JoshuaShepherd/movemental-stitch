import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-on-surface">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-12 max-w-screen-2xl mx-auto gap-8">
        <div>
          <Link href="/" className="text-surface font-headline italic text-xl">
            Movemental
          </Link>
          <p className="text-surface-dim text-[10px] tracking-[0.2em] uppercase font-label mt-2">
            From content to living systems
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <Link href="/about" className="text-surface-dim hover:text-white transition-colors text-xs tracking-widest uppercase font-label">
            About
          </Link>
          <Link href="/platform" className="text-surface-dim hover:text-white transition-colors text-xs tracking-widest uppercase font-label">
            Platform
          </Link>
          <Link href="/pricing" className="text-surface-dim hover:text-white transition-colors text-xs tracking-widest uppercase font-label">
            Pricing
          </Link>
          <Link href="/faq" className="text-surface-dim hover:text-white transition-colors text-xs tracking-widest uppercase font-label">
            FAQ
          </Link>
          <Link href="/gallery" className="text-surface-dim hover:text-white transition-colors text-xs tracking-widest uppercase font-label">
            Gallery
          </Link>
        </div>
        <div className="text-surface-dim text-[10px] tracking-widest uppercase">
          © 2025 Movemental. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
