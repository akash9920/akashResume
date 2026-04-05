"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/cards/project-card";
import { projects } from "@/data";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const allProjects = projects;

export function ProjectsGrid() {
  const filters = useMemo(() => {
    const categories = new Set<string>();
    const technologies = new Set<string>();

    allProjects.forEach((project) => {
      categories.add(project.category);
      project.stack.forEach((item) => technologies.add(item));
    });

    return [
      { label: "All", value: "all", type: "all" as const },
      { label: "Featured", value: "featured", type: "featured" as const },
      ...Array.from(categories).map((item) => ({
        label: item,
        value: item,
        type: "category" as const,
      })),
      ...Array.from(technologies).slice(0, 8).map((item) => ({
        label: item,
        value: item,
        type: "technology" as const,
      })),
    ];
  }, []);

  const [activeFilter, setActiveFilter] = useState(filters[0]);

  const filteredProjects = useMemo(() => {
    const featured = allProjects.filter((project) => project.featured);
    const ordered = [
      ...featured,
      ...allProjects.filter((project) => !project.featured),
    ];

    if (activeFilter.type === "all") {
      return ordered;
    }

    if (activeFilter.type === "featured") {
      return featured;
    }

    if (activeFilter.type === "category") {
      return ordered.filter((project) => project.category === activeFilter.value);
    }

    return ordered.filter((project) => project.stack.includes(activeFilter.value));
  }, [activeFilter]);

  return (
    <div className="mt-10">
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => {
          const isActive =
            filter.type === activeFilter.type && filter.value === activeFilter.value;

          return (
            <button
              key={`${filter.type}-${filter.value}`}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition-all duration-200",
                isActive
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white"
                  : "border-[var(--color-border)] bg-[color:var(--color-surface-strong)]/72 text-[var(--color-text-muted)] hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:text-[var(--color-text)]",
              )}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-sm text-[var(--color-text-muted)]">
        Showing {filteredProjects.length} project
        {filteredProjects.length === 1 ? "" : "s"} focused on backend
        engineering, cloud, automation, AI, observability, and scale.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <Reveal key={project.name} delayMs={(index % 6) * 55}>
            <ProjectCard {...project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
