# One Construction — Dynamic Task Tracker and Roadmap

## AI Auto-Update Protocol

- Any AI agent working on this project must update `tasks.md` after completing a task.
- If a task changes architecture, content, visual direction, or roadmap, `tasks.md` must reflect the new state before the task is considered complete.
- Do not mark implementation tasks complete unless `npm run typecheck` and `npm run build` pass for the project.
- Documentation-only tasks do not require build unless they affect code, generated types, content schemas, or runtime behavior.
- Keep this file aligned with `README.md`, `DESIGN.md`, `PRODUCT.md`, `instructions.md`, and the real source tree.
- Do not use outdated architecture paths or legacy component assumptions. Prefer the current Astro Content Layer and homepage section structure documented below.

## Current Stable State

- [x] `main` is the current primary branch.
- [x] `backup-current-redesign` branch exists.
- [x] `backup-current-redesign-2026-05-26` tag exists.
- [x] Homepage architecture stabilized.
- [x] Content data centralized.
- [x] Project data moved to Astro Content Layer.
- [x] Content audit created at `docs/content-audit.md`.
- [x] Old site content extraction created at `docs/old-site-content.md`.
- [x] Critical Content Fixes 1 completed.
- [x] Visual Upgrade 1A completed.
- [ ] Current focus: Visual Upgrade 1B — Projects section premium upgrade.

## Phase 1 — Infrastructure [DONE]

- [x] Astro 6.3.6 initialized.
- [x] React islands available for interactive components.
- [x] Tailwind v4 configured through CSS-first styling.
- [x] TypeScript strict setup in place.
- [x] GitHub/Vercel workflow established.
- [x] Core folders created: `src/components`, `src/layouts`, `src/pages`, `src/styles`, `src/data`, `src/content`.

## Phase 2 — Homepage Architecture and Content Stabilization [DONE]

- [x] Header/nav cleanup completed.
- [x] `src/data` created as the current intermediate data layer.
- [x] `src/data/company.ts` centralized company/contact/legal data.
- [x] `src/data/homepage.ts` centralized hero and about homepage content.
- [x] `src/data/purchase.ts` centralized purchase options.
- [x] `src/data/privileges.ts` centralized privilege/standard items.
- [x] Project data moved from component-local assumptions into Astro Content Layer.
- [x] Current Content Layer config path is `src/content.config.ts`.
- [x] Project files now live in:
  - `src/content/projects/lotos.json`
  - `src/content/projects/yacht-village.json`
  - `src/content/projects/medina.json`
- [x] `HomeProjects.astro` uses `getCollection("projects")`.
- [x] `HomeProjects.astro` sorts projects by `sortOrder`.
- [x] `docs/old-site-content.md` created from old homepage extraction.
- [x] `docs/content-audit.md` created to compare old content with beta implementation.
- [x] Critical Content Fixes 1 completed:
  - Contact data aligned to old-site source.
  - Current contact data: `+996 (888) 999-999`, `monolitkapitals@gmail.com`, `г. Бишкек, ул. Юнусалиева 86/1`.
  - Legal company name, INN, and license restored from old-site source.
  - Purchase installment copy softened around object-specific terms.
  - Trade-in ruble metric removed.
  - Lotos installment marked `needs_verification`.

## Phase 3 — Homepage Visual Upgrade [IN PROGRESS]

### Completed

- [x] Visual Upgrade 1A: global visual safety fixes.
  - Mobile horizontal overflow guarded.
  - Mobile micro-mono readability improved.
  - CTA baseline readability improved.
  - Footer/contact collision risks reduced.
  - Hero/project image fallback behavior added for broken or slow remote images.
  - Typecheck/build passed when completed.

### Current

- [ ] Visual Upgrade 1B: Projects section premium upgrade.
  - Preserve Astro Content Layer flow.
  - Preserve `getCollection("projects")` and `sortOrder`.
  - Do not reintroduce `ProjectCard.astro`.
  - Keep current project JSON data unchanged unless the task explicitly requests content/data edits.
  - Improve premium visual hierarchy, image treatment, spacing rhythm, and mobile behavior for the Projects section.

### Planned

