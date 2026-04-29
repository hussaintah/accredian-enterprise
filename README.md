# Accredian Enterprise — Full Stack Developer Intern Assignment

A partial clone of [enterprise.accredian.com](https://enterprise.accredian.com/) built with Next.js 14 (App Router), Tailwind CSS, and TypeScript.

## 🚀 Live Demo

> Deploy to Vercel (instructions below) and paste your URL here.

---

## 📦 Setup Instructions

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/accredian-enterprise.git
cd accredian-enterprise

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments.

---

## 🏗️ Approach Taken

### Architecture
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design tokens (brand colors, fonts)
- **Components**: All functional components with React hooks
- **Typography**: Sora (display) + DM Sans (body) — imported via Google Fonts in `globals.css`

### Sections Built
| Section | Component | Description |
|---|---|---|
| Navigation | `Navbar.tsx` | Fixed header, scroll-aware styling, dropdown, mobile menu |
| Hero | `Hero.tsx` | Full-screen gradient hero with floating dashboard cards |
| Stats | `Stats.tsx` | Animated count-up numbers triggered on scroll |
| Features | `Features.tsx` | 9-card grid with staggered reveal animations |
| Programs | `Programs.tsx` | Filterable program cards by category |
| Partners | `Partners.tsx` | Dual marquee (academic + enterprise logos) |
| Testimonials | `Testimonials.tsx` | Interactive carousel with dot/arrow navigation |
| Lead Form | `LeadForm.tsx` | Full contact form with validation + API submission |
| Footer | `Footer.tsx` | Multi-column footer with links and social icons |

### API Integration
- `POST /api/leads` — captures form submissions with validation
- `GET /api/leads` — returns all captured leads (for debugging; protect in production)
- In-memory store for demo; replace with Supabase/Postgres/MongoDB in production

---

## 🤖 AI Usage Explanation

### Where Claude (AI) Helped
1. **Scaffolding**: Generated `Navbar.tsx`, `Hero.tsx`, and `Features.tsx` as starting files provided by the assignment.
2. **Component creation**: Claude generated `Stats.tsx`, `Programs.tsx`, `Partners.tsx`, `Testimonials.tsx`, `LeadForm.tsx`, `Footer.tsx`, `app/layout.tsx`, and `app/page.tsx` based on the design language established in the starter files.
3. **Config files**: `tailwind.config.ts`, `postcss.config.mjs`, `next.config.mjs`, `tsconfig.json`, `package.json` were generated with guidance.
4. **CSS utilities**: `globals.css` section-tag, card, btn-primary utility classes were co-designed.

### What I Modified / Improved Manually
- Fixed the `floatingCards` color logic in `Hero.tsx` (the original used template-literal class interpolation which Tailwind can't statically analyze — replaced with a `bgHex` prop)
- Added `font-bold` to Navbar logo (original used `font-700` which isn't a valid Tailwind class)
- Ensured all `<form>` tags were replaced with `div` + button onClick handlers (Next.js best practice for client components)
- Reviewed and tuned the animation timings in `Stats.tsx` for a smoother count-up feel
- Structured `Partners.tsx` marquee with CSS keyframes injected via `<style jsx>` for reliable infinite scroll without a JS library

---

## 🔮 Improvements With More Time

1. **Database persistence** — Replace in-memory lead store with Supabase or PlanetScale for real persistence
2. **Email notifications** — Send confirmation email via Resend or SendGrid when a lead submits
3. **Authentication** — Add a protected `/admin` dashboard to view leads
4. **Animations** — Use Framer Motion for more polished page transitions and scroll-linked effects
5. **SEO** — Add structured data (JSON-LD), sitemap, and robots.txt
6. **Testing** — Add Vitest unit tests for API route validation logic
7. **CMS** — Wire Programs and Testimonials sections to a headless CMS (Sanity or Contentful) so content is editable without a code deploy
8. **Performance** — Add `next/image` for partner logos, implement lazy loading for below-fold sections
9. **Accessibility** — Audit with axe-core; add proper ARIA labels to carousel and dropdown
10. **Analytics** — Integrate PostHog or Mixpanel to track CTA click-through and form completion rates

---

## 📁 Project Structure

```
accredian-enterprise/
├── app/
│   ├── api/
│   │   └── leads/
│   │       └── route.ts      # Lead capture API
│   ├── globals.css            # Global styles + Tailwind
│   ├── layout.tsx             # Root layout + metadata
│   └── page.tsx               # Landing page
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Stats.tsx
│   ├── Features.tsx
│   ├── Programs.tsx
│   ├── Partners.tsx
│   ├── Testimonials.tsx
│   ├── LeadForm.tsx
│   └── Footer.tsx
├── next.config.mjs
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```
