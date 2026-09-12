# Alon Hanin — Business Systems & Digital Solutions

A bilingual React + Vite + TypeScript website, deployed to Cloudflare Pages.
English is the default language; Hebrew uses RTL. Language selection persists
between pages.

## Pages

| URL | Content |
| --- | --- |
| `/` | Short homepage: introduction, three service summaries, WineOps and A.P previews, contact invitation |
| `/services/` | Services, expandable details, three-stage process and common questions |
| `/work/` | Project covers and summaries; desktop grid and mobile swipe carousel |
| `/work/<project-id>/` | Project images, scope, contribution and contact link |
| `/contact/` | Contact options followed by background and qualifications |
| `/accessibility/` | Accessibility statement, remote-only service and contact details |

Navigation uses normal links. The browser handles back/forward, opening new tabs
and restoring scroll positions. Mobile has a fixed bottom navigation with space
reserved so it does not cover the end of the page; desktop has header navigation.

Project cards open an accessible case-study dialog on an ordinary click. Closing
it returns focus to the card and preserves the list's position. Modifier-clicks
and the link inside the dialog open the permanent project page. Both presentations
share `ProjectStory`. Product covers and story galleries use CSS device/browser frames around the existing
screenshots; no reference-site artwork or project claims are used.

The Vite `page-entries` plugin generates an HTML entry for each route, plus
`404.html`, from the built index. Each entry loads the shared React application,
which renders the matching page. This is client rendering with separate HTML
entries, not server rendering. Direct links and refreshes work on Cloudflare
Pages without a catch-all redirect.

Legacy homepage links such as `/#projects`, `/#services`, `/#how-i-work` and
`/#contact` redirect to their new page in `src/main.tsx`.

## Development

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

Build output is `dist/`. Vite preview is useful for checking the generated page
entries. Cloudflare Pages serves the generated `404.html` for unknown paths;
the local Vite development server may use its own HTML fallback.

## Editing content

| File | Purpose |
| --- | --- |
| `src/config/routes.ts` | Navigation, paths and page titles; project routes follow project data |
| `src/pages/HomePage.tsx` | Short homepage summaries and the two featured project IDs |
| `src/pages/ServicesPage.tsx` | Service audience summaries, process and FAQ |
| `src/pages/ContactPage.tsx` | Contact page introduction |
| `src/pages/ProjectPage.tsx` | Shared detail page for every project |
| `src/components/ProjectStory.tsx` | Shared challenge, contribution, gallery and capabilities |
| `src/components/ProjectCollection.tsx` | Desktop grid and mobile project carousel |
| `src/components/ProjectCover.tsx` | Screenshot selection and device presentation for cards |
| `src/data/siteContent.ts` | Hero headline, about content, contact labels and shared section copy |
| `src/data/services.ts` | Detailed service descriptions and examples |
| `src/data/projects.ts` | Project text, status, sanitized images and publication settings |
| `src/data/projectImages.ts` | Ordered gallery images with bilingual descriptions and captions |
| `src/config/site.ts` | Brand details and the global `showProjects` switch |
| `src/config/contact.ts` | WhatsApp, email and social links |

Keep project IDs aligned between English and Hebrew. Set `published: false` in
both languages to hide a project from the catalog and generated routes. Only
projects marked `in-development` show a status badge. The original long-form
section components and their content remain available for future use.

## Project images

Web-ready images live in `public/projects/`. The original `pic/` folder is
excluded from Git because source screenshots can contain identifying details.
Only reviewed, sanitized images should be copied into `public/`.
Editing provenance is recorded in `output/imagegen/projects-prompt.md`.

Project detail galleries support touch swipes, previous/next buttons and arrow,
Home and End keys. They do not autoplay or link to the original image file.
This presentation does not prevent screenshots or saving publicly served images.
The current numbered PNGs are copied directly from the owner's prepared images:
A.P 1–3, ThinkGreen 1–4 and BI 1–2. WineOps and Cat4U each have one image.

## Accessibility

Display preferences (text size, contrast, link underlines and reduced motion)
are stored locally when browser storage is available. The launcher can be hidden
with X and restored using Accessibility options in any footer. The dialog supports
keyboard focus cycling and Escape. System reduced-motion preferences remain respected.

Automated axe-core scans and keyboard/browser checks are development checks, not
certification of legal compliance. The statement documents actual checks and known
limitations; a full expert and screen-reader audit is still outstanding.

For repeatable automated checks, use Node 24+, run a production preview on port
5191, and launch a dedicated Chrome profile with remote debugging on port 9226.
Then run `npm run audit:a11y`. Optional positional arguments override the preview
URL and Chrome debugging URL. The script navigates the dedicated browser tab and
resets its site preferences. It scans both languages, mobile and desktop, and
the preferences dialog; results are written to `tmp/accessibility-audit.json`.

## Deployment

Cloudflare Pages is connected to GitHub:

- Build command: `npm run build`
- Output directory: `dist`
- Production branch: `main`

Push completed changes to `main` to trigger the connected deployment. A successful
Git push does not itself confirm that Cloudflare finished deploying.
