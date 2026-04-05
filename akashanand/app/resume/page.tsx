import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience, personalInfo, siteConfig, skills } from "@/data";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume overview for Akash Anand, Senior Software Engineer focused on backend, platform, and cloud systems.",
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title: `Resume | ${personalInfo.name}`,
    description:
      "Resume overview for Akash Anand covering backend systems, platform engineering, cloud infrastructure, and automation.",
    url: `${siteConfig.siteUrl}/resume`,
    images: [siteConfig.defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `Resume | ${personalInfo.name}`,
    description:
      "Resume overview for Akash Anand covering backend systems, platform engineering, cloud infrastructure, and automation.",
    images: [siteConfig.defaultOgImage],
  },
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,var(--color-bg),var(--color-bg-elevated))]">
      <main
        id="main-content"
        className="mx-auto flex w-full max-w-5xl flex-col px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[var(--shadow-soft)] sm:p-12">
          <Link
            href="/"
            className="text-sm font-medium text-[var(--color-accent)] transition-opacity hover:opacity-70"
          >
            Back to portfolio
          </Link>
          <div className="mt-8 flex flex-col gap-6 border-b border-[var(--color-border)] pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Resume
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                {personalInfo.name}
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-8 text-[var(--color-text-muted)]">
                {personalInfo.summary}
              </p>
            </div>
            <a
              href={personalInfo.resume.file}
              download
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-border-strong)] px-5 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              Download PDF
            </a>
          </div>

          <section className="mt-10">
            <SectionHeading
              eyebrow="Snapshot"
              title="Senior engineer building reliable systems with measurable business impact."
              description="A concise recruiter-friendly view of backend, platform, reliability, and automation experience."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {personalInfo.resume.highlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-6"
                >
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <SectionHeading
                eyebrow="Experience"
                title="Recent roles"
                description="Selected impact from platform engineering, backend systems, and delivery automation."
              />
              <div className="mt-8 space-y-6">
                {experience.map((role) => (
                  <article
                    key={`${role.company}-${role.title}`}
                    className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-6"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold">{role.title}</h3>
                        <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                          {role.company} • {role.location}
                        </p>
                        <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">
                          {role.description}
                        </p>
                      </div>
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                        {role.period}
                      </p>
                    </div>
                    <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--color-text-muted)]">
                      {role.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {role.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-text-muted)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="space-y-10">
              <section>
                <SectionHeading
                  eyebrow="Skills"
                  title="Core strengths"
                  description="Grouped for fast scan by recruiters and hiring managers."
                />
                <div className="mt-6 space-y-5">
                  {skills.map((group) => (
                    <div
                      key={group.category}
                      className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-5"
                    >
                      <h3 className="text-sm font-semibold">{group.category}</h3>
                      <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                        {group.items.join(" • ")}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-6">
                <h2 className="text-lg font-semibold">Contact</h2>
                <div className="mt-4 space-y-3 text-sm text-[var(--color-text-muted)]">
                  <p>{personalInfo.contact.email}</p>
                  <p>{personalInfo.contact.location}</p>
                  <p>{personalInfo.contact.availability}</p>
                </div>
              </section>
            </aside>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
