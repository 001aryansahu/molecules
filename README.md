# The Moleculez — Premium React/Vite Frontend

## What changed

- Reworked navigation into a responsive premium header.
- Removed the API / Intermediate / Herbal Products navigation entries.
- Legacy product URLs redirect to the unified Products catalogue.
- Added a responsive Products mega-menu with desktop hover/focus and mobile tap interaction.
- Added centralized product catalogue data at `src/data/products.ts`.
- Integrated the uploaded Moleculez Product List PDF into the product catalogue.
- Added category routes such as `/products/antibacterial`.
- Added product search across product name, dosage form, composition/strength and category.
- Product catalogue uses an accessible table layout with mobile horizontal scrolling.
- Removed carousel arrows; Swiper now uses autoplay and pagination only.
- Removed Google Fonts network loading to reduce render blocking.
- Added dynamic page titles, descriptions, canonical URLs, Open Graph metadata and Organization JSON-LD.
- Added `robots.txt` and `sitemap.xml`.
- Added Vercel and Netlify-compatible security header configuration including `X-Content-Type-Options: nosniff`.
- Converted local raster assets to WebP.
- Added responsive/motion-safe CSS and premium interaction styling.
- Removed obsolete API, Intermediate and Herbal page modules and their old data module.

## Product source

The product catalogue is based on `Moleculez-Product-List.pdf`. Source terminology is intentionally preserved where the PDF contains ambiguous/OCR-like wording.

## Development

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm run preview
```

The project uses BrowserRouter, so production hosting must rewrite application routes to `index.html`. `vercel.json` is included for Vercel. `public/_headers` is included for Netlify-style deployments.

## Important

The production build could not be executed in this environment because the npm registry dependency cache was incomplete (`yallist-3.1.1.tgz` was unavailable offline). The source was statically checked for removed legacy route references and the expected product/category/SEO/security files were verified.

## Form email configuration

The Enquiry form is wired to the FormSubmit AJAX endpoint so it can send submissions without adding a backend to this frontend project. The current testing recipient is configured as `aryansahu0010@gmail.com`.

To change the recipient for production, set this Vite environment variable before building:

```env
VITE_FORM_ENDPOINT=https://formsubmit.co/ajax/your-production-email@example.com
```

The first submission to a new FormSubmit recipient requires email confirmation/activation. FormSubmit's documentation also supports a generated endpoint if you prefer not to expose the mailbox address in the client bundle.

## Logo

The supplied transparent Moleculez logo is used in the header and footer. The preloader intentionally does **not** use the logo image; it uses typography and a lightweight vector-style FlaskConical icon instead.

## Final polish pass verification

The source was statically reviewed after the responsive/logo/form changes. A full Vite production build was not completed in this environment because the local dependency installation remained incomplete; run `npm install` followed by `npm run build` before deployment.
