# Living in Pixel

Living in Pixel is a studio landing site for a digital product and brand systems consultancy. It showcases services, work, process, and testimonials with a performance-focused, motion-rich experience.

## Overview
Living in Pixel builds high-performance digital products, brand systems, and growth-focused web experiences for startups and founders.

## Highlights
- Next.js App Router site with React 18 and TypeScript.
- Tailwind CSS styling with custom motion and interaction hooks.
- Structured data (Organization, WebSite, ProfessionalService) for SEO.
- Auto-generated `sitemap.xml`, `robots.txt`, and web manifest.
- Content centralized in a single data module for services, work, and testimonials.

## Tech Stack
- Next.js 16
- React 18
- TypeScript
- Tailwind CSS + PostCSS

## Project Structure
- `src/app` App Router entry, metadata routes, global styles.
- `src/features/landing` Landing page components, hooks, and content.
- `src/lib` SEO constants and helper utilities.
- `public` Static assets.

## Content Updates
- Update services, work, process, and testimonials in `src/features/landing/data/content.ts`.
- Update hero copy and CTAs in `src/features/landing/components/HeroSection.tsx`.
- Update site name, description, and canonical URL in `src/lib/seo.ts`.
- Update brand assets in `public/logo.svg` and `src/app/icon.svg`.

## Environment Variables
The site uses the following environment variable for canonical URLs and metadata routes:

```
NEXT_PUBLIC_SITE_URL=https://livinginpixel.com
```

If not set, it defaults to `https://livinginpixel.com`.

## Getting Started
1. Install dependencies:

```
npm install
```

2. Run the development server:

```
npm run dev
```

Then open `http://localhost:3000`.

## Scripts
- `npm run dev` Start the dev server.
- `npm run build` Create a production build.
- `npm start` Run the production server.
- `npm run lint` Run linting.

## Deployment
1. Set `NEXT_PUBLIC_SITE_URL` for the target environment.
2. Build the app:

```
npm run build
```

3. Start the server:

```
npm start
```

The app can be deployed on any Node.js hosting that supports Next.js.

## Contact
For inquiries, reach out at `hello@livinginpixel.com`.
