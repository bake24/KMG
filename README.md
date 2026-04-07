# KMG LLC Website

Modern static website foundation for Kayili M Group LLC / KMG.

## Run

Open `index.html` in a browser. No build step is required for the current version.

## Structure

- `index.html` contains the full company website.
- `src/styles/main.css` contains design tokens, responsive layout, animations, and light/dark themes.
- `src/scripts/main.js` contains theme switching, mobile navigation, reveal animations, and frontend-only form behavior.
- `assets/` contains truck imagery, the SVG mark, partner image, and shop images.
- `docs/KMG_SITE_PLAN.md` contains the architecture and future backend plan.

## Pages / Sections

- Home
- About
- History
- Partners
- Shop
- Careers
- Blogs
- Contacts

## Notes

The default theme is light. The header theme toggle stores the selected theme in `localStorage`.

Node.js is not installed in the current environment, so this implementation intentionally has no npm dependency or build step.
