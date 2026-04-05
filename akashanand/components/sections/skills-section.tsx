import { SkillGroupCard } from "@/components/cards/skill-group-card";
import { skills } from "@/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

export function SkillsSection() {
  return (
    <SectionShell id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="A skill set centered on backend engineering, cloud platforms, and operational excellence."
        description="Organized for quick scanning, with strongest areas first and enough breadth to show full-stack and platform depth."
      />
      <Reveal delayMs={70}>
        <div className="mt-8 rounded-[2rem] border border-[var(--color-border)] bg-[color:var(--color-surface-strong)]/75 p-5 shadow-[var(--shadow-soft)]">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">
            Strength Areas
          </p>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-[var(--color-text-muted)] sm:text-base">
            Strongest depth across backend systems, platform engineering, cloud
            automation, observability, and scalable service design.
          </p>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((group, index) => (
          <Reveal key={group.category} delayMs={(index % 6) * 45}>
            <SkillGroupCard {...group} />
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
