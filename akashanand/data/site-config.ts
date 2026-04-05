export const siteConfig = {
  siteName: "Akash Anand Portfolio",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://akashanand.dev",
  locale: "en_US",
  defaultOgImage: "/opengraph-image",
  seo: {
    titleSuffix: "Akash Anand",
    defaultDescription:
      "Senior Software Engineer building resilient backend platforms, distributed systems, cloud infrastructure, and developer automation.",
    ogDescription:
      "Backend, cloud, distributed systems, reliability, and automation experience presented in a premium engineer portfolio.",
    twitterDescription:
      "Backend platforms, cloud systems, distributed architecture, and automation.",
    keywords: [
      "Senior Software Engineer",
      "Backend Engineer",
      "Platform Engineer",
      "Distributed Systems",
      "Cloud Infrastructure",
      "Automation",
      "Observability",
      "APIs",
      "Reliability Engineering",
    ],
  },
} as const;
