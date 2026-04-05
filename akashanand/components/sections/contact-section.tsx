import { ReactNode } from "react";
import { personalInfo } from "@/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

type ContactSectionProps = {
  children: ReactNode;
};

export function ContactSection({ children }: ContactSectionProps) {
  return (
    <SectionShell id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Open to thoughtful engineering conversations and strong technical teams."
        description={personalInfo.contact.invite}
      />
      <Reveal delayMs={60}>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-text-muted)] sm:text-base">
          {personalInfo.contact.availability}
        </p>
      </Reveal>
      <Reveal delayMs={110} className="mt-10">
        {children}
      </Reveal>
    </SectionShell>
  );
}
