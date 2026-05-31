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
- [x] Privileges reference-based rebuild completed.
- [x] Privileges reference refinement pass completed.
- [x] Purchase commercial decision block rebuild completed.
- [x] Purchase reference-based refinement completed.
- [ ] Current focus: Contact conversion upgrade.

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
- [x] About integration polish completed.
  - Improved the current About composition without redesigning it: added subtle shared edge rules so the image plate, left copy zone, and metrics strip read as one editorial block.
  - Strengthened the metrics strip with slightly fuller vertical padding, a cleaner translucent surface, and a carefully clamped value scale that preserves no-overlap behavior.
  - Kept the existing headline, copy, current `public/img/about/about-main.jpg`, and all five metrics exactly: `10+`, `400 000`, `1 200+`, `ISO`, and `AAA`.
  - Kept `src/data/company.ts`, Content Layer, package files, global styles, and all other homepage sections unchanged.
  - Verified 390px mobile and 1440px desktop: document width matches viewport, all metric value `scrollWidth <= clientWidth`, five metrics render, and no horizontal overflow is present.
  - Typecheck/build passed when completed.
- [x] About metrics copy and clipping fix completed.
  - Replaced the About metrics display copy in `HomeAbout.astro` with the exact approved five title/value and description pairs supplied for this pass.
  - Removed metric text line clamping, hidden overflow, and nowrap treatment so the full metric copy is visible on desktop and wraps naturally on mobile.
  - Preserved the current About layout and image while adjusting metric typography/spacing only enough to prevent clipping.
  - Kept `src/data/company.ts`, Content Layer, package files, global styles, and all other homepage sections unchanged.
  - Verified 1440px desktop and 390px mobile: exact metric copy matches, metric text fits horizontally, metric cells are not vertically clipped, and no horizontal overflow is present.
  - Typecheck/build passed when completed.
- [x] About editorial statement copy integration completed.
  - Integrated the exact approved About headline, lead paragraph, and five numbered statement rows directly in `HomeAbout.astro`.
  - Rendered the body copy as compact editorial statement rows with mono numbers and thin dividers, avoiding a long paragraph wall and avoiding hover-only hidden content.
  - Preserved the current image-led layout, current `public/img/about/about-main.jpg`, and current metrics strip/copy.
  - Kept `src/data/company.ts`, Content Layer, image file, package files, global styles, and all other homepage sections unchanged.
  - Verified 390px mobile and 1440px desktop: headline, lead, and all five statement rows match exactly, statement rows do not overflow or clip, image loads, five metrics render, and no horizontal overflow is present.
  - Typecheck/build passed when completed.
- [x] About layout micro-polish completed.
  - Removed the detached top `01 / О компании` row and replaced it with an integrated `О КОМПАНИИ` label inside the left content column above the headline.
  - Reduced the About headline scale slightly, improved line-height, and added internal left-column padding so headline, lead, statement rows, and metrics align more comfortably.
  - Improved statement row readability with slightly fuller spacing and line-height while preserving the exact copy and avoiding hover-only hidden content.
  - Added more breathing room to metric cells while preserving the exact metric copy, five equal cells, current image, and current section structure.
  - Kept `src/data/company.ts`, Content Layer, image file, package files, global styles, and all other homepage sections unchanged.
  - Verified 390px mobile: no detached topbar, integrated label present, headline fits, statement rows and metrics fit without clipping, image source unchanged, and no horizontal overflow is present.
  - Typecheck/build passed when completed.
