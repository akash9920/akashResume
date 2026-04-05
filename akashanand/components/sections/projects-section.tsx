import { ProjectsGrid } from "@/components/sections/projects-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

export function ProjectsSection() {
  return (
    <SectionShell id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Projects that showcase backend systems, cloud delivery, AI workflows, and scalable platform thinking."
        description="Featured work appears first, with filters to quickly explore projects by category or technology."
      />
      <ProjectsGrid />
    </SectionShell>
  );
}
