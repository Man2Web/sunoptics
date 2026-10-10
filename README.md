# Sun Optics

Luxury-eyewear catalogue built with **Next.js (App Router, TypeScript)**. Orders are enquiries through WhatsApp (set `NEXT_PUBLIC_WHATSAPP`).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Structure
- `app/layout.tsx` – metadata (SEO / Open Graph / Twitter), fonts
- `app/page.tsx` – server-rendered content; JSON-LD from `lib/site.ts`
- `app/robots.ts`, `app/sitemap.ts` – crawler files (AI bots allowed)
- `public/llms.txt`, `public/llms-full.txt` – LLM-friendly summaries
- `components/Experience.tsx` – smooth scroll and reveal animations
- `lib/site.ts` – single source for products, FAQ and structured data

## Before launch
1. Copy `.env.local.example` to `.env.local` and set the WhatsApp number, site address, email and phone.
2. Fill in boutique addresses, phone numbers and map links in `STORES` (`lib/site.ts`).
3. Replace placeholder products in `lib/products.ts` (names, prices, colours) and add product photos.
4. Update the domain inside `public/llms.txt` and `public/llms-full.txt`.
