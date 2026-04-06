# Shree Panchthar Secondary School Website

Modern, responsive school website built with:

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui style components + lucide-react
- Zustand state management
- Framer Motion animations

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run start
```

## Notes

- WhatsApp number is configurable in `src/lib/site-config.ts`.
- Location sharing uses browser Geolocation API via `src/hooks/useLocation.ts`.
