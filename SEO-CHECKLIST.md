# Ranking Sun Optics for "best optical shop in Vellore"

No one can promise position 1. Google ranks local searches mainly on **relevance** (what the site and profile say), **distance** and **prominence** (reviews, links, mentions). The site now covers relevance. The steps below cover the rest.

## What the website already does
- Title, description and headings target: best optical shop in Vellore, eye test Vellore, spectacles Vellore, contact lenses Vellore, sunglasses Vellore, Krishna Nagar and Green Circle.
- Six local landing pages under `/vellore/` (eye test, spectacles, contact lenses, sunglasses, one page per branch), linked from the home page and footer.
- Structured data (JSON-LD): `Optician` business with both branches, opening hours, services, FAQ and breadcrumbs.
- Sitemap, canonical URLs, `lang="en-IN"`, geo tags, fast static pages, compressed images, mobile call/WhatsApp bar.

## Before launch on the real domain (required, or Google will not index the site)
1. In `.env.production` delete `NEXT_PUBLIC_NOINDEX=1` and set `NEXT_PUBLIC_SITE_URL=https://their-domain` (no trailing slash).
2. Add `NEXT_PUBLIC_EMAIL`, social links, tagline, Maps links (`mapUrl` in `STORES`, `lib/site.ts`).
3. `npm run build`, upload `out/`, then submit `https://their-domain/sitemap.xml` in Google Search Console (add the verification code as `NEXT_PUBLIC_GSC_VERIFICATION`).
4. Update the domain in `public/llms.txt` and `public/llms-full.txt`.

## Off-page work that decides local rankings (do this first)
1. **Google Business Profile** for each branch (Krishna Nagar, Green Circle): category "Optician" (add "Eye care center" / "Sunglasses store" as secondary), exact name, address, phone +91 95665 14555, hours 10 AM to 9 PM, website link, 10+ real photos of the shop, services and the ₹200 eye check-up.
2. **Reviews**: ask every customer for a Google review (share the review link by WhatsApp after delivery). Reply to every review. Rating and review count are the strongest ranking lever and are the pending "Google reviews" item.
3. **NAP consistency**: the same name, address and phone everywhere (Justdial, Sulekha, Bing Places, Apple Maps, Facebook, Instagram). Use the exact address in `lib/site.ts`.
4. **Local links**: Vellore business directories, local news or school and club partners (the Jaycees, Lions and Rotary eye camps are good link stories), brand "store locator" pages for brands you stock (only where authorised).
5. **Content**: post camp photos and eye-care tips on Google Business Profile weekly; add real founder photos and camp numbers to the About page.

## Wording note
"Best optical shop in Vellore" is a claim in the page title and description. Keep it only if the owner is comfortable with it, and back it up with reviews.
