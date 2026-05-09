# Static Assets

Drop static assets in this folder. Next.js serves anything under `public/` at the site root, so a file at `public/assets/logos/rooftop.svg` resolves to `/assets/logos/rooftop.svg`.

## Folders

- `logos/` — Rooftop wordmark, mark, partner/customer logos
- `images/` — Hero, section, and editorial imagery (jpg/png/webp)
- `icons/` — Feature icons, decorative svgs
- `screenshots/` — Product UI captures
- `og/` — Open Graph / Twitter card images (1200×630)

## Reference in code

```tsx
import Image from "next/image";

<Image src="/assets/logos/rooftop.svg" alt="Rooftop" width={140} height={28} />
```

## Naming

Use lowercase kebab-case: `hero-dashboard.webp`, `logo-mark.svg`.
