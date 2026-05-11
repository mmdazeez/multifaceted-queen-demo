# Multifaceted Queen

A premium multi-page business website for "Multifaceted Queen" — a beauty/crafting/alterations boutique in Charleston, SC.

## Run & Operate

- `pnpm --filter @workspace/beauty-studio run dev` — run the frontend (port auto-assigned)
- `pnpm --filter @workspace/api-server run dev` — run the API server
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS v4 + Framer Motion
- Routing: Wouter
- Forms: React Hook Form + Zod
- Icons: Lucide React + React Icons (si)
- Fonts: Cormorant Garamond (headings), Inter (body) via Google Fonts
- API: Express 5 (api-server)
- DB: PostgreSQL + Drizzle ORM (available but not used for this static site)

## Where things live

- `artifacts/beauty-studio/src/pages/` — all 5 pages: Home, HairServices, Crafting, Alterations, Contact
- `artifacts/beauty-studio/src/components/` — Navbar, Footer, PageTransition
- `artifacts/beauty-studio/src/index.css` — color theme (terracotta palette + design tokens)
- `artifacts/beauty-studio/src/App.tsx` — router setup with all routes
- `lib/api-spec/openapi.yaml` — API spec (health check only)

## Architecture decisions

- Frontend-only site — no backend endpoints needed; Express API server is available but unused by the frontend.
- Wouter for lightweight client-side routing; base URL from `import.meta.env.BASE_URL`.
- Framer Motion used for page transitions, scroll-reveal animations, and card hover effects.
- Color palette: terracotta primary #B0613F (18 47% 47%), cream background #FBF8F2 (40 43% 97%), deep warm brown #3A2E26 (22 21% 19%).
- All CSS custom properties properly set — no placeholder values remain.

## Product

Five-page business website: Home (hero + services + about + CTA), Hair Services (grid + pricing packages + gallery + FAQ), Crafting Projects (showcase + process timeline + gallery + inquiry form), Alterations (services grid + before/after gallery + pricing guide + process), Contact (form + business info + hours + social links).

## User preferences

- Warm, feminine, luxury artisan aesthetic
- Cormorant Garamond for headings, Inter for body text
- Terracotta #B0613F accent, cream #FBF8F2 background
- Framer Motion animations throughout
- Business location: Charleston, SC
- Email: hello@multifacetedqueen.com
- Social: @multifacetedqueen

## Gotchas

- Google Fonts @import must be the VERY FIRST line in index.css before @import "tailwindcss"
- Wouter Router base must strip trailing slash: `import.meta.env.BASE_URL.replace(/\/$/, "")`
- Never leave unused TypeScript imports — build will fail
- Unsplash photo IDs are unreliable without verification — use verified iStock/search-result URLs for critical hero images
- iStock direct URLs work well: `https://media.istockphoto.com/id/<ID>/photo/<slug>.jpg?s=1024x1024&w=0&k=20&c=<hash>`

## Pointers

- See the `pnpm-workspace` skill for workspace structure and TypeScript setup
- See the `react-vite` skill for frontend development guidelines
