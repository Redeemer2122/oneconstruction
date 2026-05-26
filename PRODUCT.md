# One Construction Product Context (Light Edition)

## Product Purpose

One Construction is a premium digital showroom for a residential developer. The site sells material quality, architectural ambition, and controlled scale before individual floor plans. The light, gallery-like aesthetic reflects high-end real estate, transparency, and premium status.

## Brand Voice

Monolithic, precise, architectural, technical but light and spacious. The tone feels like high-quality concrete, matte steel, thick textured paper, and daylight architectural rendering. No startup cliches, no cheap sales words like "elevate" or "next-gen".

## Anti-References

- Dark neon crypto-palettes, purple-blue neon glows, soft rounded SaaS cards.
- Cheap pure-white bootstrap templates.
- Decorative glassmorphism without purpose.
- Emoji, stock text, placeholder copy.

## Current Project Phase

- Main homepage architecture is stabilized.
- Content data is centralized.
- Project data moved to Astro Content Layer.
- Critical content fixes have started.
- Current focus: visual upgrade of homepage sections, starting with Projects and Hero.

## Content Architecture

- Project data lives in `src/content/projects/lotos.json`, `src/content/projects/yacht-village.json`, and `src/content/projects/medina.json`.
- `HomeProjects.astro` loads project entries through `getCollection("projects")` and sorts by `sortOrder`.
- Content Layer configuration lives at `src/content.config.ts`.
- `src/content/apartments/` is planned for future apartment/floor-plan data and is currently empty except for `.gitkeep`.
- Current intermediate data files are `src/data/company.ts`, `src/data/homepage.ts`, `src/data/purchase.ts`, and `src/data/privileges.ts`. Treat them as valid current sources and future CMS migration candidates.

## Implementation Guardrails

- Visual design remains first, but upgrades must preserve Astro-first architecture, Content Layer data flow, performance, and future CMS readiness.
- Do not reintroduce legacy homepage components unless a task explicitly asks for them.
