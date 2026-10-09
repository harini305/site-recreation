# Samadi Bali — website

A frontend-only rebuild of [samadibali.com](https://samadibali.com): **Samadi Bali's content and photography**, presented with a
**House of Om–inspired** editorial UI (Bagnard + Inter, calm white/cream layouts, glass panels, coral calls to action).

Next.js 16 (App Router, static generation) · TypeScript · CSS Modules · GSAP + ScrollTrigger. No backend, database or API
routes — every booking/contact action goes to WhatsApp, email, phone, Google Maps, Megatix or samadisupermarket.com.

## Run it

```bash
npm install
npm run dev          # http://localhost:3000 (development)
npm run build        # production build (all pages pre-rendered)
npm run start        # serve the production build on :3000
npm run lint
```

## Where things live

| Path | What |
| --- | --- |
| `src/content/*.ts` | **All site copy and data** — prices, schedule, teachers, events, detox programs, training intakes, FAQ, journal, legal. Edit here; pages update automatically. |
| `src/content/media.ts` | Generated list of every image (path, size, alt). Don't edit by hand. |
| `src/app/**/page.tsx` | One file per route (see sitemap below). |
| `src/components/layout` | Header (dropdowns + side menu), MenuDrawer, Footer. |
| `src/components/sections` | Reusable page blocks: PageHero, cards, place panels, stat bands, schedules, accordions, teacher carousel/directory, video. |
| `src/components/ui` | Primitives: Button, Img, Icon, Tabs, Carousel, headings. |
| `src/components/motion` | `MotionProvider` (GSAP/ScrollTrigger, driven by `data-reveal`, `data-image-reveal`, `data-parallax`, `data-counter`) and `RevealText`. |
| `src/styles/tokens.css` | Design tokens — colours, fluid type/space scales (360–1600px), radii, motion timings. |
| `public/images`, `public/video` | Optimised local copies of Samadi's assets. |
| `scripts/` | Asset pipeline (below). |

### Common edits

- **Weekly schedule** → `weeklySchedule` in `src/content/yoga.ts` (each class has its Megatix link).
- **Events & workshops** → `src/content/events.ts`. One-off events with a `date` disappear automatically after that day.
- **Teacher-training intakes** → `intakes` in `src/content/training.ts`. Past intakes are hidden automatically.
- **Detox prices** → `price` in `src/content/detox.ts`. Programs without a price show “Contact for price”.
- Pages with dates (home, yoga, events, teacher training) regenerate daily (`revalidate = 86400`).

## Asset pipeline

samadibali.com currently serves an **expired TLS certificate** and returns 502s under parallel load, so images can't be
hot-linked. Assets are downloaded once and committed in optimised form:

```bash
npm run assets:fetch      # originals -> .assets-raw/ (sequential, retries; git-ignored)
npm run assets:optimize   # -> public/images/*.webp + src/content/media.ts
```

Add or swap an image in `scripts/asset-manifest.mjs`, then run both commands. Sources are kept at up to 2560 px / WebP q92 so
`next/image` re-encodes once; `Img` widens `sizes` automatically when a photo is cropped into a narrower frame.

**Home hero video** — a 22.5 s muted loop cut from caption-free scenes (4–7.5 s and 11.5–30.5 s) of Samadi's own
“SAMADI CANGGU AMBIENCE” film (YouTube `3OPbXtf9Veg`, linked from their About page): `public/video/hero-1080.mp4` (8 MB,
desktop) and `hero-720.mp4` (3.2 MB, mobile), with a still poster (`hero/video-poster`). Visitors can pause it; with
reduced motion enabled only the poster is shown. `next/image` additionally serves AVIF/WebP
at the right size per device. The teacher-training film (`public/video/wytt-720.mp4`, 10.7 MB, from Samadi's 79 MB 4K
original) only loads when a visitor presses play; `training/film-*` stills were extracted from caption-free frames.

## Sitemap

`/` · `/about` · `/spaces` · `/yoga` · `/yoga/schedule` · `/yoga/teachers` · `/yoga/private` · `/events` ·
`/teacher-training` · `/wellness` · `/wellness/detox` · `/wellness/detox/[3-day|5-day|7-day|7-day-liver|10-day|14-day|21-day]` ·
`/wellness/ayurveda` · `/wellness/theta-healing` · `/eat-shop/restaurant` · `/eat-shop/market` · `/eat-shop/shop` ·
`/eat-shop/sunday-market` ·
`/journal` · `/journal/[slug]` · `/faq` · `/contact` · `/privacy-policy` · `/disclaimer`

Old samadibali.com URLs (e.g. `/about-us`, `/yoga-schedules`, `/3-days-detox-program`, `/wytt-…`) 308-redirect to their new
pages — see `next.config.ts`.

## Content gaps carried over from the source site

These were **not invented** — they need input from Samadi:

- Founder and team pages are empty on samadibali.com (redirected to `/about` for now).
- 10-, 14-, 21-day and 7-day liver detox have no published price (shown as “Contact for price”); their copy and day plans
  repeat the 3-day template on the source. Cut-off sentences in the source were tidied without adding claims.
- No restaurant menu link or café opening hours; Sunday Market time is only “every Sunday morning”.
- No published bios for Danielle, Leona and Lala (their cards use the photos Samadi assigns them in its teacher slider).
  The source spells the breathwork teacher both “Anshu” and “Anshul”.
- WYTT faculty is not named on the source, so no teacher photos are attached to the training page.
- Only a raster logo (512 px) exists — an SVG would sharpen it on large screens.
- AI-generated (Gemini) images and theme stock photos on the old site were deliberately excluded.

## Fonts

Bagnard (headings) — © Sébastien Sanfilippo, SIL Open Font License 1.1 (`src/fonts/Bagnard-OFL.txt`), self-hosted.
Inter (body) via `next/font/google`. Bagnard has no en/em dashes or straight quotes; those characters fall back to Georgia.
