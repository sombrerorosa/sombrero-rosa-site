# Sombrero Rosa — Design System

> Agencia de marketing full service. Cálida, universal, informal.
> Hacemos crecer tu marca, negocio y relación con clientes.

This is the visual + verbal operating system for **Sombrero Rosa**. Use it to design the website, decks, social, sales materials and any branded surface.

---

## 1. Brand context

**Who they are.** Sombrero Rosa is a full-service marketing agency. They combine creativity, technology and strategy to build memorable brand experiences and grow their clients' businesses with measurable results.

**The promise.** *Una agencia que conecta.* They want to feel like a partner who actually understands your business — not a vendor.

**Tagline candidates** (lifted from supplied copy):
- "Hacemos crecer tu marca, negocio y relación con clientes."
- "Creatividad, tecnología y estrategia para experiencias memorables."
- "Resultados reales y medibles."

**The mark.** A loose, hand-drawn pink cowboy hat. Distinctive, friendly, slightly playful — it gives the brand permission to be warm where most agencies are corporate. Treat the hat as a *signature*, not a corporate logo: it can be oversized, peeking from a corner, used as a watermark.

### Sources used to build this system
- `uploads/logo-sombrero-rosa.png` — primary brand mark (provided by user).
- Brand description supplied in chat (services, voice, values).
- Reference site `sombrerorosa.com` — referenced by user but **not accessible** to the agent at build time. Visual decisions are extrapolated from the supplied palette + logo + voice. Flag any conflict with the live site so we can reconcile.
- Color palette supplied directly: `#d5848e` (primary), `#193149`, `#403f3f`, `#f2f2f0`, `#e55a7a` (secondary); `#fafafa`, `#020202`, `#0b0b0b` (neutrals).
- Typography: **Poppins** (per user). Loaded from Google Fonts in `colors_and_type.css`.

---

## 2. Index — what's in this folder

```
README.md                      ← you are here
SKILL.md                       ← Claude Code / Agent Skills entry point
colors_and_type.css            ← single source of truth for tokens

assets/                        ← brand marks + imagery
  logo-sombrero-rosa.png       ← primary mark
  logo-rosa-mono.svg           ← monochrome variants
  logo-rosa-cream.svg
  logo-rosa-navy.svg
  hat-watermark.svg            ← oversized signature watermark

preview/                       ← Design System tab cards (700×N each)
  ├ logo.html
  ├ palette-primary.html
  ├ palette-secondary.html
  ├ palette-semantic.html
  ├ type-display.html
  ├ type-scale.html
  ├ type-eyebrow.html
  ├ spacing.html
  ├ radii.html
  ├ shadows.html
  ├ buttons.html
  ├ form-fields.html
  ├ cards.html
  ├ badges.html
  └ motion-principles.html

ui_kits/
  website/                     ← marketing site recreation
    README.md
    index.html
    Header.jsx, Hero.jsx, Services.jsx,
    CaseStudy.jsx, Stats.jsx, Footer.jsx, …

slides/                        ← 16:9 slide templates (1280×720)
  index.html                   ← deck shell
  TitleSlide.jsx, AgendaSlide.jsx,
  BigQuoteSlide.jsx, StatSlide.jsx, ServicesSlide.jsx, …

fonts/                         ← (none — Poppins is loaded from Google Fonts)
```

---

## 3. Content fundamentals

### Voice
- **Universal, informal, warm** — direct address ("tú", not "usted").
- **First-person plural we** ("nosotros / hacemos / creemos") — Sombrero Rosa is a team, not a person.
- **Spanish first** — primary language is Spanish (LATAM neutral). English is secondary; if both, Spanish reads first.
- **Confident, not corporate.** Avoid jargon ("synergy", "leverage", "soluciones holísticas"). Prefer plain verbs: *crecer, conectar, entender, contar, vender, escuchar*.
- **Calidez sobre tecnicismo.** Always pick the warmer word. "Conectamos con tu cliente" > "Optimizamos el funnel de adquisición".

### Casing
- **Sentence case** in all UI and headlines — never Title Case, never ALL CAPS in body.
- **UPPERCASE allowed only** for eyebrows / labels / tags (≤ 2–3 words), with `letter-spacing: 0.14em`.
- **The brand name** is always written **Sombrero Rosa** (two words, both capitalized). Never "sombrero rosa", never "SombreroRosa", never "SR".

