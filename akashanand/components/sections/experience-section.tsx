import { ExperienceCard } from "@/components/cards/experience-card";
import { experience } from "@/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

export function ExperienceSection() {
  return (
    <SectionShell id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Experience built around backend platforms, automation, and measurable engineering impact."
        description="A premium timeline view of roles where the focus was shipping scalable systems, reducing latency, automating operations, and improving reliability."
      />
      <div className="relative mt-10 grid gap-6 lg:pl-10">
        <div className="absolute bottom-0 left-2 top-0 hidden w-px bg-[linear-gradient(180deg,transparent,var(--color-border-strong),transparent)] lg:block" />
        {experience.map((role) => (
          <ExperienceCard key={`${role.company}-${role.period}`} {...role} />
        ))}
      </div>
    </SectionShell>
  );
}
