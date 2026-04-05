# Akash Anand Portfolio

A production-ready personal portfolio built with Next.js App Router, TypeScript, and Tailwind CSS.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## Setup

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables:

```bash
cp .env.example .env.local
```

3. Update `NEXT_PUBLIC_SITE_URL` in `.env.local` for your deployed domain.

## Run Locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run lint
npm run build
npm run start
```

## Content Editing

Update site content from the typed files in `data/`:

- `data/personal.ts`: name, title, hero, about, contact, resume highlights
- `data/navigation.ts`: navbar items
- `data/experience.ts`: work history
- `data/projects.ts`: projects, categories, GitHub/demo links
- `data/skills.ts`: grouped skills
- `data/social-links.ts`: GitHub, LinkedIn, email
- `data/site-config.ts`: site URL and SEO defaults

## Deploy

Recommended: deploy on Vercel.

Why:

- Best support for Next.js App Router
- Automatic HTTPS, previews, and simple custom domain setup
- Minimal ops overhead for a personal portfolio

Steps:

1. Push the repo to GitHub.
2. Import the repo into Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` to your production domain.
4. Deploy.

## Notes

- The contact form currently validates on the client and posts to a local route handler. Connect it to Resend, Formspree, or another provider before using it for real inbound messages.
- Replace the placeholder resume at `public/resume/akash-anand-resume.pdf`.
- Replace placeholder project and social links in `data/`.
