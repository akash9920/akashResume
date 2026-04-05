export type NavigationItem = {
  label: string;
  href: string;
  id: string;
};

export type HeroStat = {
  label: string;
  value: string;
};

export type HeroCredibility = {
  domains: string[];
  highlights: string[];
};

export type QuickFact = {
  label: string;
  value: string;
};

export type AboutContent = {
  intro: string;
  summary: string;
  quickFacts: QuickFact[];
};

export type ContactInfo = {
  email: string;
  location: string;
  availability: string;
  invite: string;
};

export type ResumeHighlight = {
  title: string;
  description: string;
};

export type ResumeContent = {
  file: string;
  highlights: ResumeHighlight[];
};

export type PersonalInfo = {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  shortFooterBlurb: string;
  contact: ContactInfo;
  heroStats: HeroStat[];
  heroCredibility: HeroCredibility;
  about: AboutContent;
  resume: ResumeContent;
};

export type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  stack: string[];
};

export type ProjectItem = {
  name: string;
  featured: boolean;
  category: string;
  summary: string;
  impact: string;
  stack: string[];
  githubUrl: string;
  demoUrl?: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type SocialLink = {
  label: string;
  href: string;
  value: string;
};
