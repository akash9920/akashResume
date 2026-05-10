import { personalInfo } from "@/data/personal";
import { socialLinks } from "@/data/social-links";

export const matrimonialBiodataPath = "/matrimonial/biodata";

export type MatrimonialLocale = "en" | "pa";

export type MatrimonialProfileData = {
  name: string;
  headline: string;
  intro: string;
  contactEmail: string;
  biodataUrl: string;
  linkedInUrl: string;
  linkedInDisplay: string;
  coreDetails: { label: string; value: string }[];
  educationCareer: { label: string; value: string }[];
  about: string[];
  family: { label: string; value: string }[];
  interests: string[];
  values: string[];
};

export type MatrimonialUiStrings = {
  mainLang: string;
  otherLocalePath: string;
  otherLocaleLabel: string;
  heroEyebrow: string;
  grewUpPrefix: string;
  quote: string;
  professionalSite: string;
  connectEmail: string;
  downloadBiodata: string;
  linkedInProfile: string;
  viewPhotos: string;
  aboutTitle: string;
  educationCareerTitle: string;
  lifestyleSectionTitle: string;
  lifestyleIntro: string;
  relationshipSectionTitle: string;
  relationshipQuote: string;
  familyTitle: string;
  familyIntro: string;
  partnerTitle: string;
  footerEyebrow: string;
  footerTitle: string;
  footerBody: string;
  professionalProfile: string;
  heroStats: { label: string; value: string }[];
  aboutMomentTitles: {
    personality: string;
    academic: string;
    lifestyle: string;
  };
  interestGroups: { title: string; items: string[] }[];
  photoSlideLabels: string[];
};

export type MatrimonialBundle = {
  locale: MatrimonialLocale;
  profile: MatrimonialProfileData;
  ui: MatrimonialUiStrings;
};

const linkedInUrl =
  socialLinks.find((l) => l.label === "LinkedIn")?.href ??
  "https://www.linkedin.com/in/anand-akash";
const linkedInDisplay =
  socialLinks.find((l) => l.label === "LinkedIn")?.value ??
  "linkedin.com/in/anand-akash";

const sharedContact = {
  contactEmail: personalInfo.contact.email,
  biodataUrl: matrimonialBiodataPath,
  linkedInUrl,
  linkedInDisplay,
  name: "Akash Anand",
};

const enProfile: MatrimonialProfileData = {
  ...sharedContact,
  headline: "Senior Software Engineer at Visa, based in Austin, Texas.",
  intro:
    "Thoughtful and well-rounded, with a wide range of interests — he values meaningful conversation and a relationship that grows slowly and deeply over time.",
  coreDetails: [
    { label: "Age", value: "33 yrs" },
    { label: "Height", value: "5' 11\"" },
    { label: "Location", value: "Austin, Texas" },
    { label: "Marital status", value: "Never married" },
    { label: "Language", value: "Hindi" },
    { label: "Religion", value: "Hindu" },
    { label: "Zodiac", value: "Sagittarius" },
    { label: "Grew up in", value: "India" },
  ],
  educationCareer: [
    {
      label: "Education",
      value:
        "M.S. in Engineering; Bachelor's from IIT BHU Varanasi, 2014.",
    },
    {
      label: "Profession",
      value: "Senior Software Engineer / Software Developer at Visa.",
    },
    {
      label: "USA status",
      value: "I-140 approved under EB2.",
    },
  ],
  about: [
    "We are seeking a kind and genuine partner for our son, Akash Anand. He is currently working as a Senior Software Engineer in the USA and has an I-140 approved under EB2.",
    "Akash has been studious and intelligent since childhood. He cracked IIT JEE, studied at IIT BHU Varanasi, and completed his Bachelor's in 2014.",
    "He later moved to the United States for higher education, completed his Master's in Engineering, and continued building his career there.",
    "Akash is a thoughtful and well-rounded individual with a wide range of interests. He enjoys basketball, science, cooking, traveling, and music jam sessions. He values meaningful conversations and is looking to build a relationship that grows slowly and deeply over time.",
    "We are looking for someone with whom Akash can form a connection based on trust, open communication, honesty, consistency, shared values, and mutual respect. He believes that the foundation of a healthy relationship lies in sincere efforts, quality time, and kindness.",
  ],
  family: [
    {
      label: "Family",
      value:
        "Close-knit and values-oriented family originally from Delhi, currently residing in Preet Vihar.",
    },
    {
      label: "Father",
      value:
        "Retired government servant; formerly with the Indian Police and Indian Air Force.",
    },
    {
      label: "Mother",
      value: "Retired government servant and school principal.",
    },
    {
      label: "Sister",
      value: "Married and successfully managing her own business in Delhi.",
    },
    {
      label: "Extended family",
      value:
        "Our wider family is a warm circle of well-educated relatives. Among uncles and aunts you will find engineers, teachers, and others who have chosen thoughtful professions; we also have doctors and many family members who have studied and worked with care and dedication. It is a background we are quietly grateful for—grounded in education, mutual respect, and simple goodwill.",
    },
  ],
  interests: [
    "Gym",
    "Pickleball",
    "Basketball",
    "Science",
    "Cooking",
    "Travel",
    "Music jam sessions",
    "Deep conversations",
  ],
  values: [
    "Trust",
    "Open communication",
    "Honesty",
    "Consistency",
    "Shared values",
    "Mutual respect",
    "Quality time",
    "Kindness",
  ],
};

