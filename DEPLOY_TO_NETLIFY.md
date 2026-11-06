# Deploy this portfolio to your EXISTING GitHub + Netlify site

This is a **static React + Vite** version of the Grok design. The original TanStack Start
server, database migrations, preview authentication and Vercel adapter were not
used by the public portfolio. They were removed deliberately to simplify
Netlify deployment and avoid shipping preview credentials.

## GitHub — replace old website files, NOT the repository

1. Keep the existing GitHub repository linked to your Netlify site.
2. Back up its current code, for example with **Code → Download ZIP** (or make a backup branch).
3. Delete the old WEBSITE source files in that repository (old `index.html`, `src`, `public`, old build config etc.).
4. Unzip the provided package and upload **the contents inside it** to the
   **root of your existing repo** (not the outer folder / ZIP itself):
   `src/`, `public/`, `index.html`, `package.json`, `package-lock.json`,
   `vite.config.ts`, `tsconfig.json`, `netlify.toml`, `README.md`, etc.
5. Commit directly to the **same branch Netlify watches** (usually `main`).
6. **Important:** If your repository has special GitHub profile behaviour (repo name
   exactly your username), `README.md` in this package IS the polished GitHub
   profile README and should be kept.

## Netlify — existing site (do NOT create another site)

Open Netlify dashboard → your EXISTING site → Project configuration →
**Build settings / Continuous deployment**. Confirm:

- Repository: your existing GitHub repository
- Production branch: same branch you committed to (e.g. `main`)
- **Base directory:** blank / repository root
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node.js:** `22` (already configured in `netlify.toml` / `.nvmrc`)
- **Functions directory:** leave blank
- **Environment variables:** none required for the public portfolio

The committed `netlify.toml` supplies build/publish settings. If Netlify has
existing settings or environment variables overriding the repo, remove conflicts,
notably any old publish directory `.`/`public`/`dist/client`, and remove old
`NODE_ENV=production` if it prevents build devDependencies from installing.

Push a commit; Netlify's existing Git-based deployment should start. If it does
not, open **Deploys → Trigger deploy → Deploy site**.

## Test before replacing live code (optional but recommended)

If you have Node.js 22 installed:

```bash
npm ci
npm run build
npm run preview
```

Open the printed local URL. After Netlify deploys, check the home page, mobile
menu, project filters, certificates, images, PDF resume, and GitHub links.

## How the site works

- Entire site is **static**; no Netlify Functions or database are required.
- The **Contact** form opens the visitor's email app (`mailto:`); it does not
  send email through Netlify Forms. This is expected behaviour.
- Update content and links in `src/data/portfolio.ts`.
- Replace photos and preview images in `public/`.
- GitHub profile introduction, statistics, project links and contribution graph
  are in the root `README.md`.

## Troubleshooting

- **Build failure, cannot find package:** confirm both `package.json` and
  `package-lock.json` were uploaded in the repository root and Netlify's base
  directory is blank.
- **404 after navigating:** check that `netlify.toml` was committed and the
  publish directory is `dist`.
- **Old website still showing:** confirm your commit is on Netlify's production
  branch and the latest deploy succeeded.
- **Broken project link:** repository/project URLs are maintained in
  `src/data/portfolio.ts` and must be checked against the live public project.