### Punctuation & quirks
- Spanish punctuation rules apply: ¿inverted question?, ¡inverted exclamation!
- Use the en-dash with spaces for parentheticals — like this — not em-dashes.
- Single sentences over compound ones. Cut the "que" when possible.
- Numbers → digits in marketing copy ("3 servicios", not "tres servicios"). Spell out only at the start of a sentence.

### Examples — *write like this*

> ✅ **Hero**: "Hacemos crecer tu marca. Y la relación con tus clientes."
> ❌ **Hero**: "Soluciones de marketing 360° impulsadas por IA"

> ✅ **Service card**: "Estrategia que entiende tu negocio antes de proponer nada."
> ❌ **Service card**: "Optimización integral del customer journey"

> ✅ **CTA**: "Hablemos →"  ·  "Quiero crecer"  ·  "Empecemos"
> ❌ **CTA**: "Submit"  ·  "Learn more"  ·  "Click here"

> ✅ **Empty state**: "Aquí va tu próxima campaña."
> ❌ **Empty state**: "No data available."

### Emoji
- **No emoji in headlines, navigation, buttons or body copy.** Ever. The pink hat is the only "emoji" the brand needs.
- Reactions on social posts are fine, but never in product UI or sales surfaces.

### Lengths (rule of thumb)
- Hero headline: ≤ 8 words.
- Eyebrow: 1–3 words.
- Service card title: 2–4 words.
- CTA: 1–3 words, action-led, often ending in `→`.

---

## 4. Visual foundations

