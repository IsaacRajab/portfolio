# Isaac Rajab — Portfolio

Personal portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Stack

- **React 18** + **TypeScript** — type-safe component model
- **Vite** — fast dev server and optimised production build
- **Tailwind CSS v3** — utility-first styling
- **Framer Motion** — smooth, accessible animations
- **Lucide React** — consistent icon set

## Project structure

```
src/
├── components/
│   ├── layout/        # Navbar, Footer
│   ├── sections/      # Hero, About, Projects, Skills, Contact
│   └── ui/            # Reusable primitives (Badge, SocialButton, GlowBlob, cn)
├── constants/         # Static data (projects, skills, nav links)
├── hooks/             # useActiveSection, useScrolled
├── types/             # Shared TypeScript interfaces
├── App.tsx
├── main.tsx
└── index.css
```

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

This site is designed to be deployed on any static host (Vercel, Netlify, GitHub Pages).

```bash
npm run build   # outputs to dist/
```