- [ ] Visual Upgrade 1C: Hero section upgrade.
- [ ] Visual Upgrade 1D: Purchase section upgrade.
- [ ] Visual Upgrade 1E: Contact/Footer polish.
- [ ] Visual Upgrade 1F: Mobile polish.
- [ ] Visual Upgrade 1G: full visual QA pass.

## Phase 4 — Project Detail Pages [PLANNED]

- [ ] Build/finish `src/pages/projects/[slug].astro`.
- [ ] Project detail layout.
- [ ] Project gallery.
- [ ] Project specs.
- [ ] Project CTA.
- [ ] Construction timeline.
- [ ] SEO metadata per project.
- [ ] Confirm URL strategy against old public URLs:
  - Old: `/lotos`, `/yachtvillage`, `/medina`
  - Current planned beta: `/projects/lotos`, `/projects/yacht-village`, `/projects/medina`

## Phase 5 — Apartments / Floor Plans [PLANNED]

- [ ] Add `src/content/apartments/*.json`.
- [ ] Finalize apartment schema in `src/content.config.ts`.
- [ ] Define project-apartment relationship.
- [ ] Apartment/floor-plan filtering.
- [ ] Future interactive plans.
- [ ] Keep React islands isolated for interactive filtering/plans.

## Phase 6 — CMS / Admin [PLANNED]

- [ ] Keystatic CMS integration.
- [ ] Edit projects.
- [ ] Edit apartments.
- [ ] Edit homepage singleton.
- [ ] Edit company/contact data.
- [ ] Media workflow for real project imagery.
- [ ] Keep CMS migration compatible with existing Content Layer structure.

## Legacy / Currently Unused Components

- `src/components/modules/ProjectCard.astro` — legacy/unused.
- `src/components/modules/ConstructionTimeline.astro` — legacy/unused.
- `src/components/sections/homepage/HomeMaterials.astro` — legacy/unused.
- These components must not be imported into the homepage unless a future task explicitly asks for them.
- Do not claim `ProjectCard.astro` is used on the homepage.
- Do not claim `HomeProjects.astro` uses an inline hardcoded project array.

## Current Risks / Needs Verification

- [ ] Real project images still needed. Current hero/project imagery uses remote Unsplash URLs and fallback styling.
- [ ] Hero strategy needs client approval: old site was Medina/offer-led; beta is brand-led.
- [ ] Company metrics need verification:
  - `250+` objects
  - `15+` years on market
  - `480+` apartments
  - `10+` years
  - `400 000 м²`
  - `1 200+` families
- [ ] Purchase claims need verification:
  - `до 12%` discount
  - installment conditions
  - Trade-in terms
  - `+ 3%` loyalty
  - bonus/pre-launch claims
- [ ] Privilege technical claims need verification:
  - Class A
  - `Rw ≥ 54 дБ`
  - BIM/CAD
  - 5-stage filtration
  - HVAC
  - 24/7 security
  - 7-minute walkability
- [ ] Legal links are placeholders:
  - `privacyPolicyHref: "#"`
  - `documentsHref: "#"`
- [ ] Coordinates need verification against the approved office address.
- [ ] `src/content/apartments` is currently empty except for `.gitkeep`; the Astro warning about no apartment files is expected.
- [ ] Confirm whether old trust/process copy should be restored, rewritten, or intentionally omitted.

## Architecture Notes for Future Agents

- Current Content Layer config: `src/content.config.ts`.
- Current projects collection: `src/content/projects/*.json`.
- Current empty/planned apartments collection: `src/content/apartments/`.
- Current homepage composition: `src/pages/index.astro`.
- Current Projects data flow: `HomeProjects.astro` calls `getCollection("projects")` and sorts by `sortOrder`.
- Current intermediate data files:
  - `src/data/company.ts`
  - `src/data/homepage.ts`
  - `src/data/purchase.ts`
  - `src/data/privileges.ts`
- Visual upgrades must preserve:
  - Astro-first architecture
  - Content Layer data flow
  - fast performance
  - future CMS readiness
  - premium light brutalist direction
  - sharp geometry
  - Geist / Geist Mono
  - Royal Violet accent

## Next Recommended Task

- Visual Upgrade 1B — Projects section premium upgrade.
