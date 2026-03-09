# 🍽️ Dinamo — Georgian Bistro Website

A pixel-perfect responsive website for a Georgian restaurant, built from a Figma design.

**Live Demo:** [dinamo-restaurant-app.netlify.app](https://dinamo-restaurant-app.netlify.app/)

**Figma design:** [Link](https://www.figma.com/design/Pc99siFs6W7sUCkVIGIveM/Dinamo-restaurant?node-id=13-8&t=TSSaPjUTM0KdAtq1-0)
---

## 📸 Preview

> Home page with hero section, custom carousel, menu, delivery info, contacts and promotions.

---

## ⚡ Tech Stack

| Category | Technology |
|---|---|
| Framework | Vue 3 (Composition-ready, Options API) |
| Routing | Vue Router 4 |
| Bundler | Vite 5 |
| Styles | SCSS (BEM methodology) |
| Lightbox | SimpleLightbox |
| Linting | ESLint + Prettier |
| Deployment | Netlify |

---

## ✨ Features

- **Pixel-perfect** implementation from a Figma design
- **Custom infinite carousel** — built from scratch without libraries, with smooth infinite loop animation
- **Fully responsive** — mobile-first approach, adaptive layout for all screen sizes
- **Animated burger menu** — transforms into × on open, with smooth slide-down transition
- **Fixed header** with blur backdrop effect
- **SimpleLightbox** integration for image gallery
- **BEM** naming convention throughout all SCSS
- **Clean component architecture** — separate components for header, carousel, mobile carousel, modal, etc.

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## 🎨 Design

The UI was implemented based on a **Figma mockup**, achieving pixel-perfect accuracy across all sections:

- Hero section with full-screen background
- Interactive category carousel
- Menu page with product cards and filters
- Delivery section
- Contacts & promotions

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "vue": "^3.4.15",
    "vue-router": "^4.2.5",
    "sass": "^1.71.0",
    "simplelightbox": "^2.14.2"
  },
  "devDependencies": {
    "vite": "^5.0.11",
    "@vitejs/plugin-vue": "^5.0.3",
    "eslint": "^8.49.0",
    "eslint-plugin-vue": "^9.17.0",
    "prettier": "^3.0.3"
  }
}
```

---

## 👨‍💻 Author

Built as a portfolio project to demonstrate frontend skills:
- Vue 3 component architecture
- Pixel-perfect layout from design mockup
- Custom UI interactions without heavy libraries
- Responsive design with SCSS and BEM
