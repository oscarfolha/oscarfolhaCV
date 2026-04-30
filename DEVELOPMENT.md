# Development Guidelines

## Quick Start
```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # Test production build
```

## Project Structure Quick Reference
- `src/app/` - Next.js App Router pages (6 localized routes)
- `src/sections/` - Page section components
- `src/components/ui/` - Reusable UI components  
- `src/i18n/messages/` - Translation files (6 languages)
- `public/gallery/` - Gallery images
- `vercel.json` - Deployment configuration

## Important Context
- **Multilingual**: 6 languages (en, pt, es, fr, de, zh) - always sync all translation files
- **Themeable**: Dark/light mode with Tailwind CSS - use `light:` prefix variants
- **Animated**: Framer Motion for smooth transitions
- **Internationalized**: next-intl framework for routing and translations
- **Deployed**: Vercel with App Router (no environment variables needed)

## Before You Code
1. All text must have translations in all 6 language files
2. Check light mode contrast for any new colored elements
3. Test responsive design on mobile sizes
4. Verify external links open in new tabs, internal anchors don't
