# Oscar Folha Portfolio

Premium multilingual portfolio website built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and next-intl.

## Stack

- Next.js 16 with App Router
- TypeScript
- Tailwind CSS 4
- Framer Motion
- next-intl for localized routes and translations
- next-themes for dark/light mode
- Lucide React icons

## Features

- Localized routes: `/en`, `/pt`, `/es`, `/fr`, `/de`, `/zh`
- Dark mode by default with light mode toggle
- Sticky glassmorphism navigation with mobile menu
- Responsive hero, about, experience, projects, gallery, and contact sections
- Photo gallery with keyboard-accessible lightbox modal
- Validated contact form that opens a pre-filled email draft without backend setup
- SEO metadata, sitemap, robots, and localized alternates
- Downloadable CV button

## Project Structure

```text
src/
  app/
    [locale]/
      layout.tsx
      loading.tsx
      page.tsx
    layout.tsx
    page.tsx
    robots.ts
    sitemap.ts
    globals.css
  assets/
    gallery.ts
  components/
    layout/
    providers/
    ui/
  hooks/
  i18n/
    messages/
    navigation.ts
    request.ts
    routing.ts
  sections/
  utils/
public/
  gallery/
  oscar-folha-cv.pdf
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open `http://localhost:3000`.

## Production Checks

```bash
npm run lint
npm run build
```

## Customization Notes

- Main personal data and social links live in `src/utils/site-config.ts`.
- Localized copy lives in `src/i18n/messages/*.json`.
- Placeholder project cards can be replaced via `src/utils/portfolio.ts` and the `Projects` translation namespace.
- Gallery image sources are defined in `src/assets/gallery.ts`.
- Replace the placeholder GitHub and LinkedIn URLs in `src/utils/site-config.ts`.
- Update `siteUrl` in `src/utils/site-config.ts` before deployment.

## Contact Form

The contact form is ready to run without backend infrastructure. It validates inputs on the client and opens the user’s email client with a pre-filled draft addressed to `oscarfolha@hotmail.com`.

If you want server-side email delivery later, the form can be connected to an API route or third-party email service without changing the page structure.
