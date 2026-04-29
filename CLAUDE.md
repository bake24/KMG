# KMG LLC Website Project

## What This Is
Corporate website for KMG LLC, a Philadelphia-based trucking and logistics company. The project is a static HTML site with a small Node.js backend for lead capture via Telegram Bot.

## Stack
- Frontend: Vanilla HTML5, CSS3, JavaScript ES6+, zero npm dependencies
- Backend: Node.js with built-in `http`, `fs`, and `path` modules
- Deployment: Vercel for testing, Hetzner for final production hosting
- Lead delivery: Telegram Bot API via `POST /api/telegram-lead`
- i18n: English, Russian, and Uzbek through `data-i18n` attributes

## Project Structure
```text
index.html          - Homepage and main hub
news.html           - Industry news and trucking updates
trucking.html       - Fleet, lanes, and driver recruiting
brokerage.html      - Freight brokerage services
consulting.html     - Safety consulting and operations setup
shop.html           - Service shop and merchandise area
partners.html       - Partnership info
safety-service.html - Safety and service shop

src/scripts/main.js - Frontend logic: i18n, theme, forms, animations
src/styles/main.css - Design system, themes, responsive layout

server/server.js    - Node.js HTTP server for Hetzner
server/telegram.js  - Telegram Bot integration
api/telegram-lead.js - Vercel serverless function
netlify/functions/telegram-lead.js - Netlify alternative

assets/             - Images, logos, partner and review photos
docs/               - Architecture docs, deployment guide, roadmap
```

## Scripts
```bash
npm start
npm run check
```

## Environment Variables
```text
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
PORT=3000
```

Copy `.env.example` to `.env` for local development. Never commit `.env`.

## Key Frontend Patterns
- i18n: Translatable text uses `data-i18n="key"` attributes.
- Translations: Stored in `src/scripts/main.js`.
- Theme: Light and dark mode stored in `localStorage`.
- Forms: Lead form posts to `/api/telegram-lead`.
- Animations: Scroll reveal, hero parallax, card tilt, review carousel.

## Lead Capture API
```text
POST /api/telegram-lead
Body: { firstName, phone, email?, experience?, language? }
Required: firstName, phone
Limit: 12KB payload
```

Data is validated and HTML-escaped before Telegram delivery.

## Deployment
- Vercel: `vercel.json` handles security headers and routes.
- Netlify: `_headers` and `netlify/functions/` are available as an alternative.
- Hetzner: Nginx and PM2 flow is documented in `docs/DEPLOYMENT.md`.

## Important Constraints
- Keep the project vanilla: no React, no TypeScript, no build tools.
- All JavaScript must pass `npm run check`.
- CSP is strict, so new external scripts require header updates.
- Telegram credentials must never be exposed in frontend code.
