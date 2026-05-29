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
- [x] Header navigation/content alignment completed.
- [x] Header socials and smooth anchor navigation completed.
- [x] Mobile header menu fix completed.
- [x] Visual Upgrade 1A completed.
- [x] Visual Upgrade 1B completed.
- [x] Visual Upgrade 1C completed.
- [x] Visual Upgrade 1D completed.
- [x] Purchase section polish pass completed.
- [x] Purchase section reference implementation completed.
- [x] Contact section premium upgrade completed.
- [x] Contact content correction completed.
- [x] Pass 1 Global Rhythm / Background System completed.
- [ ] Current focus: Pass 2 Section Differentiation.

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
- [x] Visual Upgrade 1B: Projects section premium upgrade.
  - Preserve Astro Content Layer flow.
  - Preserve `getCollection("projects")` and `sortOrder`.
  - Do not reintroduce `ProjectCard.astro`.
  - Keep current project JSON data unchanged unless the task explicitly requests content/data edits.
  - Improve premium visual hierarchy, image treatment, spacing rhythm, and mobile behavior for the Projects section.
- [x] Visual Upgrade 1C: Hero section upgrade.
  - Added a premium light brutalist editorial Hero composition.
  - Added a ЖК «Медина+» featured project label with the confirmed 70-month installment offer.
  - Replaced aggressive/unverified Hero metrics with restrained current-content metrics.
  - Hero 1C.2 correction strengthened the cinematic composition, larger architectural mass, CTA cluster, project plaque, and datasheet stat bar.
  - Hero 1C.3 added a dynamic rotating project showcase for Medina+, Lotos, and Yacht Village with temporary local hero imagery.
  - Hero background atmosphere pass added subtle architectural depth behind the Hero and grounded the right visual zone.
  - Hero 1C.4 art-direction push strengthened the architectural installation, exterior temporary imagery, commercial offer plaque, and datasheet atmosphere.
  - Preserved Astro-first architecture, sharp geometry, Geist / Geist Mono, and performance-safe motion.
  - Typecheck/build passed when completed.
- [x] Visual Upgrade 1D: Purchase section simple 2x2 rebuild.
  - Rebuilt `HomePurchase.astro` as a compact left-intro/right strict 2x2 purchase grid.
  - Used component-local fixed purchase card copy.
  - Removed bullets, oversized card spacing, card spans, and dashboard-style decoration.
  - Preserved `src/data/purchase.ts` unchanged.
  - Typecheck/build passed when completed.
- [x] Purchase section polish pass.
  - Added subtle paper-like card depth, restrained Royal Violet corner marks, sharper hover motion, and a lighter architectural section atmosphere.
  - Preserved the left intro plus right strict 2x2 grid structure, equal card treatment, and exact current card text.
  - Verified mobile 390px layout: one-column stack, no horizontal overflow, all four cards equal height.
  - Typecheck/build passed when completed.
- [x] Purchase section reference implementation.
  - Reimplemented `HomePurchase.astro` to match the supplied visual reference: left intro aside, dark intro CTA, right strict 2x2 equal-card grid, paper depth, thin dividers, corner marks, violet title accents, and arrow text links.
  - Kept the local purchase card text exact and preserved `src/data/purchase.ts` unchanged.
  - Verified desktop strict 2x2, all four cards equal size, exact text match, and 390px mobile stack with no horizontal overflow.
  - Typecheck/build passed when completed.
- [x] Contact section premium upgrade.
  - Rebuilt `HomeContact.astro` as a strong final conversion section: editorial intro with rule + supporting copy, scannable numbered hairline contact rows, social pills sourced from existing `company.socialLinks`, refined blueprint locator with violet corner marks, and a framed paper form card with elevated dark submit.
  - Polished `ContactForm.tsx` field rhythm, focus state, and full-width premium submit; preserved the mock submit TODO and form behavior.
  - Preserved all existing company/contact data (`src/data/company.ts` untouched).
  - Verified 390px mobile: single column, contact rows stack to one column, form card fits, submit full-width and tappable, no horizontal overflow.
  - Typecheck/build passed when completed.
- [x] Contact content correction.
  - Replaced invented Contact/form promises with old-site-aligned copy from `docs/old-site-content.md`.
  - Restored form title `Оставьте заявку` and response subtitle `И наш менеджер свяжется с вами в течении 15 минут!`.
  - Removed unverified passport planning, showroom invitation, 4-hour callback, and extra-call wording from the Contact section and React form helper text.
  - Preserved `src/data/company.ts`, existing company contact data, form fields, mock submit TODO, and form behavior.
  - Typecheck/build passed when completed.
