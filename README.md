# James Nguyen — Portfolio

A modern, responsive developer portfolio built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**. Features smooth animations, dark/light theme support, an interactive map, and a contact form with spam protection.

**Live Demo:** [james-nguyen-lac.vercel.app](https://james-nguyen-lac.vercel.app/)

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 13, React 18, TypeScript |
| **Styling** | Tailwind CSS, PostCSS |
| **Animations** | Framer Motion |
| **Maps** | Leaflet, React Leaflet |
| **Icons** | React Icons |
| **Deployment** | Vercel |

## Features

- **Responsive Design** — Mobile-first layout with Tailwind CSS breakpoints
- **Dark / Light Theme** — Persistent theme toggle with custom navy color palette
- **Smooth Animations** — Scroll-triggered animations and staggered transitions via Framer Motion
- **Interactive Map** — Leaflet map with custom marker, zoom controls, and theme-aware tiles
- **Contact Form** — EmailJS integration with honeypot spam protection and cooldown timer
- **Vertical Timeline** — Work experience and education displayed in a polished timeline
- **Project Showcase** — Grid of project cards with tech stack badges
- **Sticky Navigation** — Active section highlighting with animated indicators

## Project Structure

```
james-protfolio/
├── components/          # React components (Navbar, Intro, Skills, Experience, etc.)
├── context/             # Theme and active section context providers
├── lib/                 # Data, utilities, email template, animation settings
├── public/              # Static assets (images, resume, favicon)
├── src/
│   ├── pages/           # Next.js pages (_app, _document, index)
│   └── styles/          # Global CSS and Tailwind directives
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
git clone https://github.com/nthanhnguyen/james-protfolio.git
cd james-protfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

## Deployment

This project is deployed on [Vercel](https://vercel.com). Push to the `master` branch to trigger automatic deployment.

## License

This project is for personal portfolio use.
