# Zulqarnain Saeed — Personal Portfolio Website

[![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE.svg?style=flat&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6.svg?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7.svg?style=flat&logo=netlify&logoColor=white)](https://netlify.com)

A high-performance, agency-grade personal portfolio website engineered for **Zulqarnain Saeed** — Computer Science undergraduate at the University of Central Punjab (UCP), Lahore, systems explorer, and founder of [Zentorix](https://zentorix.netlify.app/).

Designed with an aesthetic comparable to award-winning creative studio portfolios while strictly prioritizing readability, recruiter usability, sub-second load times, and authentic verified credentials.

---

## 🌟 Key Highlights & Engineering Features

- **Zero-Hydration Static Architecture:** Built with modern **Astro** and static HTML generation for near-zero runtime JavaScript overhead and instant page loads.
- **Tailwind CSS v4 Engine:** Utilizes the high-speed `@tailwindcss/vite` compiler with custom design tokens, dark/light themes, and fluid typography.
- **Deep-Dive Case Studies:** Major featured projects include interactive technical drawers detailing Problem Statement, Algorithmic Approach, Architecture, and Concrete Engineering Outcomes.
- **Authentic Technical Visualizations:** Bespoke ASCII/code diagrams for low-level systems projects (CPU scheduler, cosine similarity algorithm, OOP banking ledger) rather than deceptive mockups.
- **Functional Contact Pipeline:** Native Netlify Forms integration with anti-spam honeypot, asynchronous submission handling, and automated `mailto:` fallback.
- **A11y & Keyboard Navigation:** Screen-reader "Skip to content" anchor, visible focus indicators, Escape key modal handling, and semantic HTML5 hierarchy.
- **Complete SEO Suite:** Automated OpenGraph social previews (`og:image`), dynamic XML sitemap generation (`sitemap-index.xml`), canonical URLs, and `robots.txt`.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Astro](https://astro.build/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite` |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (Strict Mode) |
| **Typography** | Space Grotesk (Headings), Inter (Body), JetBrains Mono (Code/Metrics) |
| **Deployment** | [Netlify](https://www.netlify.com/) (`netlify.toml` preconfigured) |
| **Icons** | Clean, accessible inline SVGs |

---

## 📁 Repository Structure

```text
zs-portfolio/
├── public/
│   ├── favicon.svg             # Bespoke monogram favicon
│   ├── og-image.svg            # 1200x630 social preview card
│   └── robots.txt              # Search engine crawler instructions
├── src/
│   ├── components/
│   │   ├── About.astro         # Narrative, philosophy & academic dossier
│   │   ├── Certifications.astro# Verified milestones & learning roadmap
│   │   ├── CodingProfiles.astro# GitHub, LeetCode, HackerRank cards
│   │   ├── Contact.astro       # Verified email, Netlify Form & copy-to-clipboard
│   │   ├── Experience.astro    # Education, venture & client timeline
│   │   ├── Footer.astro        # Colophon & navigation links
│   │   ├── Hero.astro          # First impression, status pill & CV overview modal
│   │   ├── Nav.astro           # Sticky blur navbar & mobile responsive drawer
│   │   ├── Projects.astro      # Category filters, technical visuals & case study modal
│   │   ├── Skills.astro        # Categorized toolkit (Core vs. Exploring)
│   │   └── ThemeToggle.astro   # Zero-flash dark/light mode toggle
│   ├── data/
│   │   └── profile.ts          # Centralized Single-Source-of-Truth content model
│   ├── layouts/
│   │   └── BaseLayout.astro    # Global HTML shell, SEO, fonts, and print styles
│   ├── pages/
│   │   ├── 404.astro           # Custom branded 404 page
│   │   └── index.astro         # Main single-page application entrypoint
│   └── styles/
│       └── global.css          # Tailwind v4 theme tokens & custom animations
├── astro.config.mjs            # Astro configuration with Vite Tailwind plugin & sitemap
├── netlify.toml                # Netlify build and redirect configuration
└── package.json                # Project dependencies and build scripts
```

---

## 🚀 Local Development Setup

### Prerequisites
- **Node.js**: v20+ or v22+ LTS
- **pnpm** (recommended) or **npm**

### Installation Steps

1. Clone or navigate to the project directory:
   ```bash
   cd zs-portfolio
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the local development server:
   ```bash
   pnpm run dev
   ```
   Open [http://localhost:4321](http://localhost:4321) in your browser.

4. Build for production:
   ```bash
   pnpm run build
   ```
   The compiled static files will be generated in the `dist/` directory.

5. Preview the production build locally:
   ```bash
   pnpm run preview
   ```

---

## 🌐 Netlify Deployment Guide

This project is pre-configured for instant zero-configuration deployment to Netlify:

1. Push this repository to your GitHub account (`https://github.com/zulqarnain-saeed/portfolio`).
2. Log into [Netlify](https://app.netlify.com/).
3. Click **"Add new site"** → **"Import an existing project"**.
4. Select your GitHub repository.
5. The build settings will be automatically detected from [`netlify.toml`](./netlify.toml):
   - **Build command:** `pnpm run build`
   - **Publish directory:** `dist`
   - **Node version:** `22`
6. Click **Deploy Site**.
7. Connect your custom domain: `https://zulqarnain-saeed.netlify.app`.

### Contact Form on Netlify
The contact form in `src/components/Contact.astro` automatically registers under **Site Settings → Forms** in your Netlify dashboard with zero backend server setup required. You can also configure email notifications in Netlify to receive immediate alerts whenever a recruiter submits a message.

---

## 📝 Updating Portfolio Content

All personal information, project data, skills, timeline events, and case studies are intentionally decoupled from UI components and stored in a single TypeScript file:

👉 [`src/data/profile.ts`](./src/data/profile.ts)

To add a new project, certification, or skill:
1. Open `src/data/profile.ts`.
2. Add your new item to the corresponding array (`projects`, `skills`, `timeline`, or `certifications`).
3. Commit and push — Netlify will automatically rebuild and deploy the update in seconds!

---

## ⚖️ License & Credits

Built with precision by Zulqarnain Saeed. Released under the [MIT License](LICENSE).
