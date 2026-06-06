# One Construction · AI Instructions

These rules apply to Codex, Claude Code, Cursor, ChatGPT agents, and any other AI assistant working on this project.

## Core rule

Work in small, scoped changes.

Do not “improve the whole project” unless explicitly asked. Preserve the approved homepage and existing visual direction.

---

## Project root

Always work only inside:

`E:\oneconstruction`

Before editing, confirm the current working directory.

Never read from or edit other local projects.

---

## Current status

Stable pages:

- `/` — approved homepage.
- `/projects` — objects showcase page.

Planned:

- `/projects/[slug]` — dynamic project detail pages.

The next major task is the project detail template, starting with `Medina+` and testing against `Yacht Village`.

---

## Architecture rules

- Astro-first.
- Use Content Layer for project data.
- Do not hardcode project cards manually.
- Keep homepage sections isolated.
- Prefer data/content edits over hardcoded component copy.
- Do not add new libraries without approval.
- Do not create unnecessary backend complexity.

Project data source:

- `src/content/projects/*.json`

Current behavior:

- Homepage shows projects where `showOnHomepage !== false`.
- `/projects` shows all projects.
- Future: use `isFeaturedOnProjectsPage` to control featured object.

---

## Protected files

Do not edit unless the task explicitly requires it:

- `src/styles/global.css`
- `src/scripts/motion.ts`
- `src/layouts/Layout.astro`
- `package.json`
- `astro.config.mjs`
- `tsconfig.json`
- existing approved homepage sections

Homepage is approved. Avoid touching it unless the request is specifically about homepage.

---

## Legacy / unused components

Do not use these for new pages unless explicitly requested:

- `src/components/modules/ProjectCard.astro`
- `src/components/modules/ConstructionTimeline.astro`
- `src/components/sections/homepage/HomeMaterials.astro`
- `src/components/sections/project-page/ProjectGallery.astro`
- `src/components/sections/project-page/ProjectSpecs.astro`
- `src/components/ui/Badge.astro`
- `src/components/ui/Button.astro`
- `src/components/ui/Input.astro`

Create new page-specific components when needed.

---

## Visual rules

Follow `DESIGN.md`.

Key rules:

- premium light architectural brutalism;
- alabaster / bone / limestone backgrounds;
- graphite / slate / deep navy text;
- restrained Royal Violet accents;
- no rounded cards;
- no SaaS aesthetic;
- no heavy shadows or glow;
- thin borders;
- strong imagery;
- important data must remain readable on mobile.

Do not hide important information only on hover.

---

## Content rules

Never invent:

- prices;
- discounts;
- installment terms;
- delivery dates;
- awards;
- certificates;
- construction milestones;
- legal claims;
- CRM promises;
- response time promises.

Use known sources:

- `docs/old-site-content.md` if available;
- current `src/content/projects/*.json`;
- `src/data/*.ts`;
- official client-provided text.

If data is missing, mark it as temporary or needs verification.

---

## Form / backend rules

Current form may still be mock/intermediate.

For future real submission:

- keep secrets out of frontend;
- use `.env` and Vercel Environment Variables;
- validate server-side;
- prefer simple integrations first:
  1. Telegram/WhatsApp notification;
  2. email;
  3. Google Sheets;
  4. CRM;
  5. CMS/backend only if needed.

Do not add backend services without approval.

---

## Required workflow

Before editing:

1. Confirm scope.
2. List files you plan to edit.
3. Confirm working directory is `E:\oneconstruction`.

During editing:

- edit only allowed files;
- do not commit unless explicitly asked;
- do not touch unrelated files;
- keep visual changes narrow.

After editing, always run:

- `npm run typecheck`
- `npm run build`

Then return:

- files changed;
- what changed;
- confirm protected files were not touched;
- typecheck/build result;
- desktop/mobile visual notes if UI changed.

---

## Git rules

Do not commit automatically.

When user asks for backup:

1. `git status --short`
2. stage explicit files only;
3. `git diff --cached --stat`
4. commit with a clear message;
5. `git push origin main`
6. optional tag for stable milestones.

Avoid `git add .`.

Do not commit:

- `.codex/`
- `.tmp/`
- debug logs;
- screenshots;
- local artifacts;
- secrets.

---

## Prompt discipline

Good task prompts should include:

- Task
- Edit only
- Do NOT edit
- Goal
- Fix list
- Hard rules
- Validation
- Return

Avoid vague prompts like:

- “make it better”
- “redesign everything”
- “be creative” without scope

---

## Acceptance checklist

Before calling work done:

- build passes;
- typecheck passes;
- no unrelated files changed;
- homepage still works;
- `/projects` still works if affected;
- mobile 390px has no horizontal overflow;
- content is not invented;
- important data is readable;
- visual result fits One Construction style.
