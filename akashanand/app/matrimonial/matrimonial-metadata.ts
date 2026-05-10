import type { Metadata } from "next";
import { siteConfig } from "@/data";
import type { MatrimonialLocale } from "@/data/matrimonial-locales";

export function buildMatrimonialMetadata(locale: MatrimonialLocale): Metadata {
  if (locale === "pa") {
    return {
      title: "ਵਿਆਹ ਯੋਗ ਪ੍ਰੋਫ਼ਾਈਲ",
      description:
        "ਆਕਾਸ਼ ਆਨੰਦ ਲਈ ਨਿੱਜੀ ਵਿਆਹ ਯੋਗ ਪ੍ਰੋਫ਼ਾਈਲ — ਵੀਜ਼ਾ ਵਿੱਚ ਸੀਨੀਅਰ ਸਾਫਟਵੇਅਰ ਇੰਜੀਨੀਅਰ, ਓਸਟਿਨ, ਟੈਕਸਾਸ।",
      alternates: {
        canonical: "/matrimonial/punjabi",
        languages: {
          en: `${siteConfig.siteUrl}/matrimonial`,
          pa: `${siteConfig.siteUrl}/matrimonial/punjabi`,
        },
      },
      robots: {
        index: false,
        follow: false,
        googleBot: { index: false, follow: false },
      },
      openGraph: {
        title: "ਵਿਆਹ ਯੋਗ ਪ੍ਰੋਫ਼ਾਈਲ | ਆਕਾਸ਼ ਆਨੰਦ",
        description:
          "ਆਕਾਸ਼ ਆਨੰਦ ਲਈ ਨਿੱਜੀ ਵਿਆਹ ਯੋਗ ਪ੍ਰੋਫ਼ਾਈਲ — ਵੀਜ਼ਾ ਵਿੱਚ ਸੀਨੀਅਰ ਸਾਫਟਵੇਅਰ ਇੰਜੀਨੀਅਰ, ਓਸਟਿਨ, ਟੈਕਸਾਸ।",
        url: `${siteConfig.siteUrl}/matrimonial/punjabi`,
        images: [siteConfig.defaultOgImage],
      },
    };
  }

  return {
    title: "Matrimonial Profile",
    description:
      "Private matrimonial profile for Akash Anand, Senior Software Engineer based in Austin, Texas.",
    alternates: {
      canonical: "/matrimonial",
      languages: {
        en: `${siteConfig.siteUrl}/matrimonial`,
        pa: `${siteConfig.siteUrl}/matrimonial/punjabi`,
      },
    },
    robots: {
      index: false,
      follow: false,
      googleBot: { index: false, follow: false },
    },
    openGraph: {
      title: "Matrimonial Profile | Akash Anand",
      description:
        "Private matrimonial profile for Akash Anand, Senior Software Engineer based in Austin, Texas.",
      url: `${siteConfig.siteUrl}/matrimonial`,
      images: [siteConfig.defaultOgImage],
    },
  };
}
