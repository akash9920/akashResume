"use client";

import { FormEvent, useState } from "react";
import { socialLinks } from "@/data";

type ContactFormProps = {
  email: string;
};

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm({ email }: ContactFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const nextErrors: Partial<FormState> = {};

    if (form.name.trim().length < 2) {
      nextErrors.name = "Please enter your name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (form.message.trim().length < 20) {
      nextErrors.message = "Please share a short message with a little context.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      setStatus({
        type: "error",
        message: "Please fix the highlighted fields and try again.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const payload = (await response.json()) as { message: string };

      if (!response.ok) {
        throw new Error(payload.message);
      }

      setForm(initialState);
      setErrors({});
      setStatus({ type: "success", message: payload.message });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to submit your message right now.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <form
        className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)] sm:p-8"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="mb-6">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
            Contact Form
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight">
            Start the conversation
          </h3>
          <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
            Share the role, team, or technical problem you’re working on and I’ll
            get back to you.
          </p>
        </div>

        <div className="grid gap-5">
          <label className="grid gap-2 text-sm font-medium">
            Name
            <input
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={(event) =>
                setForm((current) => ({ ...current, name: event.target.value }))
              }
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] px-4 py-3 outline-none transition-colors focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/10"
              placeholder="Your name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name ? (
              <span id="name-error" className="text-xs text-[#d84f4f]">
                {errors.name}
              </span>
            ) : null}
          </label>

          <label className="grid gap-2 text-sm font-medium">
            Email
            <input
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(event) =>
                setForm((current) => ({ ...current, email: event.target.value }))
              }
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] px-4 py-3 outline-none transition-colors focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/10"
              placeholder="you@company.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email ? (
              <span id="email-error" className="text-xs text-[#d84f4f]">
                {errors.email}
              </span>
            ) : null}
          </label>

          <label className="grid gap-2 text-sm font-medium">
            Message
            <textarea
              autoComplete="off"
              value={form.message}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  message: event.target.value,
                }))
              }
              className="min-h-36 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] px-4 py-3 outline-none transition-colors focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/10"
              placeholder="Tell me about the role, team, or project."
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message ? (
              <span id="message-error" className="text-xs text-[#d84f4f]">
                {errors.message}
              </span>
            ) : null}
          </label>
        </div>

        <div className="mt-6 flex flex-col items-start gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex min-w-40 items-center justify-center rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </button>
          {status.message ? (
            <div
              role="status"
              aria-live="polite"
              className={`w-full rounded-2xl border px-4 py-3 text-sm leading-6 ${
                status.type === "error"
                  ? "border-[#d84f4f]/30 bg-[#d84f4f]/8 text-[#b43b3b]"
                  : "border-[var(--color-accent)]/20 bg-[var(--color-accent)]/8 text-[var(--color-text)]"
              }`}
            >
              {status.message}
            </div>
          ) : null}
        </div>
      </form>

      <aside className="space-y-4">
        <div className="rounded-[2rem] border border-[var(--color-border)] bg-[linear-gradient(180deg,var(--color-surface),var(--color-surface-muted))] p-6 shadow-[var(--shadow-soft)]">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
            Reach Out
          </p>
          <h3 className="mt-4 text-xl font-semibold">Direct contact</h3>
          <div className="mt-5 grid gap-3">
            <a
              href={`mailto:${email}`}
              aria-label={`Email ${email}`}
              className="rounded-2xl border border-[var(--color-border)] bg-[color:var(--color-surface-strong)]/78 px-4 py-4 text-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-accent)]/30"
            >
              <span className="block font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-text-muted)]">
                Email
              </span>
              <span className="mt-2 block font-semibold text-[var(--color-accent)]">
                {email}
              </span>
            </a>
            {socialLinks
              .filter((link) => link.label !== "Email")
              .map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                aria-label={`${link.label}: ${link.value}`}
                className="rounded-2xl border border-[var(--color-border)] bg-[color:var(--color-surface-strong)]/78 px-4 py-4 text-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-accent)]/30"
              >
                <span className="block font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-text-muted)]">
                  {link.label}
                </span>
                <span className="mt-2 block font-semibold text-[var(--color-text)]">
                  {link.value}
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]">
          <h3 className="text-xl font-semibold">Open to discuss</h3>
          <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">
            I’m a problem solver who enjoys making complex systems simpler,
            more reliable, and easier for teams to build on. I’m open to
            discussing engineering roles, collaborations, and interesting
            technical challenges.
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-text-muted)]">
            <li>Backend platforms and APIs</li>
            <li>Cloud infrastructure and automation</li>
            <li>Observability, reliability, and incident tooling</li>
            <li>Distributed systems and AI-assisted workflows</li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
