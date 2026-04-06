type ProjectCardProps = {
  name: string;
  featured: boolean;
  category: string;
  summary: string;
  impact: string;
  stack: readonly string[];
  githubUrl: string;
};

export function ProjectCard({
  name,
  featured,
  category,
  summary,
  impact,
  stack,
  githubUrl,
}: ProjectCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[linear-gradient(180deg,var(--color-surface),var(--color-surface-muted))] p-5 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-border-strong)] hover:shadow-[0_30px_90px_rgba(15,23,42,0.14)] sm:p-6">
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/65 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-[var(--color-border)] bg-[color:var(--color-surface-strong)]/75 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)] sm:text-[11px] sm:tracking-[0.22em]">
              {category}
            </span>
            {featured ? (
              <span className="rounded-full bg-[var(--color-accent)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white sm:text-[11px] sm:tracking-[0.22em]">
                Featured
              </span>
            ) : null}
          </div>
          <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{name}</h3>
          <p className="mt-4 text-sm leading-6 text-[var(--color-text-muted)] sm:leading-7">
            {summary}
          </p>
        </div>
      </div>

      <p className="mt-5 rounded-3xl border border-[var(--color-border)] bg-[color:var(--color-surface-strong)]/72 px-4 py-3 text-sm leading-6 text-[var(--color-text)] transition-transform duration-300 group-hover:-translate-y-0.5 sm:leading-7">
        {impact}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-text-muted)] transition-colors duration-200 group-hover:border-[var(--color-accent)]/30"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3 pt-2">
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[color:var(--color-surface-strong)]/75 px-4 py-2 text-sm font-semibold text-[var(--color-accent)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-accent)]"
        >
          GitHub
        </a>
      </div>
    </article>
  );
}
