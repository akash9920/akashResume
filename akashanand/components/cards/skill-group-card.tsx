type SkillGroupCardProps = {
  category: string;
  items: readonly string[];
};

export function SkillGroupCard({ category, items }: SkillGroupCardProps) {
  return (
    <article className="group rounded-[2rem] border border-[var(--color-border)] bg-[linear-gradient(180deg,var(--color-surface),var(--color-surface-muted))] p-5 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-border-strong)] sm:p-7">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold">{category}</h3>
        <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)] sm:text-[11px] sm:tracking-[0.24em]">
          {items.length} skills
        </span>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-[var(--color-border)] bg-[color:var(--color-surface-strong)]/78 px-3 py-2 text-xs text-[var(--color-text-muted)] transition-all duration-200 group-hover:border-[var(--color-accent)]/30 group-hover:-translate-y-0.5 sm:text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
