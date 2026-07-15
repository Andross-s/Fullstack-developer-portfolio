import type { Dictionary } from "./types";

const ua: Dictionary = {
  meta: {
    title: "Андрій Скоропад — Frontend / FullStack Developer",
    description:
      "Портфоліо Андрія Скоропада — Frontend (FullStack) розробника, випускника GOIT. Проєкти на React, Next.js, Node.js та Express.",
  },
  nav: {
    about: "Про мене",
    skills: "Навички",
    projects: "Проєкти",
    contact: "Контакти",
    toggleTheme: "Перемкнути тему",
    toggleLocale: "Switch to English",
    openMenu: "Відкрити меню",
    closeMenu: "Закрити меню",
    skipToContent: "Перейти до основного контенту",
  },
  hero: {
    greeting: "Привіт, я Андрій",
    role: "Frontend / FullStack розробник",
    intro:
      "Створюю сайти та вебзастосунки, які швидко завантажуються, виглядають бездоганно на будь-якому пристрої та допомагають вашому бізнесу залучати клієнтів.",
    ctaProjects: "Переглянути проєкти",
    ctaContact: "Обговорити проєкт",
    avatarAlt: "Аватар Андрія Скоропада",
  },
  about: {
    heading: "Про мене",
    paragraphs: [
      "Я Frontend/FullStack розробник, який спеціалізується на створенні сучасних вебзастосунків — від адаптивної верстки до серверної логіки на Node.js.",
      " Мій підхід простий: код повинен бути не лише робочим, а й швидким, доступним та зрозумілим для подальшого розвитку продукту. Я прораховую деталі — від UX-нюансів інтерфейсу до архітектури REST API — щоб результат відповідав реальним цілям бізнесу, а не лише технічному завданню.",
      " Відкритий до співпраці над новими проєктами — як разовими задачами, так і довгостроковим партнерством.",
    ],
    highlight: "Доступний для нових проєктів",
  },
  skills: {
    heading: "Навички",
    subheading:
      "Технології, якими я користуюсь щодня для створення надійних та масштабованих продуктів",
  },
  projects: {
    heading: "Проєкти",
    subheading:
      "Вибрані роботи, що демонструють підхід до вирішення реальних задач",
    liveDemo: "Live Demo",
    code: "GitHub",
    previewAlt: "Прев'ю проєкту",
    detailsCta: "Деталі",
    closeModal: "Закрити",
    roleLabel: "Роль",
    periodLabel: "Період",
    techStackLabel: "Технології",
    linksHeading: "Посилання",
    galleryPrev: "Попереднє зображення",
    galleryNext: "Наступне зображення",
  },
  contact: {
    heading: "Зв'язатись",
    subheading:
      "Маєте ідею для проєкту чи потрібна консультація? Розкажіть деталі — відповім протягом 24 годин.",
    nameLabel: "Ім'я",
    namePlaceholder: "Ваше ім'я",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    messageLabel: "Повідомлення",
    messagePlaceholder: "Розкажіть, чим я можу допомогти...",
    fileLabel: "Вкладення (необов'язково)",
    fileHint: "JPG, PNG, WEBP або PDF, до 5MB",
    fileRemoveLabel: "Видалити файл",
    submit: "Надіслати повідомлення",
    submitting: "Надсилання...",
    success: "Дякую! Ваше повідомлення надіслано, я відповім найближчим часом.",
    error: "Не вдалося надіслати повідомлення. Спробуйте ще раз пізніше.",
    connectHeading: "Або напишіть напряму",
    validation: {
      nameMin: "Ім'я має містити щонайменше 2 символи",
      nameMax: "Ім'я занадто довге",
      emailInvalid: "Введіть коректний email",
      messageMin: "Повідомлення має містити щонайменше 10 символів",
      messageMax: "Повідомлення занадто довге",
      fileTooLarge: "Файл має бути не більше 5MB",
      fileInvalidType: "Дозволені лише файли JPG, PNG, WEBP або PDF",
    },
  },
  footer: {
    rights: "Усі права захищено.",
    builtWith: "Створено на Next.js, TypeScript та Tailwind CSS.",
  },
};

export default ua;
