# Nirman Solutions — Architecture & Interior Design Atelier

A high-performance, modern web application built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Yarn 4**. Designed with bespoke luxury architectural aesthetics, glassmorphism, dynamic animations, and interactive feasibility tools.

---

## 🏛️ Project Overview

**Nirman Solutions** is an international architectural atelier and luxury interior design firm specializing in:
- **Architectural Masterplanning & Structural Blueprints**
- **High-End Interior Architecture & Bespoke Millwork**
- **Biophilic & Net-Zero Environmental Engineering**
- **Turnkey Project Supervision & Delivery**

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack, React 19)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@theme inline` custom design tokens
- **Package Manager**: [Yarn 4 Berry](https://yarnpkg.com/) (`nodeLinker: node-modules` configured for optimal Turbopack compilation)
- **Typography**: Google Fonts via `next/font/google` (`Plus Jakarta Sans` & `Outfit`)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom Vector Brand Marks

---

## 📂 Project Structure

```text
nirman-solutions/
├── public/
│   ├── images/              # High-resolution architectural photography
│   │   ├── hero.jpg         # The Coastal Horizon Pavilion
│   │   ├── interior.jpg     # The Travertine & Boucle Sanctuary
│   │   ├── urban.jpg        # The Biomimetic Cultural Dome
│   │   └── studio.jpg       # Studio Nirman Collaborative Labs
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── app/
│   │   ├── globals.css      # Design tokens, dark mode, glassmorphic styling
│   │   ├── layout.tsx       # Root layout, Google fonts & SEO metadata
│   │   └── page.tsx         # Main page assembly
│   └── components/
│       ├── Navbar.tsx       # Glassmorphic header with responsive mobile drawer
│       ├── Hero.tsx         # Architectural hero banner with key stats & visuals
│       ├── ProjectsSection.tsx # Filterable portfolio with interactive detail modals
│       ├── ServicesSection.tsx # 4 integrated design & engineering disciplines
│       ├── PhilosophySection.tsx # Studio manifesto and 4-step methodology
│       ├── ProjectCalculator.tsx # Interactive client feasibility & cost estimator
│       ├── ContactSection.tsx  # Commission brief request form & global ateliers
│       └── Footer.tsx       # Atelier links, social channels, and journal signup
├── .yarnrc.yml              # Yarn Berry configuration (`nodeLinker: node-modules`)
├── next.config.ts           # Next.js configuration
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: `v20.x` or `v22.x` (Recommended `v22.11.0+`)
- **Yarn**: `v4.x` (Berry)

### 2. Installation
Dependencies are already configured. If needed, install via:
```bash
yarn install
```

### 3. Development Server
Start the development server with Turbopack:
```bash
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build
Verify type checks and build the optimized production bundle:
```bash
yarn build
```

To run the production build locally:
```bash
yarn start
```

### 5. Linting
Run ESLint to check for code quality:
```bash
yarn lint
```

---

## ✨ Key Features & Highlights

- **Dynamic Project Feasibility Estimator**: Clients can configure built-up square footage, craft tiers, and net-zero add-ons to see estimated timelines and budget brackets in real-time.
- **Interactive Portfolio Showcase**: Filter commissions across Architecture, Interior Design, and Commercial & Urban with full-detail inspection modals.
- **Glassmorphic Architectural Aesthetics**: Curated color palette featuring warm champagne bronze (`#c6a676`), deep obsidian canvas (`#0d0f12`), and subtle architectural grid lines.
- **Fully Responsive & Accessible**: Optimized for mobile, tablet, and ultra-wide displays with semantic HTML5 and SEO meta tags.