### Color
The palette is built around a **dusty rose primary** (#d5848e) softened against a **warm bone background** (#f2f2f0) and grounded by **deep navy** (#193149) for type and contrast. **Hot pink** (#e55a7a) is the energy accent — buttons, links, hover states, the occasional highlight. We do **not** mix pinks freely; rose is the "resting" state, hot pink is the "active" state.

| Token | Hex | Use |
|---|---|---|
| `--rosa` | `#d5848e` | Primary fills, large brand surfaces, the hat |
| `--hot` | `#e55a7a` | CTAs, active links, highlights |
| `--navy` | `#193149` | Headlines, dark sections, contrast text |
| `--ink` | `#403f3f` | Body copy on light backgrounds |
| `--bone` | `#f2f2f0` | Default page background |
| `--paper` | `#fafafa` | Card / sheet surfaces over bone |
| `--black-2` | `#0b0b0b` | Maximal contrast, rarely needed |

**Contrast rules**
- Body text on `--bone`: use `--ink` or `--navy`. Never use `--rosa` for paragraphs.
- Body text on `--rosa`: always white.
- Body text on `--navy`: `--bone` or `--rosa-200`.
- Don't put `--hot` next to `--rosa` at large sizes — they vibrate. Use one or the other in any given block.

#### Navy ↔ Black: how they coexist
Navy and black are **two different jobs**, not two competing darks. If you remember one rule: **black is the canvas, navy is the ink.**

| | `--black-2` (#0B0B0B) | `--navy` (#193149) |
|---|---|---|
| **Role** | Canvas / surface | Ink / accent |
| **Use for** | Full-bleed dark sections (hero, manifesto, footer), photography mattes, deck section dividers | Headlines on bone, body copy, anchor color in service icons, dividers, charts |
| **Don't use for** | Body text, small icons, thin strokes (gets muddy) | Large flat backgrounds (reads cold + corporate, fights the warm bone) |

**The pairings that work:**
- **Black + rose + white** — the hero / footer / closing-slide formula. Black holds the space, rose is the accent, white is the type.
- **Bone + navy + rose** — the body of the site / decks. Navy is the headline + body color, rose is the accent.
- **Black surface containing a navy element** — fine, but only when navy is acting as an accent shape (a card, an icon background, a chart bar), never as text.

**The pairings to avoid:**
- Navy text on a black background → vibrates, low contrast, looks like a render error. Use white or `--rosa-300`.
- Black text on a navy background → same problem inverted. Use white.
- Two large blocks of navy and black touching with no neutral between them → reads as a printer error. Separate with bone, white, or a thin rose rule.
- 50/50 splits (half navy, half black) — pick one as the dominant dark and let the other appear only as small accents.

**Rule of thumb across surfaces:** in any single artifact (one page, one slide, one ad) you can use *both*, but one of them is the canvas (≥80% of the dark area) and the other shows up at most as accent shapes. The website uses **black as canvas + navy as ink**; a sales deck might invert this and use **navy as canvas + black for type on light slides** — pick a side per artifact and stick with it.


### Type
- **Family:** Poppins (300 / 400 / 500 / 600 / 700 / 800; italic 400, 500).
- **Display:** Poppins **Bold** with `letter-spacing: -0.02em`. Big, tight, confident.
- **Body:** Poppins **Regular** at 16px, line-height 1.5.
- **Eyebrow:** Poppins **Semibold** 13px, UPPERCASE, `letter-spacing: 0.14em`, color `--rosa-600`.
- **Italic** is a deliberate device — used inside `.mark` to highlight a single word in a headline, often paired with rose.
- Never letter-space body copy. Never set body below 14px.

### Spacing
8-pt base, doubled at the higher end for marketing rhythm.
`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128`. Marketing sections breathe at `--space-9` (96) or `--space-10` (128) vertical padding. UI components live in the `--space-3` → `--space-5` range.

### Backgrounds & motifs
- **Primary background is bone** (`#f2f2f0`), not white. White feels clinical; bone feels like good paper.
- **Dark sections use navy**, never pure black. Black is reserved for type.
- **The hat is the only illustration** the brand owns. Repeat it sparingly:
  - As a faint watermark in the corner of a hero.
  - Oversized and bleeding off-canvas behind a section title.
  - Stamped at small size next to the wordmark in a footer.
- **No bluish-purple gradients.** **No emoji cards.** **No left-border-accent cards.**
- A subtle **rose → bone** gradient is allowed for hero backgrounds (`linear-gradient(180deg, var(--rosa-100), var(--bone))`).
- **Imagery vibe:** warm, slightly grainy, candid. Real people, real workspaces. Avoid stock-photo gloss; avoid b&w; avoid heavy filters.

### Borders
- Default border: `1px solid var(--border)` — that's `rgba(25,49,73,0.10)`. Soft, navy-tinted, never gray.
- Strong border (focus, selected): `1.5px solid var(--rosa)`.
- On dark surfaces: `1px solid var(--border-on-dark)`.

### Corner radii
The brand has a **medium-soft** rounding personality. Nothing is sharp; nothing is a perfect circle (except the hat watermark blob).
- Buttons & inputs: `--r-md` (14px).
- Cards: `--r-lg` (22px).
- Hero panels / large surfaces: `--r-xl` (32px).
- Pills & tags: `--r-pill`.
- Avatars: full circle.

### Shadows
Soft, navy-tinted, low-spread. We do **not** use neutral-gray shadows.
- `--shadow-sm` for resting cards.
- `--shadow-md` for hover lift / floating elements.
- `--shadow-lg` for modals & overlays.
- `--shadow-rosa` is reserved for the primary CTA on hover — a colored bloom that says "press me."

### Cards
- Background: `--paper` over a `--bone` page.
- Radius: `--r-lg` (22px).
- Border: `1px solid var(--border)`.
- Padding: `--space-5` (24px) minimum, `--space-6` (32px) ideal.
- Hover: lift 4px, swap to `--shadow-md`, transition 320ms `--ease-out`.
- **Never** add a colored left-border accent. **Never** add inner shadow. **Never** stack 3+ shadows.

### Buttons
- **Primary**: solid `--hot` background, white text, radius `--r-md`, padding `14px 22px`, weight 600. Hover: lift 2px + `--shadow-rosa` + slight darken to `--rosa-600`.
- **Secondary**: solid `--navy`, bone text. Same radius/padding.
- **Tertiary / ghost**: transparent, 1.5px navy border, navy text. Hover: bg navy, text bone.
- **Pill** variant: `--r-pill` instead of `--r-md`. Used in nav and tags only.
- Always include an arrow `→` after the label on primary CTAs. Never use chevrons.
- Disabled: 40% opacity, no hover.

### Form fields
- 1px navy-tinted border, radius `--r-md`, height 48px.
- Focus: border becomes `--rosa` 1.5px + 4px `--rosa-100` outer halo (no blue Chrome ring).
- Labels sit above the field, in `--fg-strong`, weight 500, 14px.
- Helper text: 13px, `--fg-muted`.
- Error: border `--hot`, helper text `--hot`.

### Hover & press
- **Links** (text): color shifts from `--hot` → `--rosa-600`, the underline thickens slightly. No opacity changes.
- **Buttons**: lift 2px on hover, settle to 0px with a 1px sink on press. Shadow grows on hover, collapses on press.
- **Cards**: lift 4px on hover; shadow grows; the inner heading nudges 2px right (signals "click").
- **Icons** in nav: scale to 1.06 on hover, transition 200ms `--ease-out`. No rotation.

### Motion
- Default duration: 200–320ms. Never longer than 520ms in UI.
- Default easing: `cubic-bezier(0.22, 1, 0.36, 1)` (`--ease-out`). It's confident — fast start, soft landing.
- For arrival / page-load reveals: stagger children by 60ms with the same easing.
- The brand mark may animate **once** on first paint (gentle bob, 800ms). Never loops.
- Avoid bounce-heavy springs except on micro-interactions like a "✓ saved" pill.

### Transparency & blur
- Sticky nav uses `backdrop-filter: blur(12px)` over `rgba(242,242,240,0.8)`. Never over white.
- Modal overlay: `rgba(25,49,73,0.6)` — a navy haze, not gray.
- Avoid frosted-glass cards in body content; the brand looks better solid.

### Layout rules
- Marketing site grid: 12 columns, max width 1240px, gutter 24px.
- Marketing section vertical padding: 96–128px.
- Page edges have a "**signature**" — at least one piece of the cowboy hat watermark or a pink shape touches the right or bottom edge. The brand should feel personally signed.
- Sticky elements: header (60px) + a corner CTA on long pages.
- Never center a body paragraph wider than 65ch.

### Protection / legibility on imagery
- When type sits on a photo, use a **bone scrim** (`linear-gradient(180deg, transparent, rgba(242,242,240,0.92))`) at the bottom, not a black gradient.
- Or place type inside a **rose pill** floated over the image.
- Never use white text directly on a photo without a scrim.

---

## 5. Iconography

The brand does **not** ship a custom icon set. We use **[Lucide](https://lucide.dev)** as the default — its 1.5px stroke, rounded line caps, and quietly geometric feel match Poppins and the dusty-rose palette. Loaded from CDN:

```html
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="arrow-right"></i>
<script>lucide.createIcons();</script>
```

**Defaults:**
- Stroke width: `1.5` (Lucide default).
- Color: inherit from text (`currentColor`).
- Size: 18px next to body, 22px in nav, 28–32px featured in service cards.
- Stroke-linecap: `round`. Stroke-linejoin: `round`.

**Don't:**
- Don't mix Lucide with Heroicons solid, Material, or Font Awesome — pick one set.
- Don't use emoji as icons in product UI (see Content Fundamentals).
- Don't tint icons rose by default — use `--ink` or `--navy`. Reserve rose for *active / selected* state only.

**The hat as glyph.** The cowboy hat itself is the brand's only proprietary icon. Use the SVG variants in `assets/` (mono / cream / navy / rose) as section dividers, watermarks, or favicon. Do not redraw it; do not stretch its proportions.

**Unicode characters used as glyphs:**
- `→` (U+2192) after CTA labels. Always preferred over chevrons or "Read more →".
- `·` (middle dot, U+00B7) as a metadata separator (`Lectura · 4 min`).
- `—` (em dash, U+2014) sparingly in long-form copy.

---

## 6. Index of UI surfaces

- **`ui_kits/website/`** — recreation of the marketing site (header, hero, services, case study, stats grid, contact, footer). Click-through prototype.
- **`slides/`** — title, agenda, big quote, stat, services, comparison, closing slides. Sized 1280×720.
- **`preview/`** — design-system swatch cards used by the Design System tab.

---

## 7. How to use this skill

1. **Always import `colors_and_type.css`** at the top of any new HTML file. Do not redefine tokens.
2. **Pull components from `ui_kits/`** before writing new ones. If you must invent, match the radii, shadows, and hover behavior described here.
3. **Copy assets out of `assets/`** rather than linking across projects.
4. **Write copy in Spanish** unless the user explicitly asks for English. Match the voice section above.
5. **Do not redraw the cowboy hat.** It's the one piece of art the brand owns; use the provided SVG.

— Sombrero Rosa Design System v1
