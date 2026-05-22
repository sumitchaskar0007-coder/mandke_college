# Mandke College — full-stack website (monorepo)

Premium college website stack: **React 18 + Vite + TypeScript + Tailwind** (client) and **Express + TypeScript + MongoDB** (server), managed with **pnpm** workspaces.

## Prerequisites

- Node.js 20+
- `corepack enable` then `corepack prepare pnpm@9.12.3 --activate` (or another Node-compatible pnpm)
- MongoDB Atlas URI (or local MongoDB)

## Setup

1. **Server**

   ```bash
   cp server/.env.example server/.env
   # Set MONGODB_URI, JWT_SECRET, optional Cloudinary + SMTP
   ```

2. **Client**

   ```bash
   cp client/.env.example client/.env
   # Default VITE_API_BASE_URL=/api uses the Vite proxy in dev
   ```

3. **Install**

   ```bash
   pnpm install
   ```

4. **Seed database** (creates admin `admin@mandkecollege.in` / `Admin@2025` and sample content)

   ```bash
   pnpm run seed
   ```

## Development

Run API and SPA together (from repo root):

```bash
pnpm dev
```

- Frontend: http://localhost:5173 (proxies `/api` → http://localhost:5000)
- API: http://localhost:5000 — health check: `GET /api/health`

**Admin:** http://localhost:5173/admin/login  

## Build

```bash
pnpm build
```

## What’s implemented

- Public marketing layout: marquee, navbar (desktop + mobile), footer + newsletter (`POST /api/newsletter`), WhatsApp + scroll-to-top.
- Pages: home (API-driven sections), about, B.Com, admissions (3-step form), announcements, notices, gallery, blog list + slug, contact/enquiry, faculty, and CMS-ready placeholders (IQAC, library, etc.).
- **Admin:** login with **httpOnly cookie** + JWT, dashboard summary (counts).
- **API:** blogs (pagination, category, search, slug + views, publish toggle), announcements (public vs admin filters), notices (PDF upload → Cloudinary `raw`), gallery + albums (multi-image upload), testimonials, faculty, enquiries + admissions with optional Nodemailer emails, events, content CMS blocks, stats + `trustBadges`, rate limiting, Helmet, CORS with credentials.

## Production notes

- Point `FRONTEND_URL` to your deployed SPA origin.
- Set `VITE_API_BASE_URL` to the public API base (e.g. `https://api.college.edu/api`) or serve SPA and API under one domain.
- Configure Cloudinary for uploads; without it, upload routes return `503`.
# mandke_college
