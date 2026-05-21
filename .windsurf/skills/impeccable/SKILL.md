---
name: impeccable
source: https://github.com/pbakaus/impeccable
description: Impeccable design language — shared design laws & absolute bans. Cached locally for One Construction.
---

# Impeccable — Shared Design Laws (cached excerpt)

## Color
- Use OKLCH. Reduce chroma as lightness → 0 or 100.
- Never `#000` or `#fff`. Tint every neutral toward brand hue (chroma 0.005–0.01).
- Color strategy first: Restrained / Committed / Full palette / Drenched.
- "1 accent ≤10%" applies to Restrained only.

## Theme
- Dark vs light is never a default. Write the physical scene sentence (who/where/light/mood). The sentence must force the answer.

## Typography
- Body line length 65–75ch.
- Hierarchy: scale + weight contrast ≥ 1.25 ratio. No flat scales.

## Layout
- Vary spacing for rhythm. Same padding everywhere = monotony.
- Cards are the lazy answer. Nested cards always wrong.
- Don't wrap everything in a container.

## Motion
- Don't animate CSS layout properties.
- Ease-out exponential (quart / quint / expo). NO bounce, NO elastic.

## Absolute bans (match-and-refuse)
- Side-stripe borders > 1px as accent on cards/list/callout/alert.
- Gradient text via `background-clip: text`.
- Glassmorphism as default decoration.
- The hero-metric template (big number + small label + supporting + gradient).
- Identical card grids (icon + heading + text repeated).
- Modal as first thought.

## Copy
- Every word earns its place.
- NO em dashes. No `--`. Use commas / colons / semicolons / periods / parentheses.

## AI slop test
- First-order: if theme/palette is guessable from the category alone (real-estate → navy-and-gold), rework.
- Second-order: if guessable from "category + anti-reference", rework again.
