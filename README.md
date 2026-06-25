# Yesaya Pasaribu — Security Portfolio

A dark, terminal-inspired portfolio for an offensive security researcher
(OSCP · CEH · CRTOM). Built with Next.js 14, Tailwind CSS and Framer Motion.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Deploy

Push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new).
Vercel auto-detects Next.js — no configuration needed.

## Structure

- `app/` — layout, global styles, page composition
- `components/` — section components (Hero, About, Certifications, Research, …)
- `data/content.ts` — all editable content (single source of truth)
- `public/assets/` — certificates, photo, CV PDF