const paProfile: MatrimonialProfileData = {
  ...sharedContact,
  headline:
    "ਵੀਜ਼ਾ ਵਿੱਚ ਸੀਨੀਅਰ ਸਾਫਟਵੇਅਰ ਇੰਜੀਨੀਅਰ, ਓਸਟਿਨ, ਟੈਕਸਾਸ ਅਧਾਰਤ।",
  intro:
    "ਆਕਾਸ਼ ਸੋਚਵਾਨ ਅਤੇ ਕਈ ਦਿਲਚਸਪੀਆਂ ਵਾਲਾ ਨੌਜਵਾਨ ਹੈ — ਉਹ ਡੂੰਘੀਆਂ ਗੱਲਬਾਤਾਂ ਅਤੇ ਇੱਕ ਅਜਿਹੇ ਰਿਸ਼ਤੇ ਨੂੰ ਮਹੱਤਵ ਦਿੰਦਾ ਹੈ ਜੋ ਹੌਲੀ ਹੌਲੀ ਅਤੇ ਈਮਾਨਦਾਰੀ ਨਾਲ ਵਧੇ।",
  coreDetails: [
    { label: "ਉਮਰ", value: "33 ਸਾਲ" },
    { label: "ਕੱਦ", value: "5' 11\"" },
    { label: "ਥਾਂ", value: "ਓਸਟਿਨ, ਟੈਕਸਾਸ" },
    { label: "ਵਿਆਹ ਦੀ ਹਾਲਤ", value: "ਕੁਵਾਰਾ" },
    { label: "ਭਾਸ਼ਾ", value: "ਹਿੰਦੀ" },
    { label: "ਧਰਮ", value: "ਹਿੰਦੂ" },
    { label: "ਰਾਸ਼ੀ", value: "ਧਨੁ" },
    { label: "ਵੱਡਾ ਹੋਇਆ", value: "ਭਾਰਤ" },
  ],
  educationCareer: [
    {
      label: "ਸਿੱਖਿਆ",
      value:
        "ਇੰਜੀਨੀਅਰਿੰਗ ਵਿੱਚ ਐਮ.ਐਸ.; ਆਈ.ਆਈ.ਟੀ ਬੀ.ਐਚ.ਯੂ ਵਾਰਾਣਸੀ ਤੋਂ ਬੈਚਲਰ, 2014।",
    },
    {
      label: "ਪੇਸ਼ਾ",
      value: "ਵੀਜ਼ਾ ਵਿੱਚ ਸੀਨੀਅਰ ਸਾਫਟਵੇਅਰ ਇੰਜੀਨੀਅਰ / ਸਾਫਟਵੇਅਰ ਡਿਵੈਲਪਰ।",
    },
    {
      label: "ਅਮਰੀਕਾ ਸਥਿਤੀ",
      value: "ਈਬੀ-2 ਹੇਠ ਆਈ-140 ਮਨਜ਼ੂਰ।",
    },
  ],
  about: [
    "ਅਸੀਂ ਆਪਣੇ ਪੁੱਤਰ ਆਕਾਸ਼ ਆਨੰਦ ਲਈ ਇੱਕ ਚੰਗੇ ਅਤੇ ਸੱਚੇ ਜੀਵਨਸਾਥੀ ਦੀ ਭਾਲ ਕਰ ਰਹੇ ਹਾਂ। ਉਹ ਇਸ ਵੇਲੇ ਅਮਰੀਕਾ ਵਿੱਚ ਸੀਨੀਅਰ ਸਾਫਟਵੇਅਰ ਇੰਜੀਨੀਅਰ ਵਜੋਂ ਕੰਮ ਕਰ ਰਿਹਾ ਹੈ ਅਤੇ ਉਸਦਾ ਈਬੀ-2 ਹੇਠ ਆਈ-140 ਮਨਜ਼ੂਰ ਹੈ।",
    "ਬਚਪਨ ਤੋਂ ਹੀ ਆਕਾਸ਼ ਪੜ੍ਹਾਈ ਵਿੱਚ ਹੁਸ਼ਿਆਰ ਅਤੇ ਸਮਝਦਾਰ ਰਿਹਾ ਹੈ। ਉਸ ਨੇ ਆਈ.ਆਈ.ਟੀ ਜੇ.ਈ.ਈ ਪਾਸ ਕੀਤਾ, ਆਈ.ਆਈ.ਟੀ ਬੀ.ਐਚ.ਯੂ ਵਾਰਾਣਸੀ ਵਿੱਚ ਪੜ੍ਹਿਆ ਅਤੇ 2014 ਵਿੱਚ ਬੈਚਲਰ ਪੂਰਾ ਕੀਤਾ।",
    "ਉਸ ਨੇ ਉੱਚ ਸਿੱਖਿਆ ਲਈ ਸੰਯੁਕਤ ਰਾਜ ਅਮਰੀਕਾ ਜਾਣਾ ਚੁਣਿਆ, ਇੰਜੀਨੀਅਰਿੰਗ ਵਿੱਚ ਮਾਸਟਰਜ਼ ਪੂਰੇ ਕੀਤੇ ਅਤੇ ਉੱਥੇ ਹੀ ਆਪਣਾ ਕਰੀਅਰ ਬਣਾਇਆ।",
    "ਆਕਾਸ਼ ਸੋਚਵਾਨ ਅਤੇ ਕਈ ਪਾਸਿਆਂ ਵਾਲਾ ਨੌਜਵਾਨ ਹੈ। ਉਹ ਬਾਸਕਟਬਾਲ, ਵਿਗਿਆਨ, ਖਾਣਾ ਬਣਾਉਣਾ, ਯਾਤਰਾ ਅਤੇ ਸੰਗੀਤ ਦੇ ਸੈਸ਼ਨਾਂ ਦਾ ਆਨੰਦ ਮਾਣਦਾ ਹੈ। ਉਹ ਡੂੰਘੀਆਂ ਗੱਲਬਾਤਾਂ ਨੂੰ ਮਹੱਤਵ ਦਿੰਦਾ ਹੈ ਅਤੇ ਅਜਿਹਾ ਰਿਸ਼ਤਾ ਬਣਾਉਣਾ ਚਾਹੁੰਦਾ ਹੈ ਜੋ ਸਮੇਂ ਨਾਲ ਹੌਲੀ ਹੌਲੀ ਅਤੇ ਡੂੰਘਾਈ ਨਾਲ ਵਧੇ।",
    "ਅਸੀਂ ਅਜਿਹੇ ਕਿਸੇ ਨਾਲ ਜੁੜਨ ਦੀ ਉਮੀਦ ਕਰਦੇ ਹਾਂ ਜਿਸ ਨਾਲ ਆਕਾਸ਼ ਭਰੋਸੇ, ਖੁੱਲ੍ਹੀ ਗੱਲਬਾਤ, ਈਮਾਨਦਾਰੀ, ਲਗਾਤਾਰਤਾ, ਸਾਂਝੀਆਂ ਕਦਰਾਂ ਅਤੇ ਆਪਸੀ ਇੱਜ਼ਤ ਉੱਤੇ ਆਧਾਰਿਤ ਰਿਸ਼ਤਾ ਬਣਾ ਸਕੇ। ਉਹ ਮੰਨਦਾ ਹੈ ਕਿ ਸਿਹਤਮੰਦ ਰਿਸ਼ਤੇ ਦੀ ਨੀਂਹ ਸੱਚੀ ਕੋਸ਼ਿਸ਼, ਗੁਣਵੱਤਾ ਵਾਲਾ ਸਮਾਂ ਅਤੇ ਦਿਆਲਤਾ ਵਿੱਚ ਹੈ।",
  ],
  family: [
    {
      label: "ਪਰਿਵਾਰ",
      value:
        "ਇੱਕ ਨੇੜੇ ਅਤੇ ਕਦਰਾਂ-ਕੀਮਤਾਂ ਵਾਲਾ ਪਰਿਵਾਰ, ਮੂਲ ਤੌਰ 'ਤੇ ਦਿੱਲੀ ਦਾ, ਇਸ ਵੇਲੇ ਪ੍ਰੀਤ ਵਿਹਾਰ ਵਿੱਚ ਰਿਹਾਇਸ਼।",
    },
    {
      label: "ਪਿਤਾ ਜੀ",
      value:
        "ਸਰਕਾਰੀ ਸੇਵਾ ਤੋਂ ਸੇਵਾਮੁਕਤ; ਪਹਿਲਾਂ ਭਾਰਤੀ ਪੁਲਿਸ ਅਤੇ ਭਾਰਤੀ ਹਵਾਈ ਫ਼ੋਜ਼ ਨਾਲ ਸੰਬੰਧਿਤ।",
    },
    {
      label: "ਮਾਤਾ ਜੀ",
      value: "ਸਰਕਾਰੀ ਸੇਵਾ ਤੋਂ ਸੇਵਾਮੁਕਤ ਅਤੇ ਸਕੂਲ ਪ੍ਰਿੰਸੀਪਲ।",
    },
    {
      label: "ਭੈਣ",
      value: "ਵਿਆਹਿਆ; ਦਿੱਲੀ ਵਿੱਚ ਆਪਣਾ ਕਾਰੋਬਾਰ ਸਫਲਤਾਪੂਰਵਕ ਚਲਾ ਰਹੀ ਹੈ।",
    },
    {
      label: "ਵਿਸਤ੍ਰਿਤ ਪਰਿਵਾਰ",
      value:
        "ਸਾਡਾ ਵੱਡਾ ਪਰਿਵਾਰ ਵਿਦਿਆ ਅਤੇ ਨੇਕੀ ਨਾਲ ਜੁੜੇ ਰਿਸ਼ਤੇਦਾਰਾਂ ਦਾ ਇੱਕ ਨਰਮ ਘੇਰਾ ਹੈ। ਚਾਚੇ-ਤਾਏ ਅਤੇ ਭੂਆਂ-ਮਾਸੀਆਂ ਵਿੱਚ ਇੰਜੀਨੀਅਰ, ਅਧਿਆਪਕ ਅਤੇ ਹੋਰ ਸੋਚਵਾਨ ਪੇਸ਼ੇ ਵਾਲੇ ਲੋਕ ਹਨ; ਡਾਕਟਰ ਅਤੇ ਕਈ ਹੋਰ ਰਿਸ਼ਤੇਦਾਰ ਵੀ ਹਨ ਜਿਨ੍ਹਾਂ ਨੇ ਮਿਹਨਤ ਅਤੇ ਲਗਨ ਨਾਲ ਪੜ੍ਹਾਈ ਤੇ ਕੰਮ ਕੀਤਾ। ਇਹ ਸਿੱਖਿਆ, ਆਪਸੀ ਇੱਜ਼ਤ ਅਤੇ ਸਾਦੀ ਭਲਾਈਸ਼ ਨਾਲ ਜੁੜਿਆ ਪਿਛੋਕੜ ਹੈ, ਜਿਸ ਲਈ ਅਸੀਂ ਧੰਨਵਾਦੀ ਹਾਂ।",
    },
  ],
  interests: [
    "ਜਿਮ",
    "ਪਿਕਲਬਾਲ",
    "ਬਾਸਕਟਬਾਲ",
    "ਵਿਗਿਆਨ",
    "ਖਾਣਾ ਬਣਾਉਣਾ",
    "ਯਾਤਰਾ",
    "ਸੰਗੀਤ ਸੈਸ਼ਨ",
    "ਡੂੰਘੀਆਂ ਗੱਲਾਂ",
  ],
  values: [
    "ਭਰੋਸਾ",
    "ਖੁੱਲ੍ਹੀ ਗੱਲਬਾਤ",
    "ਈਮਾਨਦਾਰੀ",
    "ਲਗਾਤਾਰਤਾ",
    "ਸਾਂਝੀਆਂ ਕਦਰਾਂ",
    "ਆਪਸੀ ਇੱਜ਼ਤ",
    "ਗੁਣਵੱਤਾ ਵਾਲਾ ਸਮਾਂ",
    "ਦਿਆਲਤਾ",
  ],
};

