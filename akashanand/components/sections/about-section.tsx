import { personalInfo } from "@/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

export function AboutSection() {
  return (
    <SectionShell id="about">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionHeading
          eyebrow="About"
          title="An engineer who cares about scalable systems and practical execution."
          description="Focused on dependable software, strong ownership, and collaboration that moves products forward."
        />
        <div className="grid gap-5">
          <Reveal delayMs={60}>
            <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)] sm:p-7">
              <p className="text-lg font-medium leading-8 text-[var(--color-text)]">
                {personalInfo.about.intro}
              </p>
              <p className="mt-5 text-base leading-8 text-[var(--color-text-muted)]">
                {personalInfo.about.summary}
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <aside className="rounded-[2rem] border border-[var(--color-border)] bg-[linear-gradient(180deg,var(--color-surface-strong),var(--color-surface-muted))] p-6 shadow-[var(--shadow-soft)] sm:p-7">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Quick Facts
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {personalInfo.about.quickFacts.map((fact, index) => (
                  <Reveal key={fact.label} delayMs={160 + index * 35}>
                    <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-[color:var(--color-surface-strong)]/80 px-4 py-4">
                      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-text-muted)]">
                        {fact.label}
                      </p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-[var(--color-text)]">
                        {fact.value}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
