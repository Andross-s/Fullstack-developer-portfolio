# Fullstack-developer-portfolio

Сайт-резюме (портфоліо) Andrii Skoropad — Frontend / FullStack Developer.
Односторінковий адаптивний сайт із перемиканням теми (light/dark) та мови
(en/ua), розділами про досвід, навички та проєкти, а також формою
зворотного зв'язку з відправкою листа й вкладенням файлу.

🔗 Демо: https://fullstack-developer-portfolio-eta.vercel.app

## Стек технологій

**Frontend**
- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS 4
- react-hook-form + zod — валідація форми
- framer-motion — анімації
- lucide-react — іконки
- @splidejs/splide — карусель галереї проєктів

**Backend** (`/server`, окремий сервіс)
- Node.js + Express + TypeScript
- Resend — надсилання листів з форми
- zod — валідація, multer — завантаження вкладень
- helmet, cors, express-rate-limit — базовий захист API

## Можливості

- Секції: Hero, About, Skills, Projects, Contact
- Перемикач теми (light/dark) без "блимання" при завантаженні
- Локалізація UI (en/ua)
- Картки проєктів з галереєю скріншотів і детальним описом
- Форма зворотного зв'язку: клієнтська + серверна валідація,
  прикріплення файлу (до 5MB, jpg/png/webp/pdf), стани loading/success/error
- SEO: metadata API Next.js, Open Graph / Twitter Card, favicon
- Доступність: семантичний HTML, aria-атрибути, skip-link

## Структура проєкту

```
app/          – App Router: layout, сторінка, глобальні стилі
components/   – переюзабельні UI-компоненти
sections/     – секції головної сторінки (Hero, About, Skills, Projects, Contact)
lib/          – утиліти, i18n-словники, контексти теми/локалі, валідація
types/        – спільні TypeScript-типи
public/       – зображення, favicon
server/       – окремий Express-сервіс для форми зворотного зв'язку
```

## Запуск локально

**Frontend**

```bash
npm install
cp .env.example .env.local   # за потреби змінити NEXT_PUBLIC_API_URL
npm run dev
```

Сайт стартує на `http://localhost:3000`.

**Backend** (потрібен окремий термінал)

```bash
cd server
npm install
cp .env.example .env         # заповнити RESEND_API_KEY та CONTACT_RECEIVER_EMAIL
npm run dev
```

API стартує на `http://localhost:4000`. Деталі — у [server/README.md](server/README.md).

## Деплой

- Frontend — Vercel (без спецналаштувань, `next build`)
- Backend — Render/Railway як окремий Node-сервіс (див. [server/README.md](server/README.md))
