# Εσμιγιά / Esmiya

Bilingual band site. Greek is the default (`/`), English lives at `/en/`.

Copy, member names, and the contact address are in `src/data/content.ts`.

## Local

```bash
npm install
npm run dev
```

## Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Canonical host: `esmiya.gr`
- Redirect `esmigia.gr` and `esmiyia.gr` to `https://esmiya.gr`

Original photographs stay in `photos/originals/`. The site serves the web copies in `public/images/band/`.