const enUi: MatrimonialUiStrings = {
  mainLang: "en",
  otherLocalePath: "/matrimonial/punjabi",
  otherLocaleLabel: "ਪੰਜਾਬੀ",
  heroEyebrow: "Matrimonial profile",
  grewUpPrefix: "Grew up in",
  quote:
    "Looking to build something steady, respectful, and sincere with the right person and family.",
  professionalSite: "Professional site",
  connectEmail: "Connect by email",
  downloadBiodata: "Download biodata",
  linkedInProfile: "LinkedIn profile",
  viewPhotos: "View photos",
  aboutTitle: "About Akash",
  educationCareerTitle: "Education & career",
  lifestyleSectionTitle: "Lifestyle & interests",
  lifestyleIntro:
    "He has a good mix of active, social, and quieter interests. The day-to-day vibe is healthy, curious, and easygoing.",
  relationshipSectionTitle: "What matters in a relationship",
  relationshipQuote:
    "Nothing dramatic or transactional. Just patience, sincerity, and respect on both sides.",
  familyTitle: "Family",
  familyIntro:
    "We are a close, values-oriented family and would be glad to get to know yours with warmth and openness.",
  partnerTitle: "Partner preference",
  footerEyebrow: "Get in touch",
  footerTitle: "If this feels like a good match, we would be happy to connect.",
  footerBody:
    "We believe good conversations start gently. If Akash's profile resonates with you, please reach out and we can take the conversation forward respectfully.",
  professionalProfile: "Professional profile",
  heroStats: [
    { label: "Education", value: "M.S. Engineering" },
    { label: "Work", value: "Visa" },
    { label: "USA status", value: "I-140 EB2" },
  ],
  aboutMomentTitles: {
    personality: "Personality",
    academic: "Academic journey",
    lifestyle: "Lifestyle & interests",
  },
  interestGroups: [
    { title: "Fitness", items: ["Gym", "Pickleball", "Basketball"] },
    { title: "Curiosity", items: ["Science", "Deep conversations"] },
    { title: "Home & travel", items: ["Cooking", "Travel"] },
    { title: "Creative", items: ["Music jam sessions"] },
  ],
  photoSlideLabels: [
    "Profile photo",
    "Gallery",
    "Outdoor",
    "Casual",
    "Portrait",
    "Lifestyle",
  ],
};

