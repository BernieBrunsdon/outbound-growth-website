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
- Primary: `#0B63D6`
- Accent: `#06A77D`
- Ink: `#0F1724`
- Muted: `#5B6472`
- Page bg: `#F7F8FA` (`bg`)
- Surface: `#FFFFFF`
- No purple accents. No purple-on-white SaaS gradients. No glow stacks.

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
