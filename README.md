# 🏡 HomeFix

A home services marketplace built with React. Homeowners describe their project, browse vetted local professionals, compare quotes, and hire with confidence.

[![Deploy to GitHub Pages](https://github.com/towfiq-ul/home_service/actions/workflows/deploy.yml/badge.svg)](https://github.com/towfiq-ul/home_service/actions/workflows/deploy.yml)

> **Live site:** `https://towfiq-ul.github.io/home_service/`

---

## Screenshots

| Home | Browse Services | Pro Profile |
|------|-----------------|-------------|
| Hero search bar, category grid, featured pros, testimonials | 12 service categories — click any to filter pros | Full profile with bio, reviews, and booking sidebar |

---

## Features

- 🔍 **Search & browse** — 12 service categories (Handyman, Plumbing, Electrical, Painting, Cleaning, Landscaping, Carpentry, HVAC, Moving, Pest Control, Roofing, Flooring)
- 👤 **36 unique pros** — 3 distinct professionals per category with real bios, skills, and reviews
- 🎛️ **Filter & sort** — filter by category, max hourly rate, Top Pro badge; sort by rating, price, or review count
- 🔗 **Deep-linked filters** — clicking a service on the Services page navigates to `/pros?category=plumbing` with the filter pre-applied
- 📋 **Pro profiles** — full profile page with bio, skills checklist, reviews, similar pros, and a sticky booking sidebar
- 📝 **Multi-step quote form** — 4-step form: service selection → project details → location/contact → confirmation
- 📱 **Responsive** — mobile hamburger menu, responsive grids at every breakpoint
- 🚀 **GitHub Actions CI/CD** — auto-deploys to GitHub Pages on every push to `master`

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI framework | React 19 (Create React App) |
| Routing | React Router v6 |
| Styling | Tailwind CSS v3 |
| Data | Static mock data (`src/data/mockData.js`) |
| CI/CD | GitHub Actions → GitHub Pages |

---

## Project Structure

```
home_service/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment workflow
├── frontend/                   # React application
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js       # Sticky nav with mobile menu
│   │   │   ├── Footer.js       # Multi-column footer
│   │   │   ├── Hero.js         # Landing hero with search bar
│   │   │   └── ProCard.js      # Reusable pro card component
│   │   ├── data/
│   │   │   └── mockData.js     # All static data (36 pros, 12 categories, testimonials)
│   │   ├── pages/
│   │   │   ├── HomePage.js     # Landing page
│   │   │   ├── ServicesPage.js # All service categories
│   │   │   ├── ProsListPage.js # Filterable pro listing
│   │   │   ├── ProProfilePage.js # Individual pro profile
│   │   │   └── GetQuotesPage.js  # Multi-step quote request form
│   │   ├── App.js              # Router setup
│   │   └── index.css           # Tailwind directives
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
└── backend/
    └── README.md               # Planned backend structure & API spec
```

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Run locally

```bash
# 1. Clone the repo
git clone https://github.com/<your-username>/home_service.git
cd home_service

# 2. Install dependencies
cd frontend
npm install

# 3. Start the dev server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
cd frontend
npm run build
```

The optimised output lands in `frontend/build/`.

---

## Deployment (GitHub Pages)

Deployment is fully automated via GitHub Actions. Every push to `master` triggers the workflow:

```
push to master → install deps → npm run build → upload artifact → deploy to Pages
```

### One-time setup

1. Go to your repo on GitHub → **Settings → Pages**
2. Under **Source**, select **GitHub Actions**
3. Click **Save**

Your site will be live at:
```
https://<your-username>.github.io/home_service/
```

> **SPA routing note:** The workflow copies `index.html → 404.html` so React Router handles deep links (`/pros`, `/pros/3`, `/get-quotes`) without GitHub Pages returning a real 404.

---

## Roadmap

The `backend/` directory is scaffolded and ready. Planned implementation:

| Feature | Status |
|---|---|
| Static frontend (all pages) | ✅ Done |
| GitHub Pages CI/CD | ✅ Done |
| Node.js / Express API | 🔲 Planned |
| MongoDB database & models | 🔲 Planned |
| User authentication (JWT) | 🔲 Planned |
| Pro registration & profiles | 🔲 Planned |
| Quote request & messaging | 🔲 Planned |
| Reviews & ratings | 🔲 Planned |
| Geo-based pro matching | 🔲 Planned |

See [`backend/README.md`](./backend/README.md) for the full API spec.

---

## Color Palette

| Role | Tailwind Token | Hex |
|---|---|---|
| Primary | `emerald-700` | `#047857` |
| Dark bg (header/footer) | `stone-900` | `#1C1917` |
| Hero gradient | `stone-900 → emerald-900` | — |
| Accent / CTA | `amber-400` | `#FBBF24` |
| Page background | `stone-50` | `#FAFAF9` |

---

## License

MIT
