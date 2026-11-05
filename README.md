# eyes.sashabajzek.com

A googly-eye shirt that watches your cursor, inspired by Simone Giertz.
Built with React, Vite and Sass, deployed on Netlify.

## Scripts

- `npm run dev` – start the dev server
- `npm run build` – build to `dist/` and prerender the page to static HTML
- `npm run preview` – serve the production build locally

## How prerendering works

`npm run build` runs three steps:

1. `vite build` builds the browser bundle into `dist/`.
2. `vite build --ssr src/entry-server.jsx` builds a Node version of the app.
3. `scripts/prerender.js` renders the app to HTML and writes it into `dist/index.html`
   in place of the `<!--app-html-->` placeholder.

In the browser, `src/main.jsx` hydrates that HTML instead of rendering from scratch.
Because components also run in Node at build time, don't touch `window` or `document`
during render. Put that code in `componentDidMount` / `useEffect`.

Netlify settings live in `netlify.toml`.