- [x] About metrics micro-polish completed.
  - Polished only the bottom About metric strip in `HomeAbout.astro`.
  - Added a controlled two-line display for `Более 10 лет опыта` as `Более 10 лет` / `опыта` while preserving the full metric text.
  - Increased metric cell padding slightly, improved the value-to-description gap, and raised description line-height so the fourth and fifth cells breathe better.
  - Preserved the current About layout, current image, exact metric copy, five equal cells, thin dividers, and restrained violet micro-rules.
  - Kept `src/data/company.ts`, Content Layer, image file, package files, global styles, and all other homepage sections unchanged.
  - Verified 390px mobile: five metrics render, first metric displays in the intended two-line structure, metric cells have no horizontal overflow or clipping, image source unchanged, and no horizontal overflow is present.
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
- [x] Privileges reference-based rebuild.
  - Rebuilt `HomeTimeline.astro` close to the supplied reference: left editorial intro, right bento standards wall, sharp hairline geometry, restrained Royal Violet details, and integrated image fragments instead of a generic card grid.
  - Updated `src/data/privileges.ts` with the exact official copy for all seven privilege items and removed previous unverified technical tags/claims from the rendered section.
  - Added temporary local privilege images:
    - `public/img/privileges/facade.jpg`
    - `public/img/privileges/plan.jpg`
    - `public/img/privileges/water.jpg`
    - `public/img/privileges/green-facade.jpg`
    - `public/img/privileges/entrance.jpg`
  - Verified desktop: left intro column plus right non-equal bento wall, 7 items rendered, 5 image fragments rendered, no clipped privilege text, and no horizontal overflow at 1440px.
  - Verified 390px mobile: intro stacks before all seven standards, all items and image fragments fit, headline fits, and document `scrollWidth` remained 390px.
  - Typecheck/build passed when completed.
- [x] Privileges reference refinement pass.
  - Refined `HomeTimeline.astro` without changing other homepage sections: enlarged the full premium panel, removed the weak blueprint drawing, and tuned the desktop proportions to about 34% intro / 66% bento wall.
  - Increased bento row height, title scale, text spacing, and media coverage so the right side reads as a dominant standards wall instead of a compressed table.
  - Added stronger temporary media coverage for all seven privilege blocks, including:
    - `public/img/privileges/quiet-lobby.jpg`
    - `public/img/privileges/courtyard-water.jpg`
  - Preserved the exact official seven privilege items in `src/data/privileges.ts`; no copy changes were needed.
  - Verified desktop: 7 items, 7 image fragments, no clipped text, no horizontal overflow, and right wall width ratio around 66%.
  - Verified 390px mobile: clean stack, all 7 items visible, images contained as side fragments, headline fits, and document `scrollWidth` remained 390px.
  - Typecheck/build passed when completed.
- [x] Privileges layout correction pass.
  - Corrected only `HomeTimeline.astro` and `tasks.md`; did not touch `.codex`, other homepage sections, data files, package files, or global CSS.
  - Reworked the right side from the compressed six-column/table-like layout into a larger 2+1+2+2 bento mosaic: two large top blocks, one full-width standards block, and two rows of medium blocks.
  - Increased the overall panel scale: desktop section frame is now about 1099px tall, with the intro and bento wall both about 916px tall at 1440px.
  - Preserved the reference proportions: left intro around 34%, right bento wall around 66%.
  - Preserved exact official privilege copy, order, and seven-item count.
  - Verified desktop: 7 items, 7 images, no clipped content, no horizontal overflow.
  - Verified 390px mobile: clean stacked layout, all 7 items visible, image fragments contained, no clipped content, no horizontal overflow.
  - Typecheck/build passed when completed.
- [x] Privileges left column and scale polish.
  - Polished only `HomeTimeline.astro` and `tasks.md`; preserved the current 2+1+2+2 bento wall direction, official copy, item order, and image set.
  - Increased the section frame breathing room and slightly widened the panel so it reads as a full homepage section rather than a small inserted module.
  - Strengthened the left editorial column with larger internal padding, a more intentional headline scale, calmer label-to-headline spacing, improved intro spacing, and an integrated bottom alignment rule for the `01 / 07 / СИСТЕМА ПРИВИЛЕГИЙ` marker.
  - Applied a subtle shared image treatment adjustment for the bottom bento fragments so media stays visible and consistent without replacing assets.
  - Verified desktop: intro/wall ratio around 35%/65%, both columns about 936px tall, 7 items and 7 images render, no clipped content, no horizontal overflow.
  - Verified 390px mobile: intro is not cramped, title fits, all 7 items and images render, no clipped content, no horizontal overflow.
  - Typecheck/build passed when completed.
