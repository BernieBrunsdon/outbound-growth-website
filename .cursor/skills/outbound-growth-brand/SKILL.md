---
name: outbound-growth-brand
description: >-
  Brand and UI rules for the Outbound-Growth marketing website. Use when editing
  landing pages, hero, sections, typography, copy, or Tailwind styles in this repo.
---

# Outbound-Growth brand (marketing site)

## Product truth
- Company: Outbound-Growth (Cape Town / remote-first)
- Offer: Dedicated South African SDR seats, full outbound stack included, flat retainer
- Differentiator: **OG Pulse** — live ops dashboard (calls, logs, Meeting Vault), not monthly PDFs
- Price on site: **$3,490 / £2,790** per month; 90-day pilot; no setup fees

## Typography
- Display / headlines: **Sora** (`font-display`)
- Body / UI: **Source Sans 3** (`font-sans` / default)
- Never use Inter, Roboto, Arial, or system UI as the brand look

## Color
- Navy / page bg: `#0B1220` (`navy`, `bg`)
- Surface panels: `#151F32` (`surface`)
- Nested panels: `#1A2640` (`panel`)
- Text: `#E8EEF7` (`ink`)
- Muted text: `#94A3B8`
- Primary CTA: `#488080` (logo teal)
- Primary hover: `#356666`
- Accent: `#5AA9A8`
- Section labels: `#7AB8B8`
- Header: translucent navy + blur (`bg-navy/80 backdrop-blur`), light link text
- No white global chrome; no purple accents; no bright blue CTAs

## Video backgrounds
- Hero zone (`why-sa-loop.mp4`, man from behind): sticky behind Hero + Solution intro
- Site body (`hero-loop.mp4`): sticky behind chapters, pricing, Why SA, and contact
- Use `StickyVideoZone` for multi-section spans; `VideoBackdrop` for a single section if needed
- Header has no bottom border (open into the hero video)
- Always keep a dark gradient overlay for text contrast
- Keep files ~2–8 MB; section panels over video should be translucent (`bg-surface/70`), not solid white

## Layout rules
- First viewport: brand name at hero scale, one headline, one short supporting line, one CTA group, one dominant full-bleed visual (OG Pulse UI as atmosphere/background is preferred)
- Do **not** put stats strips, bullet clusters, or secondary promo chips in the first viewport
- No pill badges (“Chapter N”, “Flat monthly retainer”, floating status stickers)
- No decorative icon-placeholder cards with floating accent dots
- Cards only when they contain a real interaction (forms). Prefer borders / editorial lists over soft shadow mega-cards
- Section labels: short, sentence-case or light emphasis — not shouty ALL CAPS tracking-widest chrome
- Prefer numbered editorial lists over 3-column feature grids

## Copy voice
- Short, specific, human
- Lead with proof: SA SDRs, price, OG Pulse visibility
- Avoid thesaurus B2B: Premium, Elite, Force Multiplication, Black Box, Transform Your Sales, meticulously, rigorously, relentless
- One primary CTA label site-wide: **Book a Discovery Call**

## Motion
- At most 2–3 intentional motions (e.g. hero rise/fade)
- No mount `fade-in` on every section

## Assets to prefer
- `/public/images/logo-cropped.png` (header)
- `/public/images/og-pulse-dashboard-preview.png`
- `/public/images/og-pulse-app-real.png`
- `/public/images/og-pulse-multidevice-preview.png`
- `/public/images/og-pulse-solution-showcase.png`
- Real photography when available (team / Cape Town) — never generic Unsplash handshake stock

## Anti-AI checklist before shipping
- [ ] Inter is not loaded
- [ ] Hero works with nav removed (brand still obvious)
- [ ] No pills / icon cards / Live Engine stickers
- [ ] Headlines sound like Outbound-Growth, not a template
- [ ] Price and OG Pulse still visible and concrete
