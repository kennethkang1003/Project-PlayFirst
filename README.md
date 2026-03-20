# PlayFirst

Minimal Vite + React wrapper for the `PlayFirst` prototype.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Cloudflare Pages

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`

The app is a client-side single page app, so `public/_redirects` is included to route all requests to `index.html`.
