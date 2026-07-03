export type Locale = "en" | "ua";

export interface LocalizedText {
  en: string;
  ua: string;
}

export interface Project {
  id: string;
  title: string;
  description: LocalizedText;
  stack: string[];
  liveUrl: string;
  githubUrl?: string;
  image: string;
}

export interface SkillItem {
  name: string;
  level: number;
}

export type SocialIcon = "github" | "linkedin" | "telegram" | "mail";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
}

export type ContactStatus = "idle" | "loading" | "success" | "error";
