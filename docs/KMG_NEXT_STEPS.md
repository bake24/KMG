# KMG Next Implementation Steps

## 1. Lead Capture

- Add secure Telegram lead delivery through a serverless function.
- Keep Telegram bot token and chat ID only in backend code placeholders.
- Mark every submitted request as `Website Lead`.
- Keep frontend form clean and ready for future Trello/CRM integration.

## 2. Translations

- Review English, Russian, and Uzbek copy across shared website text.
- Keep trucking terms in English where they are common in the industry: safety, dispatch, service shop, lanes, gross, CPM, OTR.
- Fix broken encoding in Russian text.

## 3. Reviews

- Use reviewer names from `assets/review`.
- Add reviewer photos to carousel cards.
- Keep order by audience type: CIS, American, Turkish, Mexican, Indian, then repeat.

## 4. Page Improvements

- Strengthen Partners with clearer partnership categories and CTA.
- Strengthen Safety with safety, service shop, Freightliner, inspection, and readiness points.
- Strengthen Shop as a polished coming-soon branded merch page.

## 5. Security

- Do not expose tokens in frontend JavaScript.
- Add basic input validation and rate-friendly payload limits in backend function.
- Escape Telegram message content before sending.
- Keep external links with `rel="noopener"`.

## 6. SEO And Mobile

- Review meta titles and descriptions for all pages.
- Add Open Graph image support.
- Check mobile grids, nav, forms, modals, and floating Telegram button.

## 7. Site Files

- Add `robots.txt`.
- Add `sitemap.xml`.
- Add `404.html`.
- Add `.gitignore` rules for service files and local secrets.

## 8. Cleanup

- Ignore service sidecar files like `._*`.
- Keep old unused assets only if they may be needed as fallback.

## 9. UX Review Notes

- Home should read as a company overview first, not as a menu of pages.
- Service directions should appear one after another: Trucking, Shop, Brokerage, Consulting.
- Each service block should include: short positioning, proof points, capabilities, and one clear CTA.
- Top navigation should stay minimal: Home, Services, News, Contact, Apply to Drive.
- Dedicated service pages should go deeper only after the user chooses a direction.

## 10. Future Content Gaps

- Add real DOT / MC information if public display is approved.
- Add real fleet counts, shop capacity, and service workflow when confirmed.
- Add real brokerage lane examples and partner types.
- Add consulting packages or consultation request types.
- Add company privacy policy before collecting more sensitive lead data.
- Add real case studies once KMG has approved examples.
