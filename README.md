# LeadCRM Landing Page

A responsive HTML/CSS landing page converted from the Figma UX/UI design task, inspired by [LeadCRM](https://www.leadcrm.io/).

## Project Structure

```
figma-design/
├── index.html          # Semantic HTML structure
├── css/
│   └── styles.css      # Main styles with Flexbox/Grid, media queries
├── js/
│   └── main.js         # Mobile menu toggle, smooth scroll
└── README.md
```

## Features

- **Semantic HTML** – Proper use of `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, etc.
- **Responsive Design** – Mobile-first approach with breakpoints at 480px, 768px, 992px
- **Flexbox & CSS Grid** – For layout and alignment
- **CSS Custom Properties** – Easy theming and consistency
- **Cross-browser Support** – Chrome, Firefox, Safari, Edge
- **Accessibility** – ARIA labels, focus states, semantic markup

## Getting Started

1. Open `index.html` in a browser, or
2. Serve locally (e.g., `npx serve .` or Live Server in VS Code)

## Customization

- **Colors**: Update CSS variables in `:root` in `styles.css`
- **Typography**: Change `--font-family` or the Google Fonts link in `index.html`
- **Layout**: Adjust `--container-max` and breakpoints as needed

## Figma Design Notes

If you have access to the Figma design, you can refine:

- Exact font sizes, weights, and line heights
- Precise colors from the design palette
- Spacing and padding values
- Breakpoints to match design mockups

Export design tokens from Figma Dev Mode for pixel-perfect matching.
"# figma-design" 
