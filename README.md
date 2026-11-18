# Commercial (Next.js)

Next.js version of the `project__commercial` website, built with React, TypeScript, Tailwind CSS, SCSS Modules and ESLint.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Requires Node.js 22.12+ (see `.nvmrc`).

## Scripts

| Command             | Description                                  |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Start the development server                 |
| `npm run build`     | Static export to `out/`                      |
| `npm run lint`      | Run ESLint                                   |
| `npm run typecheck` | Type-check with TypeScript                   |
| `npm run format`    | Format code with Prettier                    |

## Routes

| Route         | Original file     |
| ------------- | ----------------- |
| `/`           | `1.home.html`     |
| `/blog`       | `2.blog.html`     |
| `/about`      | `3.about.html`    |
| `/contact-us` | `4.contact-us.html` |

## Project structure

```
src/
  app/                  layout (header + footer), pages, globals.scss
  components/
    layout/             Header (desktop nav + mobile drawer), Footer, Logo
    ui/                 ButtonLink, PageBanner, SectionTitle, icons
    home/               one component per home section (+ SCSS Modules)
    blog/               PostCard, RecentPosts sidebar
    about/              About page styles
    contact/            ContactSection (shared by home and /contact-us), ContactForm
  data/                 site content: posts, services, team, gallery, ...
  hooks/                useInView (scroll reveal), useCountUp (animated counters)
  styles/               _tokens.scss, _mixins.scss
  assets/images/        images imported through next/image
public/images/backgrounds/   images referenced from CSS url()
```

## What replaced the old JavaScript

| Original            | Now                                                                 |
| ------------------- | ------------------------------------------------------------------- |
| `2.header.js`       | `Header.tsx` (state-driven mobile menu, active link from the route) |
| `3.footer.js`       | `Footer.tsx`                                                        |
| `1.star.js`         | removed; `next/font` loads the font, `react-icons` replaces CDN icons |
| `4.home.js` sliders | `HeroSlider`, `ImageSlider`, `CustomersCarousel` (React state)      |
| scroll listeners    | `useInView` (IntersectionObserver) and `useCountUp`                 |
| `7.contact-us.js`   | `ContactForm.tsx`                                                   |

## Tailwind vs. SCSS

- **Tailwind**: small layout and typography helpers.
- **SCSS Modules**: section styles, responsive rules (via the `below()` mixin), animations and hover effects.
- Brand colors live in `src/styles/_tokens.scss` and `tailwind.config.ts`; keep both in sync.

## Deploying to Cloudflare

The site is exported statically (`output: 'export'`) and `wrangler.jsonc` serves the `out/` folder.

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Wrangler needs Node.js 22.12+: pinned in `.nvmrc` and `.node-version` (or set `NODE_VERSION=22` in the build variables).

## 🚀 Live Demo

You can view the live version of this project here: [**View Live Site**](https://project-commercial-next-ts.amir-computer-04-ir.workers.dev/)
