import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/forms/contact-form";
import { Navbar } from "@/components/navigation/navbar";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ResumeSection } from "@/components/sections/resume-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { personalInfo, siteConfig } from "@/data";

export const metadata: Metadata = {
  title: "Akash Anand",
  description: siteConfig.seo.defaultDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: siteConfig.seo.ogDescription,
    url: siteConfig.siteUrl,
    images: [siteConfig.defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: siteConfig.seo.twitterDescription,
    images: [siteConfig.defaultOgImage],
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[radial-gradient(circle_at_top,_rgba(28,99,194,0.18),_transparent_35%),linear-gradient(180deg,var(--color-bg),var(--color-bg-elevated))]">
      <Navbar />
      <main
        id="main-content"
        className="mx-auto flex w-full max-w-7xl flex-col px-4 pb-10 sm:px-6 lg:px-8"
      >
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ResumeSection />
        <ContactSection>
          <ContactForm email={personalInfo.contact.email} />
        </ContactSection>
      </main>
      <Footer />
    </div>
  );
}
