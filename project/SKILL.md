---
name: sombrero-rosa-design
description: Use this skill to generate well-branded interfaces and assets for Sombrero Rosa, either for production or throwaway prototypes/mocks/decks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

# Sombrero Rosa — Design Skill

Read `README.md` first — it has the full brand voice, visual foundations, content rules, and an index of every other file in this folder.

## TL;DR

- **Brand:** Sombrero Rosa, agencia de marketing full-service. *Cálida, universal, informal.*
- **Tokens:** import `colors_and_type.css` at the top of every HTML file. Don't redefine.
- **Type:** Poppins (Google Fonts, loaded by `colors_and_type.css`).
- **Primary:** `--rosa #d5848e`. **Accent / CTA:** `--hot #e55a7a`. **Anchor:** `--navy #193149`. **Page bg:** `--bone #f2f2f0`.
- **Mark:** `assets/logo-sombrero-rosa.png`. Never redraw it.
- **Voice:** Spanish-first, *tú*, sentence case, no emoji, CTAs end with `→`.
- **Icons:** Lucide via CDN (`<script src="https://unpkg.com/lucide@latest"></script>`), 1.5px stroke.

## How to use this skill

When the user asks for a design artifact for Sombrero Rosa:

1. **Read `README.md`.** Pay attention to *Content fundamentals*, *Visual foundations* and *Iconography*.
2. **Pull from existing files** before inventing:
   - **Marketing site / landing / page sections** → look in `ui_kits/website/`. The components there (`Header.jsx`, `Hero.jsx`, `Services.jsx`, `Manifesto.jsx`, `CaseStudy.jsx`, `Stats.jsx`, `Contact.jsx`, `Footer.jsx`, plus `styles.css`) are pixel-correct.
   - **Slide decks / sales presentations** → start from `slides/index.html`. It uses `<deck-stage>` with 8 slide templates: title, agenda, section opener, big quote, stat, services 3-up, comparison, closing.
   - **Component vocabulary** (buttons, badges, fields, cards, motion) → preview cards in `preview/` are the canonical reference.
3. **Copy assets out of `assets/`** when working on production code or a new prototype directory. Don't link across project boundaries.
4. **Write copy in Spanish.** Match the voice: warm, direct, *tú*, no jargon, no emoji. CTAs are 1–3 words ending in `→`.
5. **Honour the no-no list** in README §4: no bluish-purple gradients, no emoji cards, no left-border-accent cards, no white pages (use bone), no redrawing the hat.

## When you're prototyping vs shipping

- **Throwaway prototype / deck / mock / artifact:** copy assets out of this folder into the new HTML file's directory, link `colors_and_type.css` directly, and ship a single self-contained HTML.
- **Production code:** treat this folder as the source of truth. Port `colors_and_type.css` tokens into the framework's theme system; reuse the JSX components in `ui_kits/website/` as a starting point but rewrite them to fit the production framework (Next, Astro, etc.).

## If invoked without context

If the user invokes this skill with no clear ask, ask them:

1. **What are they making?** (landing page, deck, social asset, ad, email, internal tool…)
2. **What's the audience?** (cliente nuevo, cliente actual, equipo interno, talento)
3. **¿En qué idioma?** (default Spanish; English on request)
4. **Are there existing brand pieces to match?** (a screenshot, an old deck, a competitor we like)
5. **One constraint or feeling we should hit?** (urgent, calmo, premium, juguetón…)

Then act as an expert designer and output an HTML artifact (or production code, if that's what's asked).

## File map

```
README.md            ← brand voice, visual rules, iconography
colors_and_type.css  ← tokens — always import this
SKILL.md             ← this file

assets/              ← logos, brand glyph
preview/             ← swatch / specimen cards (use as reference)
ui_kits/website/     ← marketing site recreation (JSX + styles.css)
slides/              ← 8 slide templates in a <deck-stage> shell
```

— Sombrero Rosa Design System v1
