import Image from "next/image";
import Link from "next/link";
import { Noto_Sans_Gurmukhi } from "next/font/google";
import { Reveal } from "@/components/ui/reveal";
import {
  getMatrimonialBundle,
  type MatrimonialLocale,
} from "@/data/matrimonial-locales";
import { PhotoSlideshow, type SlideshowSlide } from "./photo-slideshow";
import galleryScreenshot from "./images/gallery-screenshot.png";
import img0800 from "./images/IMG_0800.jpeg";
import img8055 from "./images/IMG_8055.jpeg";
import img9417 from "./images/IMG_9417.jpeg";
import img9866 from "./images/IMG_9866.jpeg";
import profilePic from "./images/profilePic.png";
import type { ReactNode } from "react";

const gurmukhi = Noto_Sans_Gurmukhi({
  subsets: ["gurmukhi"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const slideshowSources: Omit<SlideshowSlide, "label">[] = [
  {
    src: profilePic,
    alt: "Akash Anand profile photo",
    position: "object-top",
  },
  {
    src: galleryScreenshot,
    alt: "Akash Anand — additional photo",
    position: "object-top",
  },
  {
    src: img0800,
    alt: "Akash Anand outdoor photo",
    position: "object-center",
  },
  {
    src: img8055,
    alt: "Akash Anand casual moment",
    position: "object-center",
  },
  {
    src: img9417,
    alt: "Akash Anand portrait",
    position: "object-top",
  },
  {
    src: img9866,
    alt: "Akash Anand lifestyle photo",
    position: "object-center",
  },
];

function SectionCard({
  title,
  eyebrow,
  children,
  className = "",
}: {
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-2xl border border-[#e9dccf]/80 bg-[#fffdf9]/95 p-4 shadow-[0_18px_55px_rgba(86,59,42,0.08)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(86,59,42,0.11)] sm:rounded-[1.75rem] sm:p-6 md:p-7 ${className}`}
    >
      {eyebrow ? (
        <p className="text-xs font-medium text-[#715c51]">{eyebrow}</p>
      ) : null}
      <h2 className="mt-1.5 text-lg font-semibold tracking-tight text-[#2b211c] sm:mt-2 sm:text-xl md:text-2xl">
        {title}
      </h2>
      <div className="mt-4 sm:mt-5">{children}</div>
    </section>
  );
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-[#eadfd4] bg-[#fffaf5] px-2.5 py-1.5 text-xs font-semibold text-[#47362e] shadow-[0_6px_18px_rgba(86,59,42,0.05)] sm:px-3 sm:py-2 sm:text-sm">
      {children}
    </span>
  );
}

export function MatrimonialPageContent({ locale }: { locale: MatrimonialLocale }) {
  const bundle = getMatrimonialBundle(locale);
  const { profile, ui } = bundle;

  const slideshowSlides: SlideshowSlide[] = slideshowSources.map((slide, i) => ({
    ...slide,
    label: ui.photoSlideLabels[i] ?? slide.alt,
  }));

  const aboutMoments = [
    {
      title: ui.aboutMomentTitles.personality,
      text: profile.about[0],
    },
    {
      title: ui.aboutMomentTitles.academic,
      text: `${profile.about[1]} ${profile.about[2]}`,
    },
    {
      title: ui.aboutMomentTitles.lifestyle,
      text: profile.about[3],
    },
  ];

  const rootClass =
    locale === "pa"
      ? `${gurmukhi.className} min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(214,175,119,0.22),transparent_32%),linear-gradient(180deg,#fff8ee_0%,#fffdf8_38%,#f7fbf8_100%)] text-[#332722]`
      : "min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(214,175,119,0.22),transparent_32%),linear-gradient(180deg,#fff8ee_0%,#fffdf8_38%,#f7fbf8_100%)] text-[#332722]";

  return (
    <main
      id="main-content"
      lang={locale === "pa" ? "pa" : "en"}
      className={`${rootClass} overflow-x-clip`}
    >
      <header className="sticky top-0 z-50 border-b border-[#eadfd4]/80 bg-[#fffdf9]/92 pt-[env(safe-area-inset-top,0px)] shadow-[0_8px_30px_rgba(86,59,42,0.06)] backdrop-blur-xl supports-[backdrop-filter]:bg-[#fffdf9]/88">
        <div className="mx-auto flex max-w-6xl min-w-0 flex-col gap-3 py-2.5 pl-[max(0.75rem,env(safe-area-inset-left,0px))] pr-[max(0.75rem,env(safe-area-inset-right,0px))] sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-3 sm:gap-y-2 sm:py-3 md:pl-[max(1rem,env(safe-area-inset-left,0px))] md:pr-[max(1rem,env(safe-area-inset-right,0px))] lg:pl-[max(1.5rem,env(safe-area-inset-left,0px))] lg:pr-[max(1.5rem,env(safe-area-inset-right,0px))] xl:pl-8 xl:pr-8">
          <div className="flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-[#eadfd4] bg-[#f6eee7] sm:h-11 sm:w-11 md:h-12 md:w-12">
              <Image
                src={profilePic}
                alt="Akash Anand profile photo"
                fill
                sizes="(max-width: 640px) 40px, 48px"
                className="object-cover object-top"
              />
            </div>
            <div className="min-w-0 flex-1 self-center">
              <p className="text-sm font-semibold leading-tight text-[#2b211c] sm:text-base">
                {profile.name}
              </p>
            </div>
          </div>
          <div className="grid w-full min-w-0 grid-cols-2 gap-2 sm:flex sm:w-auto sm:shrink-0 sm:justify-end">
            <Link
              href={ui.otherLocalePath}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#c8e6d8] bg-[#f4fbf7] px-3 text-center text-sm font-semibold text-[#1f5c4a] shadow-sm transition hover:border-[#4b8f86] hover:bg-white sm:min-h-0 sm:px-4 sm:py-2"
            >
              {ui.otherLocaleLabel}
            </Link>
            <Link
              href="/"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#d8c7b9] bg-white px-3 text-center text-sm font-semibold text-[#5e4436] shadow-sm transition hover:border-[#9b6a4d] hover:text-[#2b211c] sm:min-h-0 sm:px-4 sm:py-2"
            >
              {ui.professionalSite}
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto min-w-0 max-w-6xl py-5 pb-[max(1.25rem,env(safe-area-inset-bottom,0px))] pl-[max(0.75rem,env(safe-area-inset-left,0px))] pr-[max(0.75rem,env(safe-area-inset-right,0px))] sm:py-7 md:py-8 md:pl-[max(1rem,env(safe-area-inset-left,0px))] md:pr-[max(1rem,env(safe-area-inset-right,0px))] lg:py-9 lg:pl-[max(1.5rem,env(safe-area-inset-left,0px))] lg:pr-[max(1.5rem,env(safe-area-inset-right,0px))] xl:pl-8 xl:pr-8">
        <section className="grid min-w-0 gap-5 sm:gap-6 min-[900px]:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] min-[900px]:items-start min-[900px]:gap-8">
          <div
            id="photos"
            className="order-1 min-w-0 scroll-mt-[max(5.25rem,env(safe-area-inset-top,0px)+4.25rem)] sm:scroll-mt-28 md:scroll-mt-32 min-[900px]:order-2"
          >
            <PhotoSlideshow slides={slideshowSlides} />
          </div>

          <Reveal className="order-2 min-w-0 min-[900px]:order-1">
            <div className="rounded-2xl border border-[#e9dccf]/80 bg-[linear-gradient(145deg,#fffdf9,#fff6ea)] p-4 shadow-[0_28px_90px_rgba(86,59,42,0.12)] sm:rounded-[2rem] sm:p-6 md:p-8 lg:rounded-[2.25rem] lg:p-10">
              <p className="text-xs font-medium text-[#715c51] sm:text-sm">{ui.heroEyebrow}</p>
              <h1 className="mt-2 text-[clamp(1.75rem,5.5vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.04em] text-[#2b211c] sm:mt-3">
                {profile.name}
              </h1>
              <p className="mt-2 break-words text-pretty text-base font-medium leading-snug text-[#5e4436] sm:mt-3 sm:text-lg">
                {profile.coreDetails[0].value} · {profile.coreDetails[1].value} ·{" "}
                {profile.coreDetails[2].value} · {profile.coreDetails[3].value}
              </p>
              <p className="mt-2 break-words text-pretty text-xs leading-relaxed text-[#715c51] sm:text-sm">
                {profile.coreDetails[4].value} · {profile.coreDetails[5].value} ·{" "}
                {profile.coreDetails[6].value} · {ui.grewUpPrefix}{" "}
                {profile.coreDetails[7].value}
              </p>
              <p className="mt-2 break-words text-pretty text-sm leading-relaxed text-[#715c51] sm:text-base">
                {profile.headline}
              </p>
              <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-[#5e4d44] sm:mt-5 sm:text-base sm:leading-8">
                {profile.intro}
              </p>

              <blockquote className="mt-5 rounded-2xl border-l-4 border-[#b88a52] bg-white/62 px-4 py-3 text-sm leading-relaxed text-[#5a463b] shadow-[0_10px_34px_rgba(86,59,42,0.05)] sm:mt-6 sm:rounded-3xl sm:px-5 sm:py-4 sm:text-base sm:leading-7">
                {ui.quote}
              </blockquote>

              <div className="mt-5 grid grid-cols-1 gap-2 min-[380px]:grid-cols-3 sm:mt-6 sm:gap-3">
                {ui.heroStats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl bg-[#fff8ef] px-3 py-3 ring-1 ring-[#f0e0d2] sm:px-4 sm:py-4"
                  >
                    <p className="text-[11px] font-medium text-[#715c51] sm:text-xs">{item.label}</p>
                    <p className="mt-1 text-sm text-[#2b211c] sm:mt-2">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <div className="mt-6 grid min-w-0 gap-6 sm:mt-8 sm:gap-8 md:grid-cols-2 md:gap-7 lg:grid-cols-[1.12fr_0.88fr] lg:gap-8">
          <Reveal>
            <SectionCard title={ui.aboutTitle}>
              <div className="grid gap-4">
                {aboutMoments.map((moment) => (
                  <article
                    key={moment.title}
                    className="rounded-2xl bg-[#fff8ef]/82 px-3 py-3 ring-1 ring-[#f0e0d2]/80 sm:px-4 sm:py-4"
                  >
                    <h3 className="text-sm font-semibold text-[#76513c]">
                      {moment.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5e4d44] sm:leading-7">{moment.text}</p>
                  </article>
                ))}
              </div>
            </SectionCard>
          </Reveal>

          <Reveal delayMs={80}>
            <SectionCard title={ui.educationCareerTitle}>
              <div className="relative space-y-3 pl-4 before:absolute before:bottom-3 before:left-[5px] before:top-3 before:w-px before:bg-[#d8c7b9] sm:space-y-4 sm:pl-5 sm:before:bottom-4 sm:before:left-1.5 sm:before:top-4">
                {profile.educationCareer.map((item) => (
                  <div
                    key={item.label}
                    className="relative rounded-2xl bg-[#f7fbfb] px-3 py-3 ring-1 ring-[#dbeceb] sm:px-4 sm:py-4"
                  >
                    <span className="absolute -left-[1.15rem] top-[1.15rem] h-2.5 w-2.5 rounded-full border-2 border-white bg-[#4b8f86] shadow-sm sm:-left-[1.35rem] sm:top-5 sm:h-3 sm:w-3" />
                    <p className="text-xs font-medium text-[#2f6e68]">{item.label}</p>
                    <p className="mt-2 text-sm leading-7 text-[#465c59]">{item.value}</p>
                  </div>
                ))}
              </div>
            </SectionCard>
          </Reveal>
        </div>

        <div className="mt-6 grid min-w-0 gap-6 sm:mt-8 sm:gap-8 md:grid-cols-2">
          <Reveal>
            <SectionCard title={ui.lifestyleSectionTitle}>
              <p className="max-w-prose text-sm leading-relaxed text-[#715c51] sm:leading-7">{ui.lifestyleIntro}</p>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:mt-5 md:grid-cols-2">
                {ui.interestGroups.map((group) => (
                  <article
                    key={group.title}
                    className="rounded-2xl bg-[#fff8ef]/82 p-4 ring-1 ring-[#f0e0d2]/80"
                  >
                    <h3 className="text-sm font-semibold text-[#76513c]">{group.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((interest) => (
                        <Chip key={interest}>{interest}</Chip>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </SectionCard>
          </Reveal>

          <Reveal delayMs={80}>
            <SectionCard title={ui.relationshipSectionTitle}>
              <blockquote className="rounded-2xl bg-[#f7fbfb] px-3 py-3 text-sm leading-relaxed text-[#465c59] ring-1 ring-[#dbeceb] sm:px-4 sm:py-4 sm:leading-7">
                {ui.relationshipQuote}
              </blockquote>
              <div className="mt-5 flex flex-wrap gap-2">
                {profile.values.map((value) => (
                  <Chip key={value}>{value}</Chip>
                ))}
              </div>
            </SectionCard>
          </Reveal>
        </div>

        <div className="mt-6 grid min-w-0 gap-6 sm:mt-8 sm:gap-8 md:grid-cols-2 md:gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
          <Reveal>
            <SectionCard title={ui.familyTitle}>
              <p className="mb-4 text-sm leading-relaxed text-[#5e4d44] sm:mb-6">{ui.familyIntro}</p>
              <div className="divide-y divide-[#eadfd4]/90 rounded-2xl border border-[#eadfd4]/80 bg-[#fffdf9] px-3 py-1 sm:px-5">
                {profile.family.map((item) => (
                  <div key={item.label} className="py-4 first:pt-3 last:pb-3">
                    <p className="text-sm font-medium text-[#2b211c]">{item.label}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#5e4d44]">{item.value}</p>
                  </div>
                ))}
              </div>
            </SectionCard>
          </Reveal>

          <Reveal delayMs={80}>
            <SectionCard title={ui.partnerTitle}>
              <p className="text-sm leading-relaxed text-pretty text-[#5e4d44]">{profile.about[4]}</p>
            </SectionCard>
          </Reveal>
        </div>

        <Reveal>
          <section
            id="footer-actions"
            className="mt-6 overflow-hidden rounded-2xl border border-[#d8c7b9]/80 bg-[linear-gradient(135deg,#3a2a22,#76513c_52%,#4b8f86)] p-4 text-white shadow-[0_30px_90px_rgba(86,59,42,0.2)] sm:mt-8 sm:rounded-[2rem] sm:p-6 md:p-8"
          >
            <div className="mx-auto grid min-w-0 gap-6 md:grid-cols-2 md:items-start md:gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
              <div className="min-w-0">
                <p className="text-xs font-medium text-[#f3d7bd] sm:text-sm">{ui.footerEyebrow}</p>
                <h2 className="mt-2 text-pretty text-2xl font-semibold tracking-tight text-white sm:mt-3 sm:text-3xl">
                  {ui.footerTitle}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#f8e8dc] sm:mt-4 sm:leading-7">
                  {ui.footerBody}
                </p>
                <p className="mt-3 break-all text-xs leading-relaxed text-[#e8d5c8] sm:break-words sm:text-sm">
                  {profile.contactEmail}
                </p>
              </div>
              <div className="grid min-w-0 auto-rows-min grid-cols-1 gap-2.5 min-[480px]:grid-cols-2 sm:gap-3">
                <a
                  href={`mailto:${profile.contactEmail}`}
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#76513c] px-4 py-3.5 text-center text-sm font-semibold text-white shadow-md transition hover:bg-[#5f3f2e] sm:px-5"
                >
                  {ui.connectEmail}
                </a>
                <a
                  href={profile.biodataUrl}
                  download="akash-anand-biodata.pdf"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[#d8c7b9] bg-[#fff8ef] px-4 py-3.5 text-center text-sm font-semibold text-[#5e4436] transition hover:border-[#9b6a4d] hover:bg-white sm:px-5"
                >
                  {ui.downloadBiodata}
                </a>
                <a
                  href={profile.linkedInUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[#cddfde] bg-[#f7fbfb] px-4 py-3.5 text-center text-sm font-semibold text-[#2f6e68] transition hover:border-[#4b8f86] hover:bg-white sm:px-5"
                >
                  {ui.linkedInProfile}
                </a>
                <a
                  href="#photos"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[#d8c7b9] bg-white px-4 py-3.5 text-center text-sm font-semibold text-[#5e4436] transition hover:border-[#9b6a4d] hover:bg-[#fff8ef] sm:px-5"
                >
                  {ui.viewPhotos}
                </a>
                <Link
                  href="/"
                  className="col-span-full inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/35 bg-white/10 px-4 py-3.5 text-center text-sm font-semibold text-white backdrop-blur transition hover:bg-white/18 sm:px-5"
                >
                  {ui.professionalProfile}
                </Link>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </main>
  );
}
