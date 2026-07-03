import type { Project, SkillItem, SocialLink } from "@/types";

export const personalInfo = {
  name: "Andrii Skoropad",
  linkedinUrl: "https://www.linkedin.com/in/andrii-skoropad-frontend-developer/",
  githubUrl: "https://github.com/andross-s",
  telegramUrl: "https://t.me/andross_s",
  email: "andrey.andross@gmail.com",
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: personalInfo.githubUrl, icon: "github" },
  { label: "LinkedIn", href: personalInfo.linkedinUrl, icon: "linkedin" },
  { label: "Telegram", href: personalInfo.telegramUrl, icon: "telegram" },
  { label: "Email", href: `mailto:${personalInfo.email}`, icon: "mail" },
];

export const skills: SkillItem[] = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 85 },
  { name: "TypeScript", level: 75 },
  { name: "React", level: 80 },
  { name: "Next.js", level: 75 },
  { name: "Node.js", level: 70 },
  { name: "Express", level: 65 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Git", level: 80 },
];

export const projects: Project[] = [
  {
    id: "ecotote",
    title: "EcoTote",
    description: {
      ua: "Інтернет-магазин екологічних сумок та аксесуарів з органічної бавовни, льону та перероблених матеріалів: каталог товарів, галерея та форма зворотного зв'язку.",
      en: "An e-commerce site for eco-friendly tote bags and accessories made from organic cotton, linen, and recycled materials, with a product catalog, gallery, and contact form.",
    },
    stack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://vfrost1310.github.io/project-ctf-group/",
    githubUrl: "https://github.com/vfrost1310/project-ctf-group",
    image: "/images/projects/ecotote.svg",
  },
  {
    id: "artistshub",
    title: "ArtistsHub",
    description: {
      ua: "Платформа для пошуку та відкриття музичних виконавців з фільтрацією, галереєю артистів та формою відгуків.",
      en: "A music discovery platform for exploring artists, with filtering, an artist gallery, and a feedback form.",
    },
    stack: ["React", "Vite", "JavaScript"],
    liveUrl: "https://vladyslav-mohyla.github.io/Favorite-Artist/",
    githubUrl: "https://github.com/vladyslav-mohyla/Favorite-Artist",
    image: "/images/projects/artistshub.svg",
  },
  {
    id: "nife-wars",
    title: "NiFe WARS: Last Defense",
    description: {
      ua: "Tower defense гра: стратегічне розміщення веж, керування ресурсами та система прокачки для захисту від хвиль ворогів.",
      en: "A tower defense game featuring strategic tower placement, resource management, and an upgrade system to defend against waves of enemies.",
    },
    stack: ["React", "Vite", "Game Dev"],
    liveUrl: "https://andross-s.github.io/STP-12570/",
    githubUrl: "https://github.com/andross-s/STP-12570",
    image: "/images/projects/nife-wars.svg",
  },
  {
    id: "tasteorama",
    title: "Tasteorama",
    description: {
      ua: "Fullstack-платформа для рецептів: перегляд, фільтрація за категоріями та інгредієнтами, реєстрація та особистий кабінет користувача.",
      en: "A fullstack recipe platform for browsing and filtering recipes by category and ingredient, with user registration and account management.",
    },
    stack: ["React", "Node.js", "REST API"],
    liveUrl: "https://final-project-fullstack-force-front.vercel.app/",
    image: "/images/projects/tasteorama.svg",
  },
  {
    id: "travel-trucks",
    title: "TravelTrucks",
    description: {
      ua: "Каталог кемперів та трейлерів для подорожей з детальними картками, фільтрами та зручною навігацією по асортименту.",
      en: "A catalog of camper vans and travel trailers with detailed listing cards, filters, and easy browsing of the inventory.",
    },
    stack: ["React", "JavaScript", "REST API"],
    liveUrl: "https://project-travel-trucks-seven.vercel.app/",
    image: "/images/projects/travel-trucks.svg",
  },
];
