# Sombrero Rosa — Website UI Kit

A click-through recreation of the Sombrero Rosa marketing site, built from the design system tokens in `colors_and_type.css` and the brand mark in `assets/`.

> **Note:** The reference site `sombrerorosa.com` was not accessible during build. Layout decisions follow the brand's voice + palette + provided logo. Cross-check with the live site and tell us what to update.

## Files

- `index.html` — the live demo. Open this; scroll the page; click the nav, the service cards, the contact form.
- `Header.jsx` — sticky nav with bone/blur backdrop, pill CTA.
- `Hero.jsx` — bone-on-rose hero with display headline + oversized hat watermark.
- `Services.jsx` — 3-up service grid.
- `Manifesto.jsx` — dark navy "what we believe" section, rose typography highlights.
- `CaseStudy.jsx` — featured case + stat strip.
- `Stats.jsx` — measurable-results numbers row.
- `Logos.jsx` — client logos placeholder strip.
- `Contact.jsx` — form section with the form-fields kit.
- `Footer.jsx` — closing footer with hat + nav.

## Components

All components are functional, take props, and live under the global `window.SR.*` namespace so other Babel scripts can use them.

```jsx
const { Header, Hero, Services, Manifesto, CaseStudy, Stats, Logos, Contact, Footer } = window.SR;
```

## Voice match

Copy is in Spanish, sentence-case, *tú* address, no emoji. CTAs end with `→`.
