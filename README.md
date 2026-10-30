# Thushitha Senarath — Portfolio

A Next.js recreation of the reference landing page, personalized with your name, built with Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Colors used (from the reference design)

| Name    | Hex       | Used for                          |
|---------|-----------|------------------------------------|
| Cream   | `#F5F1E7` | Page background                    |
| Ink     | `#173F3A` | Headings, body text, nav           |
| Gold    | `#E8A63A` | Name accent, sweater, icons, ring  |
| Forest  | `#2E5C50` | Button, "(Home)" accent, script    |

These are defined in `tailwind.config.ts` as `cream`, `ink`, `gold`, `forest`, `muted`.

## Fonts used

- **Kalam** (handwritten display) — headline text ("Hy! I Am", name, logo, "08 Years")
- **Yellowtail** (script) — the "Creative" signature text
- **Poppins** (body) — nav links, paragraphs, UI text

Fonts are self-hosted via `@fontsource` packages (no external Google Fonts requests needed, works offline).

## Swapping in your own photo

The circular hero photo currently uses a placeholder illustration at
`public/avatar-placeholder.svg` (a generic stylized figure — not a real photo,
since the reference image was of someone else).

To use your own photo:
1. Add your photo to `public/`, e.g. `public/me.jpg`
2. In `app/page.tsx`, find the `<Image src="/avatar-placeholder.svg" .../>` tag
   and change `src` to `/me.jpg`

## Structure

```
app/
  layout.tsx     - root layout, fonts, metadata
  page.tsx       - the landing page (navbar + hero)
  globals.css    - global styles, font variables
public/
  avatar-placeholder.svg
tailwind.config.ts - color + font tokens
```

## Responsiveness

- Desktop (lg+): three-column hero (text / photo / stats card), full nav
- Tablet/mobile: stacked single column, hamburger menu, photo scales down