const paUi: MatrimonialUiStrings = {
  mainLang: "pa",
  otherLocalePath: "/matrimonial",
  otherLocaleLabel: "English",
  heroEyebrow: "ਵਿਆਹ ਯੋਗ ਪ੍ਰੋਫ਼ਾਈਲ",
  grewUpPrefix: "ਵੱਡਾ ਹੋਇਆ",
  quote:
    "ਸਹੀ ਵਿਅਕਤੀ ਅਤੇ ਪਰਿਵਾਰ ਨਾਲ ਠੋਸ, ਇੱਜ਼ਤਯੋਗ ਅਤੇ ਸੱਚੇ ਰਿਸ਼ਤੇ ਦੀ ਉਮੀਦ।",
  professionalSite: "ਪੇਸ਼ੇਵਰ ਸਾਈਟ",
  connectEmail: "ਈਮੇਲ ਨਾਲ ਜੁੜੋ",
  downloadBiodata: "ਬਾਇਓਡਾਟਾ ਡਾਊਨਲੋਡ",
  linkedInProfile: "ਲਿੰਕਡਇਨ ਪ੍ਰੋਫ਼ਾਈਲ",
  viewPhotos: "ਫੋਟੋ ਵੇਖੋ",
  aboutTitle: "ਆਕਾਸ਼ ਬਾਰੇ",
  educationCareerTitle: "ਸਿੱਖਿਆ ਅਤੇ ਕਰੀਅਰ",
  lifestyleSectionTitle: "ਜੀਵਨਢੰਗ ਅਤੇ ਦਿਲਚਸਪੀਆਂ",
  lifestyleIntro:
    "ਉਸ ਦੀਆਂ ਦਿਲਚਸਪੀਆਂ ਵਿੱਚ ਰੁਚੀ, ਸਰਗਰਮੀ ਅਤੇ ਸ਼ਾਂਤ ਵੇਲੇ ਦਾ ਸੰਤੁਲਨ ਹੈ — ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਸਿਹਤਮੰਦ, ਜਿਗਿਆਸੂ ਅਤੇ ਸਹਿਜ ਹੈ।",
  relationshipSectionTitle: "ਰਿਸ਼ਤੇ ਵਿੱਚ ਮਹੱਤਵਪੂਰਨ",
  relationshipQuote:
    "ਕੋਈ ਨਾਟਕ ਜਾਂ ਲੈਣ-ਦੇਣ ਨਹੀਂ। ਬਸ ਧੀਰਜ, ਸੱਚਾਈ ਅਤੇ ਦੋਵਾਂ ਪਾਸਿਆਂ ਤੋਂ ਇੱਜ਼ਤ।",
  familyTitle: "ਪਰਿਵਾਰ",
  familyIntro:
    "ਅਸੀਂ ਇੱਕ ਨੇੜੇ, ਕਦਰਾਂ ਵਾਲੇ ਪਰਿਵਾਰ ਹਾਂ ਅਤੇ ਨਰਮੀ ਤੇ ਖੁੱਲ੍ਹੇਪਣ ਨਾਲ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਜਾਣ ਕੇ ਖੁਸ਼ ਹੋਵਾਂਗੇ।",
  partnerTitle: "ਜੀਵਨਸਾਥੀ ਦੀਆਂ ਤਰਜੀਹਾਂ",
  footerEyebrow: "ਸੰਪਰਕ",
  footerTitle:
    "ਜੇ ਇਹ ਪ੍ਰੋਫ਼ਾਈਲ ਢੁਕਵਾਂ ਲੱਗੇ ਤਾਂ ਅਸੀਂ ਜੁੜਨ ਵਿੱਚ ਖੁਸ਼ ਹੋਵਾਂਗੇ।",
  footerBody:
    "ਚੰਗੀਆਂ ਗੱਲਬਾਤਾਂ ਹੌਲੀ ਸ਼ੁਰੂ ਹੁੰਦੀਆਂ ਹਨ। ਜੇ ਆਕਾਸ਼ ਦੀ ਪ੍ਰੋਫ਼ਾਈਲ ਤੁਹਾਨੂੰ ਢੁਕਦੀ ਲੱਗੇ ਤਾਂ ਸੰਪਰਕ ਕਰੋ; ਅਸੀਂ ਇੱਜ਼ਤ ਨਾਲ ਗੱਲ ਅੱਗੇ ਵਧਾਵਾਂਗੇ।",
  professionalProfile: "ਪੇਸ਼ੇਵਰ ਪ੍ਰੋਫ਼ਾਈਲ",
  heroStats: [
    { label: "ਸਿੱਖਿਆ", value: "ਐਮ.ਐਸ. ਇੰਜੀਨੀਅਰਿੰਗ" },
    { label: "ਕੰਮ", value: "ਵੀਜ਼ਾ" },
    { label: "ਅਮਰੀਕਾ ਸਥਿਤੀ", value: "ਆਈ-140 ਈਬੀ2" },
  ],
  aboutMomentTitles: {
    personality: "ਸੁਭਾਅ",
    academic: "ਪੜ੍ਹਾਈ ਦਾ ਸਫ਼ਰ",
    lifestyle: "ਜੀਵਨਢੰਗ ਅਤੇ ਦਿਲਚਸਪੀਆਂ",
  },
  interestGroups: [
    { title: "ਸਰੀਰਕ ਸਰਗਰਮੀ", items: ["ਜਿਮ", "ਪਿਕਲਬਾਲ", "ਬਾਸਕਟਬਾਲ"] },
    { title: "ਜਿਗਿਆਸਾ", items: ["ਵਿਗਿਆਨ", "ਡੂੰਘੀਆਂ ਗੱਲਾਂ"] },
    { title: "ਘਰ ਅਤੇ ਯਾਤਰਾ", items: ["ਖਾਣਾ ਬਣਾਉਣਾ", "ਯਾਤਰਾ"] },
    { title: "ਸਿਰਜਣਾਤਮਕ", items: ["ਸੰਗੀਤ ਸੈਸ਼ਨ"] },
  ],
  photoSlideLabels: [
    "ਪ੍ਰੋਫ਼ਾਈਲ ਫੋਟੋ",
    "ਗੈਲਰੀ",
    "ਬਾਹਰ",
    "ਆਮ",
    "ਫੋਟੋ",
    "ਜੀਵਨਢੰਗ",
  ],
};

export function getMatrimonialBundle(locale: MatrimonialLocale): MatrimonialBundle {
  if (locale === "pa") {
    return { locale: "pa", profile: paProfile, ui: paUi };
  }
  return { locale: "en", profile: enProfile, ui: enUi };
}
