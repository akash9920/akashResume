import Link from "next/link";
import { personalInfo } from "@/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

export function ResumeSection() {
  return (
    <SectionShell id="resume">
      <div className="rounded-[2rem] border border-[var(--color-border)] bg-[linear-gradient(180deg,var(--color-surface),var(--color-surface-muted))] p-5 shadow-[var(--shadow-soft)] sm:p-10">
        <SectionHeading
          eyebrow="Resume"
          title="A recruiter-ready summary with a dedicated downloadable version."
          description="The portfolio gives the narrative; the resume page delivers a compact, scannable snapshot for hiring pipelines."
        />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/resume"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
          >
            Open resume page
          </Link>
          <a
            href={personalInfo.resume.file}
            download
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-border-strong)] px-5 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            Download PDF
          </a>
        </div>
      </div>
    </SectionShell>
  );
}
