import type { Project, SkillCategory, SocialLink } from "@/types";

export const personalInfo = {
  name: "Andrii Skoropad",
  linkedinUrl:
    "https://www.linkedin.com/in/andrii-skoropad-frontend-developer/",
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
      ua: "Інтернет-магазин екотоварів з інтуїтивним каталогом, галереєю та формою зв'язку — приклад чистого UX для e-commerce.",
      en: "An online store for eco-friendly products featuring an intuitive catalog, a gallery, and a contact form—an example of clean e-commerce UX.",
    },
    fullDescription: {
      ua: "Інтернет-магазин екотоварів з інтуїтивним каталогом, галереєю та формою зв'язку — приклад чистого UX для e-commerce.",
      en: "An e-commerce site for eco-friendly tote bags and accessories made from organic cotton, linen, and recycled materials, with a product catalog, gallery, and contact form.",
    },
    stack: ["HTML", "CSS", "JavaScript"],
    images: [
      "/images/projects/ecotote.jpg",
      "/images/projects/ecotote-2.jpg",
      "/images/projects/ecotote-3.jpg",
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
      ua: 'ArtistsHub — інтерактивна платформа для меломанів, яка допомагає відкривати нових виконавців і дізнаватись більше про улюблених артистів.\n\nРеалізовано динамічний каталог артистів із карточками (фото, жанрові теги, короткий біографічний опис, кнопка "Learn More"), пагінацію через "Load More" для поступового підвантаження контенту, а також блок відгуків користувачів зі слайдером-каруселлю та рейтингом.\n\nСекція "About" презентує місію продукту, а адаптивна hero-секція з колажем фото та CTA-кнопкою одразу занурює користувача в атмосферу музичного сервісу.\n\nОсоблива увага приділена responsive-верстці: мозаїчна сітка зображень, картки та навігація коректно адаптуються під мобільні пристрої.',
      en: 'ArtistsHub is an interactive platform for music lovers that helps them discover new artists and learn more about their favorites.\n\nIt features a dynamic artist catalog with cards (photo, genre tags, a short bio, and a "Learn More" button), "Load More" pagination for progressively loading content, and a user reviews section with a carousel slider and star ratings.\n\nAn "About" section presents the product\'s mission, while a responsive hero section with a photo collage and a call-to-action button immediately immerses users in the music-discovery experience.\n\nSpecial attention was given to the responsive layout: the image mosaic grid, cards, and navigation all adapt correctly to mobile devices.',
    },
    stack: ["React", "Vite", "JavaScript"],
    images: [
      "/images/projects/artistshub.jpg",
      "/images/projects/artistshub-2.jpg",
      "/images/projects/artistshub-3.jpg",
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
      ua: "Промо-лендинг для tower defense гри NiFe WARS: Last Defense — стратегічне розміщення веж, прокачка та захист бази від хвиль ворогів.",
      en: "Promotional landing page for the tower defense game *NiFe WARS: Last Defense* — featuring strategic tower placement, upgrades, and base defense against waves of enemies.",
    },
    fullDescription: {
      ua: 'NiFe WARS: Last Defense — маркетинговий лендинг мобільної tower defense гри з детальним описом ігрових механік та закликом до завантаження.\n\nСайт послідовно розкриває цінність продукту: hero-секція з мокапом геймплею та кнопкою Google Play, блок "How to Play" з покроковим поясненням стратегії (побудова захисту, прокачка юнітів, управління ресурсами), сітка функцій з іконками (типи веж, прогресія, ворожі хвилі), а також фотогалерея скріншотів геймплею з каруселлю.\n\nДовіру підсилюють відгуки гравців з рейтингом та розділ FAQ з розгортуваними відповідями (accordion) на типові запитання.\n\nОсоблива увага приділена візуальній подачі: неонова кольорова гама, контрастні world/light-секції для ритму сторінки та адаптивна верстка під мобільні пристрої.',
      en: 'NiFe WARS: Last Defense is a marketing landing page for a mobile tower defense game, featuring a detailed breakdown of the game mechanics and a call to download.\n\nThe site builds up the product\'s value step by step: a hero section with a gameplay mockup and a Google Play button, a "How to Play" block that walks through the strategy (building defenses, upgrading units, managing resources), a feature grid with icons (tower types, progression, enemy waves), and a gameplay screenshot gallery with a carousel.\n\nTrust is reinforced with rated player reviews and an FAQ section with expandable (accordion) answers to common questions.\n\nSpecial attention was given to the visual presentation: a neon color palette, contrasting dark/light sections for page rhythm, and a responsive layout for mobile devices.',
    },
    stack: ["React", "Vite", "Game Dev / Landing Page"],
    images: [
      "/images/projects/nife-wars.jpg",
      "/images/projects/nife-wars-2.jpg",
      "/images/projects/nife-wars-3.jpg",
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
      "/images/projects/tasteorama.jpg",
      "/images/projects/tasteorama-2.jpg",
      "/images/projects/tasteorama-3.jpg",
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
      ua: 'TravelTrucks — сервіс для пошуку та оренди кемперів, побудований навколо зручного каталогу та детальних карток транспорту.\n\nГоловна сторінка зустрічає атмосферним hero-блоком із закликом до дії, що веде в каталог. Сама сторінка каталогу пропонує фільтрацію за локацією, типом кузова (Alcove, Panel Van, Integrated, Semi Integrated), типом двигуна (дизель, бензин, гібрид, електро) та трансмісією, а також пагінацію через "Load more".\n\nКожен кемпер має власну детальну сторінку: галерея фото з мініатюрами, опис, повний перелік характеристик (розміри, об\'єм бака, витрата пального), бейджі зручностей (кухня, санвузол, кондиціонер) та блок відгуків користувачів із рейтингом.\n\nЗавершує сторінку форма бронювання — інтерфейс дозволяє користувачу одразу залишити заявку на обраний кемпер.',
      en: 'TravelTrucks is a service for finding and renting camper vans, built around a convenient catalog and detailed vehicle cards.\n\nThe homepage greets visitors with an atmospheric hero block and a call-to-action leading into the catalog. The catalog page itself offers filtering by location, camper form (Alcove, Panel Van, Integrated, Semi Integrated), engine type (diesel, petrol, hybrid, electric), and transmission, along with "Load more" pagination.\n\nEach camper has its own detail page: a photo gallery with thumbnails, a description, a full list of specifications (dimensions, tank volume, fuel consumption), amenity badges (kitchen, bathroom, air conditioning), and a user reviews section with ratings.\n\nThe page concludes with a booking form, letting users submit a request for the selected camper right away.',
    },
    stack: ["React", "JavaScript", "REST API"],
    images: [
      "/images/projects/travel-trucks.jpg",
      "/images/projects/travel-trucks-2.jpg",
      "/images/projects/travel-trucks-3.jpg",
    ],
    liveUrl: "https://project-travel-trucks-seven.vercel.app/",
    links: [
      {
        label: { en: "GitHub", ua: "GitHub" },
        href: "https://github.com/Andross-s/project-TravelTrucks",
      },
    ],
  },
];
