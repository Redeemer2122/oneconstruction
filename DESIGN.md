# One Construction Design Context

## Visual Direction

Premium architectural brutalism: monolith, graphite, cobalt, brushed steel, glass, construction marks, and technical precision. The interface should feel quiet but forceful.

## Geometry

- Global default: no radius.
- Acceptable exception: 2px to 4px maximum on glass-like or media surfaces when it improves rendering.
- Borders should be hairline and restrained: `0.5px` to `1px`, often `white / 10%` to `15%`.
- No pill tags as decoration unless they are functional controls.

## Color

- Use OKLCH where practical.
- Avoid `#000` and `#fff`; neutrals must be tinted toward cobalt or graphite.
- Core mood: deep cobalt, midnight blue, saturated graphite, steel silver.
- Accent strategy: restrained cobalt or metallic steel. Accent use should stay deliberate, not decorative.
- Noise/grain overlay is part of the material system and should live on a fixed, pointer-events-none layer.

## Typography

- Primary family: Geist.
- Technical family: Geist Mono or JetBrains Mono.
- Inter is banned for this project.
- Use scale shock: monumental display type against tiny uppercase technical labels.
- Headings can be very large, but must remain readable and avoid awkward multi-line wraps.
- Micro labels: uppercase, mono, around 10px, generous tracking.

## Layout

- Use confident grids, asymmetry, and large spatial pauses.
- Avoid generic three-card feature rows.
- Cards are allowed only when they frame a real repeated item, tool, project, or media object.
- Do not nest cards.
- Hero and first viewport must immediately signal One Construction as a premium developer, not a generic software product.

## Motion

- Animate transform and opacity only.
- Use `ease-out-quart`, `ease-out-quint`, or `ease-out-expo`.
- No bounce, no elastic, no playful overshoot.
- GSAP and heavy motion libraries should be isolated to specific modules and loaded only when needed.

## Components

- Buttons: sharp geometry, clear contrast, tactile but restrained hover states.
- Inputs: label above input, steel border, clear focus and error states.
- Badges: technical mono tags for phase, status, location, and IDs.
- Project cards: image-led, high contrast, architectural crop, technical metadata.

## Content Markers

Technical details may use the format:

`ID: 404-MED | LOC: 42.8746 N, 74.5698 E | STATUS: PHASE_02`
