
# KMG Website Implementation Steps

## Goal

Build KMG as a professional company website for driver recruiting, partner trust, company presentation, and future backend integration.

## Phase 1: Content Architecture

1. Keep `index.html` as the main company homepage.
2. Keep Careers and Contact on `index.html` for faster driver conversion.
3. Combine Safety, Service Shop, and Fleet content in `safety-service.html`.
4. Move partner presentation to `partners.html`.
5. Move shop products to `shop.html`.
6. Replace Blog with a News page at `news.html`.
7. Keep news items modal-based so users can read updates without leaving the page.

## Phase 2: Media Placement

1. Use the new web images for hero, about, careers, contact, safety/service, partners, shop, and news sections.
2. Use `assets/partners/partners.png` specifically for the partners section.
3. Keep social-size assets available for Open Graph and future social blocks.
4. Preserve responsive hero media for desktop, tablet, and mobile.

## Phase 3: Multilingual System

1. Default language: English.
2. Add Russian and Uzbek language controls with flags.
3. Store selected language in `localStorage`.
4. Update visible text, form placeholders, document title, and Telegram message by selected language.
5. Keep all text in one JS dictionary so future changes are controlled from one place.

## Phase 4: Recruiting Content

1. Add dedicated lanes: USPS, Amazon, West Side, Midwest, East Side, South Side.
2. Add pay highlights: `$12,000-$15,000 gross weekly`, `31% of gross and up`, `from 70 CPM`, weekly pay.
3. Add new trucks, Freightliner fleet, top dispatchers, and inspection bonuses: `$250 / $500 / $2000`.
4. Improve application CTA and keep the form frontend-only for now.

## Phase 5: Trust And Proof

1. Add Safety and Service Shop section.
2. Add Freightliner fleet section.
3. Add partner section with real partner image.
4. Add review carousel with 5-star comments moving right-to-left.
5. Add FAQ and SEO/support copy for production readiness.

## Phase 6: Contact And Conversion

1. Add company phone: `+1 267 453-96-03`.
2. Add address: `84 Bustleton Pike, Philadelphia, PA`.
3. Add embedded map.
4. Align contact details and contact form on the same visual level.
5. Add fixed Telegram HR button with localized prefilled message.

## Phase 7: Visual Polish

1. Improve section rhythm, shadows, hover states, and premium motion.
2. Keep animations serious and useful: reveal, carousel, parallax, glow, tilt, and header state.
3. Preserve reduced-motion support.
4. Keep the static architecture easy to migrate to a backend later.

## Current Page Map

| Page | Purpose |
|---|---|
| `index.html` | Company overview, hero, trust metrics, short about, Careers, application form, contact, reviews, SEO summary |
| `safety-service.html` | Safety department, service shop, Freightliner fleet, equipment readiness, operational standards |
| `partners.html` | Partner categories, partner image, partner trust messaging |
| `shop.html` | Branded product grid prepared for future cart/backend |
| `news.html` | Freight market and safety news cards with modal article previews |
