# AI Workflows Library (EN+RU) — Cloudflare Pages Starter

This repo is designed for **Cloudflare Pages + GitHub**:
- commit changes -> Cloudflare Pages auto-deploys (Git integration).
- start on free `*.pages.dev`, attach custom domain later.

## 1) Quick start (local)
1. Install Node.js (any recent LTS).
2. Run:
   - `npm install`
   - `npm run start` (local preview)
   - `npm run build` (outputs to `dist/`)

## 2) Cloudflare Pages (recommended)
- Create a GitHub repo and upload these files.
- In Cloudflare Dashboard -> Pages -> Create a project -> Connect to Git.
- Build settings:
  - Build command: `npm run build`
  - Build output directory: `dist`

## 3) Set your site URL
Edit `src/_data/site.json` -> `url`:
- from `https://YOUR-SITE.pages.dev` to your Pages URL (later to your custom domain).
This is used for canonical and sitemap.

## 4) Bilingual setup
- English: `/en/...`
- Russian: `/ru/...`
Each page has a `translationKey` so the layout can render hreflang alternates.

## 5) Notes
- This starter is tool-agnostic. You can add specific tool pages later.
- Always verify AI outputs before using them in real contexts.
