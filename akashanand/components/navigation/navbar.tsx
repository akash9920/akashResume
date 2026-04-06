"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigationItems, personalInfo } from "@/data";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("top");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = navigationItems.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((value): value is HTMLElement => Boolean(value));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (left, right) => right.intersectionRatio - left.intersectionRatio,
          )[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.5, 0.75],
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleHashSync = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActiveSection(hash);
      }
    };

    handleHashSync();
    window.addEventListener("hashchange", handleHashSync);

    return () => window.removeEventListener("hashchange", handleHashSync);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-[var(--color-border)] bg-[color:var(--color-surface-strong)]/90 px-3 py-3 shadow-[var(--shadow-soft)] backdrop-blur sm:rounded-full sm:px-4">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="#top"
            className="min-w-0 flex-1"
            onClick={() => setMenuOpen(false)}
          >
            <span className="block truncate text-sm font-semibold tracking-tight sm:text-base">
              {personalInfo.name}
            </span>
            <span className="mt-1 block truncate font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)] sm:text-[11px] sm:tracking-[0.25em]">
              {personalInfo.title}
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                aria-current={activeSection === item.id ? "page" : undefined}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition-colors duration-200",
                  activeSection === item.id
                    ? "bg-[var(--color-accent)] text-white"
                    : "text-[var(--color-text-muted)] hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-text)]",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label="Toggle navigation menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text)] lg:hidden"
              onClick={() => setMenuOpen((current) => !current)}
            >
              <span className="text-lg">{menuOpen ? "×" : "≡"}</span>
            </button>
          </div>
        </div>

        {menuOpen ? (
          <nav
            id="mobile-navigation"
            aria-label="Mobile"
            className="mt-4 grid gap-2 border-t border-[var(--color-border)] pt-4 lg:hidden"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                aria-current={activeSection === item.id ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "rounded-2xl px-4 py-3.5 text-sm transition-colors duration-200",
                  activeSection === item.id
                    ? "bg-[var(--color-accent)] text-white"
                    : "bg-[var(--color-surface-muted)] text-[var(--color-text-muted)]",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
