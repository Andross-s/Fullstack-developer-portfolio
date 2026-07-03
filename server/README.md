# Portfolio Contact API

Окремий Express-сервіс (TypeScript), який приймає повідомлення з форми зворотного зв'язку
на фронтенді та надсилає їх на пошту через Nodemailer.

## Локальний запуск

```bash
cd server
npm install
cp .env.example .env   # заповнити SMTP_* та CONTACT_RECEIVER_EMAIL
npm run dev
```

Сервер стартує на `http://localhost:4000`. Ендпоінт: `POST /api/contact`
з тілом `{ "name": string, "email": string, "message": string }`.

Перевірка здоров'я: `GET /health`.

## Змінні середовища

Див. `.env.example`. Для Gmail потрібен App Password (не звичайний пароль облікового
запису) — увімкніть 2FA в Google-акаунті та створіть пароль застосунку в налаштуваннях безпеки.

## Деплой на Render

1. Створіть новий **Web Service** з цього репозиторію, вкажіть **Root Directory**: `server`.
2. **Build Command**: `npm install && npm run build`
3. **Start Command**: `npm start`
4. Додайте змінні середовища з `.env.example` у розділі Environment (включно з
   `CORS_ORIGIN`, що дорівнює URL задеплоєного фронтенду на Vercel).

## Деплой на Railway

1. Створіть новий проєкт → Deploy from GitHub repo, вкажіть `server` як робочу директорію
   (Root Directory в налаштуваннях сервісу).
2. Railway автоматично визначить Node.js проєкт; переконайтесь, що build command —
   `npm run build`, а start command — `npm start`.
3. Додайте ті самі змінні середовища, що й для Render.

Після деплою оновіть `NEXT_PUBLIC_API_URL` у фронтенд-проєкті (Vercel) на публічний URL
цього сервісу.
