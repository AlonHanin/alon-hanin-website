# Selected project images

## September 2026 gallery update

The current A.P, ThinkGreen and BI assets are numbered PNGs copied unchanged from
the owner's prepared screenshots: `ap-1.png` through `ap-3.png`,
`thinkgreen-1.png` through `thinkgreen-4.png`, and `bi-1.png` through `bi-2.png`.
BI includes the supplied data model and dashboard. The older A.P, ThinkGreen and
BI JPEGs below have been retired. The following prompts are historical provenance
for the earlier presentation, not edits applied to the current numbered PNGs.

## Earlier presentation

Final web assets are in `public/projects/`. Original screenshots in `pic/` remain local and are excluded from Git.

- `wineops.jpg`: original supplied WineOps welcome screen, JPEG encoding only. This is a product in development; on-screen numbers are not used as marketing performance claims.
- `cat4u.jpg`: original supplied homepage, JPEG encoding only.
- `bi-dashboard.jpg`: original supplied analytics dashboard, JPEG encoding only.
- `ap-budget.jpg`: edited close-up of the annual budget area; excludes the building names, sidebar, branding and development controls. Caption identifies this as an edited close-up.
- `thinkgreen.jpg`: edited presentation of the challenges and rewards screens; excludes the user profiles and report photographs. Caption identifies this as an edited presentation.

A.P and ThinkGreen were edited with the built-in image_gen tool. These are edited portfolio presentations, not pixel-exact archival captures. The original full screenshots and architecture/database diagrams are not published. All JPEGs are encoded at quality 88.

## A.P prompt

Use case: precise-object-edit. This is a REAL software screenshot for a portfolio. Only crop it, do NOT regenerate, restyle or rewrite any part of the interface. Output a clean rectangular crop containing ONLY the existing annual budget table and its section title 'תקציב שנתי' from the lower main content area. Crop rectangle approximately x=50,y=312 through x=1180,y=864 in the source 1577x899 screenshot. Absolutely exclude the top header, property name, right sidebar, building names, and development/Drive setup buttons. Retain the table typography, Hebrew labels, numbers, rows and colors exactly as in the source. No made-up filled values, no additional UI, no new frame, no watermark. Preserve the original screenshot inside the crop.

## ThinkGreen prompt

Use case: precise-object-edit. This is a REAL app screenshot montage for a portfolio. Extract ONLY the existing SECOND phone from the left, headed 'Weekly Challenges', and the existing FOURTH phone from the left, headed 'Available Rewards'. Place those two unchanged phone screenshots side by side on the original very pale green background, with a modest space between them. Remove the first phone and third phone entirely: they contain personal names and photos which MUST NOT appear in the output. Remove slide number and footer. Preserve the selected two phones exactly: identical UI, text, icons, quantities, colors and phone outlines. Do not redesign or invent any screen content. Two phones only, full phone frames visible, landscape canvas approximately 650x540, no text outside the phones.
