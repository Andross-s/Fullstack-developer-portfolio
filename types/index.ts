export type Locale = "en" | "ua";

export interface LocalizedText {
  en: string;
  ua: string;
}

export interface ProjectLink {
  label: LocalizedText;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  role?: LocalizedText;
  period?: string;
  summary: LocalizedText;
  fullDescription: LocalizedText;
  stack: string[];
  images: string[];
  liveUrl: string;
  links?: ProjectLink[];
}

export interface SkillCategory {
  id: string;
  category: LocalizedText;
  skills: string[];
}

export type SocialIcon = "github" | "linkedin" | "telegram" | "mail";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
}

export type ContactStatus = "idle" | "loading" | "success" | "error";
