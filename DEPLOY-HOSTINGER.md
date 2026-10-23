# Deploying Sun Optics to Hostinger shared hosting (temporary domain)

The site is a **static export**: `npm run build` writes plain HTML, CSS and JS to `out/`. Shared hosting needs no Node.js.
A ready bundle is in `sunoptics-hostinger.zip` (the contents of `out/`).

## Upload (about 5 minutes)
1. hPanel → **Websites** → pick the temporary domain (Hostinger gives each site a free preview domain such as `xxxx.hostingersite.com`). If none exists yet, add a website and choose the free temporary domain.
2. **File Manager** → open `public_html` and delete the default `index.html` / placeholder files.
3. Upload `sunoptics-hostinger.zip` into `public_html` and **Extract** it there. `index.html` and `.htaccess` must sit directly in `public_html`, not in a sub-folder. Turn on "Show hidden files" to confirm `.htaccess` is there.
4. Open the temporary domain and check Home, Services, Brands, Branches and `/search/?q=aviator`.

## Temporary domain settings
- `.env.production` sets `NEXT_PUBLIC_NOINDEX=1`, so `robots.txt` blocks crawlers and pages carry `noindex`. The preview will not appear in Google.

## When the client's domain is ready
1. In `.env.production` delete the `NEXT_PUBLIC_NOINDEX` line and add `NEXT_PUBLIC_SITE_URL=https://their-domain` (no trailing slash).
2. Add email, tagline and Maps links (see "Still pending" below).
3. Run `npm run build`, re-zip `out/` and upload it again.
4. Update the domain in `public/llms.txt` and `public/llms-full.txt`.

## Update workflow
```bash
npm install
npm run build        # creates out/
```
Then upload the contents of `out/` to `public_html`, replacing the old files.

## Still pending from the client
Founder photos, Google Maps links, Google reviews, community work numbers, email, social links, tagline, courier charges, Sunday timings. The shop products and prices are placeholders.

## Image credits
Photos in `public/images` are from Unsplash (free under the Unsplash License, attribution not required): eye-exam machine, eye close-up, frames display rack, frames on a display stand. Replace them with photos of the real branches when available.
