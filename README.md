# Alon Hanin — Business Systems & Digital Solutions

A bilingual (English default / Hebrew RTL) one-page business site built with
React + Vite + TypeScript + Tailwind CSS, ready to deploy on Cloudflare Pages.

## Local development

```bash
npm install
npm run dev
```

The site runs at the URL printed in the terminal (usually `http://localhost:5173`).

## Production build

```bash
npm run build
```

Output goes to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Deploying to Cloudflare Pages

1. Push this repo to GitHub.
2. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**, select the repo.
3. Build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Framework preset**: Vite (or None + the manual settings above)
4. Save and deploy. Every push to the main branch builds and deploys a new version automatically.

### Custom domain

Pages project → **Custom domains** → **Set up a custom domain**, enter the domain
and follow the prompts (if the domain is already managed on Cloudflare, DNS updates automatically).

## Project structure

```text
src/
  components/     Reusable UI pieces (button, nav, footer...)
  sections/       The homepage sections (Hero, Services, Projects...)
  data/           All copy, in both languages — this is what you edit
  config/         Configuration: brand name, contact details
  i18n/           Language context (English/Hebrew toggle + persistence)
  types/          Shared TypeScript types
  App.tsx         Assembles every section into one page
```

## Where to edit content

Every piece of content lives in `src/data/` and `src/config/` — no need to touch
React components. Each string is a `{ en, he }` pair; edit whichever language you need.

| File | What's in it |
| --- | --- |
| `src/data/siteContent.ts` | Hero headline, "the business grew" section, "how I work", "about", contact copy, nav labels, language-toggle label |
| `src/data/services.ts` | The 4 core services + the integrations note |
| `src/data/projects.ts` | **Add a new project here** — push another `{ en: {...}, he: {...} }` pair with a matching `id` and `status` |
| `src/data/process.ts` | The 5 process steps |
| `src/data/differentiators.ts` | The "why work with me" reasons |
| `src/config/site.ts` | Brand name and short descriptor, per language |
| `src/config/contact.ts` | **WhatsApp number, email, LinkedIn, GitHub** — see below |

### Setting up WhatsApp / Email

In `src/config/contact.ts`:

```ts
export const contact = {
  whatsapp: "972501234567", // digits only, international format, no "+"
  email: "you@example.com",
  linkedin: "https://www.linkedin.com/in/your-profile",
  github: "",
};
```

This is currently filled with your real contact details (email, phone, LinkedIn)
from the CV you shared. If you'd rather use a separate business number for
WhatsApp, update it here. Leaving any field as `""` automatically hides that
button on the site — it's always safe to leave a field empty.

## Language switching (i18n)

- The site defaults to **English** on first visit; a toggle in the nav bar
  (and mobile menu) switches to **Hebrew**, updating `<html lang>` and
  `<html dir>` (`ltr`/`rtl`) on the real document element — not a CSS trick.
- The choice is remembered in `localStorage`, so a returning visitor keeps
  their language.
- Every content file in `src/data/` exports both languages side by side
  (`{ en: [...], he: [...] }`), read via the `useLanguage()` hook
  (`src/i18n/LanguageContext.tsx`). Adding a third language later means adding
  a key next to `en`/`he` in each data file and in the `Lang` type
  (`src/types/index.ts`) — no structural rewrite needed.

## Key design decisions

- **Typography**: [Heebo](https://fonts.google.com/specimen/Heebo) for both
  headings and body text — a single modern, technical typeface with excellent,
  purpose-built Hebrew glyphs (not a Latin font awkwardly repurposed for RTL).
  [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) is used
  for small technical labels (tech-stack tags, the contact email).
- **Color**: near-black ink, white paper, and a single blue family as the
  accent — from deep navy through a vivid primary blue to a light cyan-blue
  highlight (`--color-accent`, `--color-accent-deep`, `--color-accent-light`,
  `--color-accent-2` in `src/index.css`). No secondary hues — a deliberately
  monochrome-blue accent for a premium, technology-forward feel.
- **Hero**: a dark navy hero with a soft blue radial glow and a fine grid
  texture, opening the page with the "tech" register before the rest settles
  into white. The visual shows scattered "Excel / WhatsApp / Email / Notes"
  chips settling into one organized system panel — a direct illustration of
  the core pitch, not generic decoration.
- **Real RTL**: `dir` and `lang` are set on the `<html>` element itself at
  runtime (`src/i18n/LanguageContext.tsx`), not faked with CSS. Tailwind and
  flex/grid layouts flip automatically as a result.
- **No unnecessary libraries**: no React Router (not needed for one page), no
  external animation library — every animation is plain CSS and respects
  `prefers-reduced-motion`.

## Not implemented yet (on purpose)

Kept simple for a first version, easy to extend later:

- Per-project case-study pages
- Blog / articles
- A contact form with a backend (currently WhatsApp + direct email)
- Analytics
- Privacy / terms pages
