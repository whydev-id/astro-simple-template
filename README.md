# 🚀 Simple template static Site Generator with Astro & Tailwind CSS

This is a modern, fast, and responsive website built using [Astro](https://astro.build), styled with [Tailwind CSS](https://tailwindcss.com), and enhanced with smooth page transitions via [Swup.js](https://swup.js.org).

## 🛠️ Tech Stack

- **Astro** – Static site generator for building fast websites.
- **Tailwind CSS** – Utility-first CSS framework for styling.
- **Swup.js** – Client-side page transitions with minimal setup.

## Features

- Fast and responsive website built with Astro
- Styled with Tailwind CSS for a consistent and customizable design
- Smooth page transitions via Swup.js
- Easy to customize and extend with a modular directory structure

## 📦 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/whydev-id/astro-simple-template.git
```

Navigate into the project directory:

```bash
cd project-name
```

Install the necessary dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

This will start a local server at `http://localhost:8080`

Build the project for production:

```bash
npm run build
```

The final, production-ready static files will be generated in the `/dist` directory & ready to deploy

## 📂 Directory Structure

```bash
/
├── public/             # Static assets like images and icons served as-is
├── src/                # Main source directory for your project
│ ├── assets/           # Source assets like fonts, and raw images
│ ├── components/       # Reusable UI components (e.g., Header, Footer)
│ ├── data/             # Site data/config in JSON format
│ ├── layouts/          # Layout components used to wrap pages
│ ├── pages/            # Route-based pages (.astro or .md files)
│ ├── scripts/          # JavaScript files, e.g., for Swup transitions & theme
│ └── styles/           # Tailwind and global CSS files
├── astro.config.mjs    # Astro configuration file
├── tailwind.config.js  # Tailwind CSS configuration
└── package.json        # Project metadata and dependencies
```
