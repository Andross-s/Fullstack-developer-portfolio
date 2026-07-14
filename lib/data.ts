import type { Project, SkillCategory, SocialLink } from "@/types";

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

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    category: { en: "Languages & Markup", ua: "Мови та розмітка" },
    skills: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    id: "frameworks",
    category: { en: "Frameworks & Libraries", ua: "Фреймворки та бібліотеки" },
    skills: ["React", "Next.js", "Node.js", "Express"],
  },
  {
    id: "tools",
    category: { en: "Tools & Styling", ua: "Інструменти та стилізація" },
    skills: ["Tailwind CSS", "Git"],
  },
];

export const projects: Project[] = [
  {
    id: "ecotote",
    title: "EcoTote",
    summary: {
      ua: "Інтернет-магазин екологічних сумок та аксесуарів з органічної бавовни, льону та перероблених матеріалів: каталог товарів, галерея та форма зворотного зв'язку.",
      en: "An e-commerce site for eco-friendly tote bags and accessories made from organic cotton, linen, and recycled materials, with a product catalog, gallery, and contact form.",
    },
    fullDescription: {
      ua: "Інтернет-магазин екологічних сумок та аксесуарів з органічної бавовни, льону та перероблених матеріалів: каталог товарів, галерея та форма зворотного зв'язку.",
      en: "An e-commerce site for eco-friendly tote bags and accessories made from organic cotton, linen, and recycled materials, with a product catalog, gallery, and contact form.",
    },
    stack: ["HTML", "CSS", "JavaScript"],
    images: [
      "/images/projects/ecotote.svg",
      "/images/projects/ecotote-2.svg",
      "/images/projects/ecotote-3.svg",
    ],
    liveUrl: "https://vfrost1310.github.io/project-ctf-group/",
    links: [
      {
        label: { en: "GitHub", ua: "GitHub" },
        href: "https://github.com/vfrost1310/project-ctf-group",
      },
    ],
  },
  {
    id: "artistshub",
    title: "ArtistsHub",
    summary: {
      ua: "Платформа для пошуку та відкриття музичних виконавців з фільтрацією, галереєю артистів та формою відгуків.",
      en: "A music discovery platform for exploring artists, with filtering, an artist gallery, and a feedback form.",
    },
    fullDescription: {
      ua: "Платформа для пошуку та відкриття музичних виконавців з фільтрацією, галереєю артистів та формою відгуків.",
      en: "A music discovery platform for exploring artists, with filtering, an artist gallery, and a feedback form.",
    },
    stack: ["React", "Vite", "JavaScript"],
    images: [
      "/images/projects/artistshub.svg",
      "/images/projects/artistshub-2.svg",
      "/images/projects/artistshub-3.svg",
    ],
    liveUrl: "https://vladyslav-mohyla.github.io/Favorite-Artist/",
    links: [
      {
        label: { en: "GitHub", ua: "GitHub" },
        href: "https://github.com/vladyslav-mohyla/Favorite-Artist",
      },
    ],
  },
  {
    id: "nife-wars",
    title: "NiFe WARS: Last Defense",
    summary: {
      ua: "Tower defense гра: стратегічне розміщення веж, керування ресурсами та система прокачки для захисту від хвиль ворогів.",
      en: "A tower defense game featuring strategic tower placement, resource management, and an upgrade system to defend against waves of enemies.",
    },
    fullDescription: {
      ua: "Tower defense гра: стратегічне розміщення веж, керування ресурсами та система прокачки для захисту від хвиль ворогів.",
      en: "A tower defense game featuring strategic tower placement, resource management, and an upgrade system to defend against waves of enemies.",
    },
    stack: ["React", "Vite", "Game Dev"],
    images: [
      "/images/projects/nife-wars.svg",
      "/images/projects/nife-wars-2.svg",
      "/images/projects/nife-wars-3.svg",
    ],
    liveUrl: "https://andross-s.github.io/STP-12570/",
    links: [
      {
        label: { en: "GitHub", ua: "GitHub" },
        href: "https://github.com/andross-s/STP-12570",
      },
    ],
  },
  {
    id: "tasteorama",
    title: "Tasteorama",
    role: { en: "Team Lead", ua: "Тімлід" },
    period: "06.2026",
    summary: {
      en: "A fullstack recipe platform for browsing and filtering recipes by category and ingredient, with user registration and account management.",
      ua: "Fullstack-платформа для рецептів: перегляд, фільтрація за категоріями та інгредієнтами, реєстрація та особистий кабінет користувача.",
    },
    fullDescription: {
      en: "Tasteorama is a fullstack recipe-discovery platform built by a small team, where I served as Team Lead. Users can browse and search recipes by category and ingredient, register and log in with JWT-based authentication (including refresh tokens), publish their own recipes, save favorites, and manage a profile with an avatar upload. On the frontend I worked with Next.js 16 (App Router) and React 19, using Zustand for auth/favorites/modal/UI state, TanStack Query with Axios for data fetching and caching, Formik and Yup for form handling and validation, react-hot-toast for notifications, react-paginate for pagination, and CSS Modules for styling. The backend is a Node.js/Express 5 REST API backed by MongoDB via Mongoose, with Joi/celebrate request validation, bcrypt password hashing, helmet and cors for security, Multer + Cloudinary for avatar uploads, and interactive Swagger API documentation.",
      ua: "Tasteorama — фулстек-платформа для пошуку рецептів, яку ми розробляли невеликою командою, де я був тімлідом. Користувачі можуть переглядати та шукати рецепти за категоріями й інгредієнтами, реєструватися та входити через JWT-автентифікацію (з refresh-токенами), публікувати власні рецепти, зберігати улюблені та керувати профілем із завантаженням аватара. На фронтенді я працював з Next.js 16 (App Router) та React 19, використовуючи Zustand для стану автентифікації/улюблених/модалок/UI, TanStack Query з Axios для завантаження й кешування даних, Formik та Yup для форм і валідації, react-hot-toast для сповіщень, react-paginate для пагінації, а також CSS Modules для стилів. Бекенд — REST API на Node.js/Express 5 з MongoDB через Mongoose, валідацією запитів через Joi/celebrate, хешуванням паролів bcrypt, захистом helmet і cors, завантаженням аватарів через Multer + Cloudinary та інтерактивною документацією Swagger.",
    },
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Zustand",
      "TanStack Query",
      "Axios",
      "Formik",
      "Yup",
      "React Hot Toast",
      "React Paginate",
      "CSS Modules",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Joi/celebrate",
      "bcrypt",
      "Multer",
      "Cloudinary",
      "Swagger",
    ],
    images: [
      "/images/projects/tasteorama.svg",
      "/images/projects/tasteorama-2.svg",
      "/images/projects/tasteorama-3.svg",
    ],
    liveUrl: "https://final-project-fullstack-force-front.vercel.app/",
    links: [
      {
        label: { en: "Frontend repo", ua: "Репозиторій фронтенду" },
        href: "https://github.com/Andross-s/final_project_Fullstack-Force_front",
      },
      {
        label: { en: "Backend repo", ua: "Репозиторій бекенду" },
        href: "https://github.com/Andross-s/final_project_Fullstack-Force_back",
      },
      {
        label: { en: "API docs (Swagger)", ua: "Документація API (Swagger)" },
        href: "https://final-project-fullstack-force-back-r48i.onrender.com/api-docs/",
      },
    ],
  },
  {
    id: "travel-trucks",
    title: "TravelTrucks",
    summary: {
      ua: "Каталог кемперів та трейлерів для подорожей з детальними картками, фільтрами та зручною навігацією по асортименту.",
      en: "A catalog of camper vans and travel trailers with detailed listing cards, filters, and easy browsing of the inventory.",
    },
    fullDescription: {
      ua: "Каталог кемперів та трейлерів для подорожей з детальними картками, фільтрами та зручною навігацією по асортименту.",
      en: "A catalog of camper vans and travel trailers with detailed listing cards, filters, and easy browsing of the inventory.",
    },
    stack: ["React", "JavaScript", "REST API"],
    images: [
      "/images/projects/travel-trucks.svg",
      "/images/projects/travel-trucks-2.svg",
      "/images/projects/travel-trucks-3.svg",
    ],
    liveUrl: "https://project-travel-trucks-seven.vercel.app/",
  },
];
