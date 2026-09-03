## Development

Run the dev server with:

```
npm run dev
```

The Vite dev server runs at http://localhost:8080. Build with `npm run build` (runs `tsc -b && vite build`) and preview with `npm run preview`.

## Project

This is the personal portfolio of Paul Delgado, built with React + TypeScript + Vite, Tailwind CSS v4, Framer Motion and Lenis. It is bilingual (es/en) using a React context in `src/i18n/` with content in `src/data/content.ts`.

Key folders:

- `src/components/` — page sections plus the `lightswind/` component library
- `src/data/content.ts` — all bilingual content
- `src/i18n/` — language provider and hook
- `src/assets/` — photos (me.jpeg) and project images

## Notes

- The `lightswind/` library contains many template components; only a subset is used by the portfolio sections.
- `portfolio01/` at the repo root is a leftover backup of the same app — do not edit it.
- Real data source: `hoja-de-vida.md` at the repo root.
