"use client";

import { useState, useRef } from "react";
import type { Screen } from "./page";

type Props = {
  groups: Record<string, Screen[]>;
  sortedCategories: string[];
  categoryMeta: Record<string, { label: string; count: number; icon: string }>;
};

export default function Gallery({ groups, sortedCategories, categoryMeta }: Props) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const mainRef = useRef<HTMLDivElement>(null);

  const filteredCategories = sortedCategories.filter((cat) => {
    if (!search) return true;
    const q = search.toLowerCase();
    if (categoryMeta[cat].label.toLowerCase().includes(q)) return true;
    return groups[cat].some(
      (s) => s.label.toLowerCase().includes(q) || s.slug.toLowerCase().includes(q)
    );
  });

  const filteredScreens = (cat: string) => {
    if (!search) return groups[cat];
    const q = search.toLowerCase();
    if (categoryMeta[cat].label.toLowerCase().includes(q)) return groups[cat];
    return groups[cat].filter(
      (s) => s.label.toLowerCase().includes(q) || s.slug.toLowerCase().includes(q)
    );
  };

  const totalScreens = sortedCategories.reduce((n, c) => n + groups[c].length, 0);

  const scrollToCategory = (cat: string) => {
    setActiveCategory(cat);
    const el = document.getElementById(`cat-${cat}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-72" : "w-0"
        } transition-all duration-300 overflow-hidden flex-shrink-0 border-r border-outline-variant/20 bg-surface-container-low flex flex-col`}
      >
        <div className="p-6 border-b border-outline-variant/20">
          <a href="/" className="block">
            <h1 className="text-xl font-bold tracking-tight text-foreground">
              Movemental Stitch
            </h1>
            <p className="text-xs text-on-surface-variant mt-1">
              {totalScreens} screens across {sortedCategories.length} categories
            </p>
          </a>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-outline-variant/20">
          <input
            type="text"
            placeholder="Search screens..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 text-sm rounded-lg bg-background border border-outline-variant/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 placeholder:text-on-surface-variant/50"
          />
        </div>

        {/* Category nav */}
        <nav className="flex-1 overflow-y-auto py-2">
          {filteredCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => scrollToCategory(cat)}
              className={`w-full text-left px-6 py-3 text-sm flex items-center justify-between transition-colors hover:bg-surface-container ${
                activeCategory === cat
                  ? "bg-primary/10 text-primary font-medium border-r-2 border-primary"
                  : "text-foreground/80"
              }`}
            >
              <span className="truncate">{categoryMeta[cat].label}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  activeCategory === cat
                    ? "bg-primary/20 text-primary"
                    : "bg-surface-dim/50 text-on-surface-variant"
                }`}
              >
                {categoryMeta[cat].count}
              </span>
            </button>
          ))}
        </nav>

        {/* Footer link */}
        <div className="p-4 border-t border-outline-variant/20 text-xs text-on-surface-variant">
          <a href="/screens/the_curator_original/" className="hover:text-primary transition-colors">
            View original Stitch export
          </a>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="h-14 flex items-center px-6 border-b border-outline-variant/20 bg-background flex-shrink-0 gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1.5 rounded-md hover:bg-surface-container transition-colors text-on-surface-variant"
            title={sidebarOpen ? "Close sidebar" : "Open sidebar"}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <a href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Gallery
          </a>
          <span className="text-on-surface-variant/40">/</span>
          <span className="text-sm text-on-surface-variant">
            {activeCategory ? categoryMeta[activeCategory]?.label : "All Screens"}
          </span>
        </header>

        {/* Scrollable grid area */}
        <main ref={mainRef} className="flex-1 overflow-y-auto p-8">
          {filteredCategories.map((cat) => {
            const screens = filteredScreens(cat);
            if (screens.length === 0) return null;

            return (
              <section key={cat} id={`cat-${cat}`} className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                    {categoryMeta[cat].label}
                  </h2>
                  <span className="text-sm text-on-surface-variant bg-surface-container-low px-2.5 py-0.5 rounded-full">
                    {screens.length} {screens.length === 1 ? "variant" : "variants"}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
                  {screens.map((screen) => (
                    <ScreenCard key={screen.slug} screen={screen} />
                  ))}
                </div>
              </section>
            );
          })}

          {filteredCategories.length === 0 && (
            <div className="flex flex-col items-center justify-center h-64 text-on-surface-variant">
              <p className="text-lg">No screens match &ldquo;{search}&rdquo;</p>
              <button
                onClick={() => setSearch("")}
                className="mt-3 text-sm text-primary hover:underline"
              >
                Clear search
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

function ScreenCard({ screen }: { screen: Screen }) {
  const [imgError, setImgError] = useState(false);

  return (
    <a
      href={screen.hasCode ? `/screens/${screen.slug}/` : undefined}
      className={`group block rounded-xl overflow-hidden border border-outline-variant/15 bg-surface-container-low transition-all duration-200 ${
        screen.hasCode
          ? "hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 hover:-translate-y-0.5 cursor-pointer"
          : "opacity-60 cursor-default"
      }`}
    >
      {/* Thumbnail */}
      <div className="aspect-[16/10] bg-surface-dim overflow-hidden relative">
        {screen.hasScreenshot && !imgError ? (
          <img
            src={`/screens/${screen.slug}/screen.png`}
            alt={screen.label}
            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-on-surface-variant/30">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect x="6" y="10" width="36" height="28" rx="3" stroke="currentColor" strokeWidth="2" />
              <path d="M6 32l10-8 6 4 10-10 10 8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </svg>
          </div>
        )}
        {!screen.hasCode && (
          <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
            <span className="text-xs text-white bg-foreground/60 px-3 py-1 rounded-full">
              Screenshot only
            </span>
          </div>
        )}
      </div>

      {/* Label */}
      <div className="px-4 py-3 flex items-center justify-between">
        <span className="text-sm font-medium text-foreground truncate">
          {screen.label}
        </span>
        {screen.hasCode && (
          <svg
            className="w-4 h-4 text-on-surface-variant/40 group-hover:text-primary transition-colors flex-shrink-0 ml-2"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M7 4l6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </a>
  );
}
