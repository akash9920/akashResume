import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { personalInfo, siteConfig } from "@/data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${personalInfo.name} | ${personalInfo.title}`,
    template: `%s | ${personalInfo.name}`,
  },
  description: siteConfig.seo.defaultDescription,
  applicationName: siteConfig.siteName,
  keywords: Array.from(siteConfig.seo.keywords),
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  publisher: personalInfo.name,
  alternates: {
    canonical: "/",
  },
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
    apple: [{ url: "/icon.svg" }],
  },
  openGraph: {
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: siteConfig.seo.ogDescription,
    type: "website",
    url: siteConfig.siteUrl,
    siteName: siteConfig.siteName,
    locale: siteConfig.locale,
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Akash Anand portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: siteConfig.seo.twitterDescription,
    images: [siteConfig.defaultOgImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f7fb" },
    { media: "(prefers-color-scheme: dark)", color: "#08101d" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full scroll-smooth antialiased"
    >
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
        >{`(() => {
  const storageKey = "portfolio-theme";
  const savedTheme = window.localStorage.getItem(storageKey);
  const resolvedTheme =
    savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
  document.documentElement.dataset.theme = resolvedTheme;
})();`}</Script>
      </head>
      <body className="min-h-full bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[var(--color-accent)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
