# Aero A2Z Services — Website

Marketing website for **Aero A2Z Services Pvt Ltd**, manufacturers of mission critical
hemispheric radar systems (powered by DRS RADA Technologies).

Built with React 19 + Vite + Tailwind CSS 3 + react-router-dom + react-icons.

## Run

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
npm run lint
```

## Pages

| Route | Page |
| --- | --- |
| `/` | Home — hero, capabilities, radar family, mission applications, CTA |
| `/about` | About — company, principles, DRS RADA partnership, facilities |
| `/products` | Products — radar systems + mission applications tabs, spec matrix |
| `/products/:slug` | Product detail — features, radar specifications, related systems |
| `/contact` | Contact — offices, enquiry form |

## Structure

```
src/
  assets/            logo.png (original), logo-mark.png (transparent), products/*
  components/        Navbar, Footer, Layout, PageHero, SectionHeading,
                     ProductCard, Reveal, Icon
  data/products.js   All product / application / capability content
  pages/             Home, About, Products, ProductDetail, Contact
  index.css          Tailwind layers + design-system component classes
tailwind.config.js   Brand palette, fonts, animations
postcss.config.js    Tailwind + autoprefixer
```

## Design tokens

| Token | Value | Use |
| --- | --- | --- |
| `navy-900` | `#131827` | Page background (logo background) |
| `navy-950` | `#080C16` | Alternate section background |
| `navy-700` | `#212937` | Cards / panels |
| `brand-red` | `#D02622` | Primary accent, CTAs |
| `brand-steel` | `#A9B4C6` | Body text |

Fonts: **Barlow Condensed** (display), **Barlow** (body), **JetBrains Mono** (labels).

## Content sources

All product names, features, radar specifications and addresses are taken from the
company brochure (`Brochure 5.2.2025.pdf`). Product imagery was extracted from the
brochure and optimised for web (max 1600 px wide, JPEG q82).

## Notes

- The contact form is front-end only — on submit it builds a `mailto:` payload to
  `info@aeroa2z.com`. Wire it to a backend/endpoint when one is available.
- Add real social profile URLs in `src/components/Footer.jsx`.