- [x] Privileges simple reliable redesign.
  - Rebuilt `HomeTimeline.astro` as a two-column light premium brutalist section with left intro, subtle blueprint SVG, and right privilege cards.
  - Preserved all seven existing privilege records from `src/data/privileges.ts` unchanged.
  - Added a component-local inline SVG icon map with seven consistent `viewBox="0 0 48 48"` stroke icons and restrained Royal Violet accents.
  - Verified 390px mobile: `#privileges` section width 390px, seven cards rendered, no overflow inside the section.
  - Typecheck/build passed when completed.
- [x] Privileges controlled fix-pass.
  - Tightened `HomeTimeline.astro` composition without changing structure, data, libraries, or adding heavy JS.
  - Reduced and contained the left heading, softened the `One Construction.` accent, and narrowed the intro rail so it no longer competes with the card grid.
  - Rebalanced the card grid with wider-feeling cards, lower card height, tighter internal rhythm, subtler background grid, and a closer full-width seventh card.
  - Simplified the architectural visual into a clean floor-plan blueprint frame instead of a confusing building sketch.
  - Verified 390px mobile: intro first, stacked cards, all seven items rendered, heading fits, no overflow inside `#privileges`.
  - Typecheck/build passed when completed.
- [x] Privileges final cleanup pass.
  - Removed the bottom-left architectural/wireframe drawing from `HomeTimeline.astro`.
  - Kept only a minimal technical mark so the intro stays quiet without a fake building illustration.
  - Tightened the left heading containment and reduced the `One Construction.` accent so it stays inside the intro column and clears the card grid.
  - Reduced background grid visibility and kept the existing six-card plus full-width seventh-card layout unchanged.
  - Verified 390px mobile: stacked cards, heading fits, all seven items rendered, no overflow inside `#privileges`.
  - Typecheck/build passed when completed.
- [x] About / Company visual upgrade completed.
  - Rebuilt `HomeAbout.astro` as a Company Proof System section with a sharp editorial header, premium proof statement panel, and an asymmetric metric/proof grid.
  - Preserved existing About text and all five existing metrics: `10+`, `400 000`, `1 200+`, `ISO`, and `AAA`.
  - Removed local non-source metadata from the section and kept `src/data/company.ts`, `src/data/homepage.ts`, and other data files unchanged.
  - Added restrained Royal Violet accents, thin borders, subtle paper depth, architectural linework, and transform/border/shadow hover states without React or new libraries.
  - Verified 390px mobile: heading fits, metrics stack to one column, five proof items render, and `#about` has no horizontal overflow.
  - Typecheck/build passed when completed.
- [x] About / Company proof panel cleanup completed.
  - Removed the visible English/internal label from the proof panel.
  - Tightened the large left proof panel into a compact statement card with existing About text and existing advantage titles only.
  - Rebalanced the section so the metrics grid remains the dominant proof surface while the statement card reads as supporting editorial structure.
  - Preserved all five existing metrics: `10+`, `400 000`, `1 200+`, `ISO`, and `AAA`.
  - Kept `src/data/company.ts`, Content Layer, package files, and other homepage sections unchanged.
  - Verified 390px mobile: heading readable, proof panel compact at 350px wide, metrics stack cleanly, and `#about` has no horizontal overflow.
  - Typecheck/build passed when completed.
- [x] About image-led trust chapter completed.
  - Rebuilt `HomeAbout.astro` into a reference-aligned editorial trust chapter: large left headline and existing copy, dominant right architectural image plate, and bottom horizontal proof strip.
  - Added local image asset at `public/img/about/about-main.jpg` from Pexels, using a modern residential facade with glass, warm panels, and no people.
  - Preserved existing About paragraphs and all five existing metrics exactly: `10+`, `400 000`, `1 200+`, `ISO`, and `AAA`.
  - Kept `src/data/company.ts`, `src/data/homepage.ts`, other content files, and other homepage sections unchanged.
  - Verified 390px mobile: document width 390px, `#about` width 390px, local image loads, five metrics render, and no horizontal overflow is present.
  - Typecheck/build passed when completed.
