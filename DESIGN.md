# One Construction Design Context (Premium Light)

## Visual Direction

Premium architectural brutalism in a light spectrum: monolith, warm alabaster, chalk bone, Royal Violet, indigo ink, matte silver, and architectural blueprint lines. The interface feels clean, airy, but incredibly forceful.

## Geometry

- Global default: `border-radius: 0` (no radius).
- Acceptable exception: 2px maximum on glass/media elements if strictly needed.
- Borders are sharp and restrained hairlines: `0.5px` to `1px`, using `black / 5%` or `slate-200`.
- No decorative pill tags.

## Color (Tailwind v4 / OKLCH)

- Avoid pure `#FFF` and pure `#000`.
- Base background: Rich warm neutrals (`#FBFBFA` / `#F5F4F0` - Alabaster / Bone).
- Typography: Deep charcoal, anthracite, or indigo-black (`text-slate-900`).
- Accent strategy: Royal Violet / Deep Indigo. Deliberate technical execution, never decorative.
- Overlay: Premium fine-grain paper texture on a fixed, `pointer-events-none` layer.

## Typography

- Primary family: Geist.
- Technical family: Geist Mono. Inter is strictly banned.
- Scale shock: Monumental display headings against tiny uppercase technical mono labels (`10px`, tracking generous).
- Real business information must remain readable, especially on mobile. Micro-mono labels are allowed as atmosphere, but important data such as prices, delivery, contact details, project stats, and CTAs must not become unreadable.

## Layout & Motion

- Confident grids, asymmetry, purposeful negative space ("air").
- Avoid generic 3-card rows.
- Motion: Animate transform and opacity only. Use `ease-out-expo`. No bounce or playful overshoot. Heavy libraries (GSAP) are strictly isolated.

## Architecture Guardrails

- Visual upgrades come first, but must not break Astro-first architecture, Content Layer data flow, fast static performance, or future CMS readiness.
- Homepage sections should stay isolated and imported by `src/pages/index.astro`.
- Project presentation should continue to read from the Astro Content Layer rather than hardcoded arrays or legacy project cards.
- Keep sharp geometry, Geist / Geist Mono, Royal Violet, and the premium light brutalist direction intact during visual upgrades.
