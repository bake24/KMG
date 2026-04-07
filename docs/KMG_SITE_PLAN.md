# KMG LLC Website Plan

## Goal

Create a representative company website for Kayili M Group LLC / KMG that explains who the company is, supports driver recruiting, presents partners, shows shop items, publishes blog-style updates, and provides contact templates.

## Current Implementation

- Static website entry: `index.html`
- Global design system, responsive layout, and light/dark themes: `src/styles/main.css`
- Frontend interactions: `src/scripts/main.js`
- Browser/favicon and primary SVG logo: `assets/kmg-logo.svg`
- Original mark asset: `assets/kmg-mark.svg`
- Company imagery: `assets/*.png`
- Partners visual: `assets/partners/partners.png`
- Shop visuals: `assets/shop/*.png`

## Design Direction

- Default theme is light, with a dark theme toggle in the header.
- The design uses real truck and product imagery from the local `assets` folder.
- The visual style is corporate, modern, and representative, focused on trust, recruiting, partners, and company culture.
- Public company story starts from 2022.
- Forms are frontend-only templates until backend work begins.

## Site Structure

1. Home
   - Company positioning
   - Main image
   - Contact and Careers calls-to-action

2. About
   - Main company information
   - Freight operations, driver culture, public brand

3. History
   - Company story placeholder
   - Foundation, growth, and future timeline

4. Partners
   - Partner relationship section
   - Local partner image

5. Shop
   - Four shop product cards
   - Ready for checkout or product backend later

6. Careers
   - Driver recruiting section
   - Application form template

7. Blogs
   - Static blog cards for operations, drivers, and company updates
   - Ready for CMS or custom backend later

8. Contacts
   - Placeholder phone, email, and location
   - Contact form template
   - Footer templates for phone, email, address, hours, Instagram, Telegram, LinkedIn, and Facebook

## Reference Site Notes

The Netlify reference site is a Nuxt SPA. The rendered HTML does not include route content, so its bundle was inspected for structure. It contains navigation for Home, About, Partners, Shop, Careers, Blogs, and Contact, plus footer newsletter/contact patterns. The new static implementation keeps that information architecture but redesigns it for this project.

## Figma Status

The updated Figma link still could not be accessed by the current MCP integration. The current version therefore uses the reference-site structure, local images, and a custom premium KMG design instead of direct Figma extraction.

When Figma access is available:

1. Pull screenshots and design context for node `1065:2`.
2. Compare Figma spacing, branding, and image usage with the current site.
3. Replace or refine sections where the Figma file has approved brand assets.
4. Keep the new light/dark theme architecture unless the brand direction changes.

## Backend Path Later

1. Connect Careers application form to `/applied-client/` or a new backend endpoint.
2. Connect Contacts form to email, CRM, or `/contact-create/`.
3. Add CMS/database support for Blogs.
4. Add product data and checkout flow for Shop.
5. Add admin tools for partners, applications, and content.
6. Replace placeholder contact information with real KMG data.
