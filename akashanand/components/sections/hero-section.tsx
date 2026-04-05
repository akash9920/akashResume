import Link from "next/link";
import { personalInfo } from "@/data";
import { SectionShell } from "@/components/ui/section-shell";

export function HeroSection() {
  return (
    <SectionShell id="top" className="pt-10 sm:pt-16 lg:pt-24">
      <div className="hero-fade-in relative">
        <div className="pointer-events-none absolute inset-x-0 top-8 -z-10 h-72 rounded-full bg-[radial-gradient(circle,_color-mix(in_srgb,var(--color-accent)_22%,transparent)_0%,transparent_70%)] blur-3xl" />
        <div className="grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-[var(--color-border)] bg-[color:var(--color-surface-strong)]/85 px-4 py-2 shadow-[var(--shadow-soft)] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--color-text-muted)]">
                Senior Software Engineer
              </p>
            </div>

            <h1 className="mt-7 max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-balance sm:text-6xl lg:text-7xl">
              {personalInfo.name} builds backend platforms engineered for scale,
              reliability, and fast execution.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)] sm:text-xl">
              {personalInfo.summary}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="#projects"
                aria-label="View featured projects"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                View Projects
              </Link>
              <a
                href={personalInfo.resume.file}
                download
                aria-label="Download resume PDF"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[color:var(--color-surface-strong)]/80 px-6 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                Download Resume
              </a>
              <Link
                href="#contact"
                aria-label="Jump to contact section"
                className="inline-flex items-center justify-center rounded-full border border-transparent px-6 py-3.5 text-sm font-semibold text-[var(--color-text-muted)] transition-all duration-200 hover:-translate-y-0.5 hover:text-[var(--color-text)]"
              >
                Contact Me
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {personalInfo.heroCredibility.domains.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--color-border)] bg-[color:var(--color-surface-strong)]/75 px-3 py-2 text-sm text-[var(--color-text-muted)] backdrop-blur"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <aside
            aria-label="Recruiter snapshot"
            className="relative overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[linear-gradient(180deg,var(--color-surface-strong),var(--color-surface-muted))] p-6 shadow-[var(--shadow-soft)] sm:p-8"
          >
            <div className="absolute left-8 top-0 h-px w-28 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent" />
            <div className="grid gap-6 lg:gap-8">
              <div className="relative min-h-[320px] overflow-hidden rounded-[1.75rem] border border-[var(--color-border)] bg-[radial-gradient(circle_at_top_left,_color-mix(in_srgb,var(--color-accent)_18%,transparent),transparent_38%),linear-gradient(160deg,color-mix(in_srgb,var(--color-accent)_12%,var(--color-surface-strong)),var(--color-surface))] p-6">
                <div className="absolute right-6 top-6 rounded-full border border-[var(--color-border)] bg-[color:var(--color-surface-strong)]/80 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--color-text-muted)]">
                  Recruiter Snapshot
                </div>
                <div className="relative flex h-full flex-col justify-between">
                  <div className="mx-auto mt-8 flex h-36 w-36 items-center justify-center rounded-[2rem] border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-accent)_20%,white),var(--color-surface-strong))] shadow-[var(--shadow-soft)]">
                    <div className="relative h-24 w-24 rounded-full border border-[var(--color-border-strong)] bg-[linear-gradient(180deg,var(--color-surface-strong),color-mix(in_srgb,var(--color-accent)_10%,var(--color-surface)))]">
                      <div className="absolute left-1/2 top-[22%] h-8 w-8 -translate-x-1/2 rounded-full bg-[color:var(--color-accent)]/80" />
                      <div className="absolute bottom-[14%] left-1/2 h-10 w-14 -translate-x-1/2 rounded-t-[999px] bg-[color:var(--color-accent)]/70" />
                    </div>
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-3">
                    {personalInfo.heroStats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-3xl border border-[var(--color-border)] bg-[color:var(--color-surface-strong)]/78 p-4 backdrop-blur"
                      >
                        <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
                          {stat.value}
                        </p>
                        <p className="mt-2 text-xs leading-5 text-[var(--color-text-muted)]">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-3">
                {personalInfo.heroCredibility.highlights.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-3xl border border-[var(--color-border)] bg-[color:var(--color-surface-strong)]/72 px-4 py-4"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    <p className="text-sm leading-7 text-[var(--color-text-muted)]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-8 rounded-[2rem] border border-[var(--color-border)] bg-[color:var(--color-surface-strong)]/85 p-4 shadow-[var(--shadow-soft)] backdrop-blur sm:p-5">
          <div className="grid gap-4 md:grid-cols-[0.95fr_1.05fr_1fr]">
            <div className="rounded-[1.5rem] bg-[var(--color-surface-muted)] px-4 py-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--color-text-muted)]">
                Experience
              </p>
              <p className="mt-2 text-base font-semibold">
                8+ years building production software
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-[var(--color-surface-muted)] px-4 py-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--color-text-muted)]">
                Core Domains
              </p>
              <p className="mt-2 text-base font-semibold">
                Backend systems, cloud platforms, distributed services
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-[var(--color-surface-muted)] px-4 py-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--color-text-muted)]">
                Impact
              </p>
              <p className="mt-2 text-base font-semibold">
                Faster releases, stronger reliability, lower operational toil
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