- [x] Privileges visible scale correction.
  - Made a visible scale change in `HomeTimeline.astro` rather than another micro-polish pass; preserved the official copy and the 2+1+2+2 bento structure.
  - Increased desktop section scale: frame height is now about 1318px at 1440px viewport, with intro and bento wall both about 1102px tall.
  - Increased left headline scale and editorial spacing while preventing desktop clipping.
  - Increased bento row heights, text scale, image area widths, and media visibility so the right wall reads as the main visual standards system.
  - Verified desktop: 7 items, 7 images, no clipped content, no horizontal overflow.
  - Verified 390px mobile: all 7 items visible, title fits, no clipped content, no horizontal overflow.
  - Typecheck/build passed when completed.
- [x] Privileges final small polish completed.
  - Polished only `HomeTimeline.astro` and `tasks.md`; preserved the current left editorial column plus 2+1+2+2 bento standards wall.
  - Kept official privilege copy, item order, seven-item count, and current image assets unchanged.
  - Calmed the left column spacing, reduced background and accent noise, and kept the system marker integrated with the editorial rhythm.
  - Unified bento typography, content padding, light text veils, image overlays, object-fit behavior, and calmer media filters without making the cells identical.
  - Verified 390px mobile: 7 items, 7 images, readable text, no clipped text, no horizontal overflow.
  - Typecheck/build passed when completed.
- [x] Purchase commercial decision block rebuild completed.
  - Rebuilt `HomePurchase.astro` as a premium commercial decision system: left editorial purchase intro, dark primary contact CTA, and a framed right-side 2x2 purchase option matrix.
  - Preserved the existing component-local purchase option copy, option order, and four equal purchase scenarios: `Полная оплата`, `Рассрочка 0%`, `Trade-in`, and `Бонусная программа`.
  - Kept `src/data/purchase.ts`, package files, global styles, Content Layer, and all other homepage sections unchanged.
  - Added restrained Royal Violet accents, thin rules, graphite typography, sharp geometry, subtle paper depth, equal desktop matrix cells, and CSS-only hover/focus motion.
  - Verified desktop: 4 options render in an equal 2x2 matrix, CTAs stay aligned/contained, and no horizontal overflow appears inside `#purchase`.
  - Verified 390px mobile: intro renders first, main CTA remains full-width and tappable, all 4 options stack cleanly, no CTA clipping, and document `scrollWidth` remains 390px.
  - Typecheck/build passed when completed.
- [x] Purchase reference-based refinement completed.
  - Refined `HomePurchase.astro` closer to the attached reference: clean left intro column, large stacked purchase headline, dark primary CTA, and a simple right-side 2x2 equal purchase matrix.
  - Aligned `src/data/purchase.ts` with the official purchase copy and removed the previous extra bullets, metric labels, and unrequested purchase conditions.
  - Used the screenshot value for installment copy: `до 70 мес.` / `до 70 месяцев`.
  - Preserved exactly four purchase options: `Полная оплата`, `Рассрочка 0%`, `Trade-in`, and `Бонусная программа`, with no option made meaningfully dominant.
  - Kept package files, global styles, Content Layer, company data, privileges data, and all other homepage sections unchanged.
  - Verified desktop: intro/matrix ratio is about 38%/62%, cards render as an equal 2x2 matrix, CTAs stay aligned, and no overflow appears inside `#purchase`.
  - Verified 390px mobile: intro renders first, main CTA remains full-width and tappable, all four options stack cleanly, no CTA clipping, and document `scrollWidth` remains 390px.
  - Typecheck/build passed when completed.

### Current

- [ ] Contact conversion upgrade.

### Planned

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
- [ ] Temporary Privileges image fragments need final approved production replacements:
  - `public/img/privileges/facade.jpg`
  - `public/img/privileges/quiet-lobby.jpg`
  - `public/img/privileges/plan.jpg`
  - `public/img/privileges/water.jpg`
  - `public/img/privileges/green-facade.jpg`
  - `public/img/privileges/entrance.jpg`
  - `public/img/privileges/courtyard-water.jpg`
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

- Contact conversion upgrade.
