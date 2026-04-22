# spaternostro.com.ar

Portfolio profesional de Sebastián Paternostro — Ecommerce & Conversion Designer, Buenos Aires.

## Stack

- React 18 + TypeScript
- Vite
- React Router v6
- react-i18next (ES / EN / JP)
- react-helmet-async
- CSS nativo con variables (sin frameworks)

## Estructura

```
src/
├── components/     # Componentes reutilizables (Navbar, Footer, BrowserFrame, CaseFooter, SEO, etc.)
├── hooks/          # useReveal (scroll animations)
├── i18n/           # Configuración i18next + locales (es, en, jp)
├── layout/         # MainLayout
├── pages/          # Home, Projects, About, Contact, Hire, NotFound
├── projects/       # Casos de estudio individuales
└── styles/         # global.css
```

## Desarrollo local

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

Desplegado en [Vercel](https://vercel.com). Cada push a `main` dispara un deploy automático.

## Contacto

[spaternostro.com.ar](https://spaternostro.com.ar) · [LinkedIn](https://www.linkedin.com/in/spaternostro99/) · sebastian.paternostro@gmail.com