- [x] About reference layout refinement completed.
  - Tightened `HomeAbout.astro` to match the supplied reference proportions: a single editorial block with a 56% left content/metrics zone and a 44% right image plate on 1440px desktop.
  - Moved the metrics strip into the left zone beneath the text, with five equal cells, stronger values, readable labels, and thin dividers.
  - Kept the current local `public/img/about/about-main.jpg`, enlarged it into a full-height right-side plate, adjusted the crop and light filter, and removed the inserted-thumbnail feeling.
  - Removed the extra caption/plus and diagonal draft decoration that could read as clipped right-edge artifacts; the section now contains paint and keeps decoration inside bounds.
  - Preserved existing About copy and all five metrics exactly: `10+`, `400 000`, `1 200+`, `ISO`, and `AAA`.
  - Kept `src/data/company.ts`, Content Layer, package files, and all other homepage sections unchanged.
  - Verified 390px mobile: document width 390px, `#about` width 390px, local image loads, five metrics render, and no horizontal overflow is present.
  - Typecheck/build passed when completed.
- [x] About reference image replacement completed.
  - Replaced `public/img/about/about-main.jpg` with a lighter Pexels temporary image: modern beige residential balcony/facade detail by Lexi Lauwers.
  - Kept `HomeAbout.astro` on the reference-spec structure: 56% left content/metrics zone and 44% full-height right image plate at 1440px desktop.
  - Removed the noisy grid texture from the About block and tuned the image crop/filter so the plate feels integrated rather than pasted in.
  - Preserved existing About copy and all five metrics exactly: `10+`, `400 000`, `1 200+`, `ISO`, and `AAA`.
  - Kept `src/data/company.ts`, Content Layer, package files, global styles, and all other homepage sections unchanged.
  - Verified 390px mobile: document width 390px, `#about` width 390px, image plate width 350px inside the section, local image loads, five metrics render, and no horizontal overflow is present.
  - Typecheck/build passed when completed.
- [x] About final polish completed.
  - Made the existing right image plate slightly more dominant by adjusting the desktop grid to a 54.5% left zone and 45.5% right image zone, with a taller image plate.
  - Strengthened the metrics strip with slightly larger values, more confident cell spacing, cleaner thin dividers, and no card/shadow treatment.
  - Kept the current `public/img/about/about-main.jpg`, existing About copy, and all five metrics exactly: `10+`, `400 000`, `1 200+`, `ISO`, and `AAA`.
  - Kept `src/data/company.ts`, Content Layer, package files, global styles, and all other homepage sections unchanged.
  - Verified 390px mobile: document width 390px, `#about` width 390px, image plate width 350px inside the section, local image loads, five metrics render, and no horizontal overflow is present.
  - Typecheck/build passed when completed.
- [x] About emergency metrics/text fix completed.
  - Reduced and contained the About headline so it stays inside the left content zone and clears the image column.
  - Fixed the metrics strip so all five values stay inside equal cells without overlap or clipping at desktop and 390px mobile.
  - Removed strange unit labels such as `QC` and `ARCH`, using existing metric titles and existing body text from `src/data/homepage.ts` instead.
  - Preserved the five metric values exactly: `10+`, `400 000`, `1 200+`, `ISO`, and `AAA`.
  - Kept the current `public/img/about/about-main.jpg`, `src/data/company.ts`, package files, and all other homepage sections unchanged.
  - Verified 390px mobile: document width 390px, `#about` width 390px, all metric value `scrollWidth <= clientWidth`, five metrics render, and no horizontal overflow is present.
  - Typecheck/build passed when completed.
- [x] Pass 1 Global Rhythm / Background System.
  - Added shared homepage chapter surface classes and section stitch transitions in `src/styles/global.css`.
  - Replaced the accidental page-wide fixed blueprint grid with a calmer paper base while preserving Hero/Projects section-owned backgrounds.
  - Tuned About, Privileges, Purchase, and Contact backgrounds into a clearer warm-bone, restrained technical, commercial paper, and contact-prep rhythm.
  - Normalized section padding and reduced obvious Contact/Purchase dead space without rebuilding section structure.
  - Reduced repeated numbered micro-labels and softened repeated Royal Violet usage across labels, card metadata, rules, corners, and hover states.
  - Preserved `src/data/company.ts`, `src/data/privileges.ts`, `src/data/purchase.ts`, project content, package files, Hero logic, and Projects data/rendering logic unchanged.
  - Verified 390px mobile: document `scrollWidth` remained 390px, target sections measured 390px wide, and no page-level horizontal overflow was present.
  - Typecheck/build passed when completed.

### Current

- [ ] Pass 2 Section Differentiation.

### Planned

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

- Pass 2 Section Differentiation.
