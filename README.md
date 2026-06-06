# One Construction · Digital Showroom

Премиальный светлый сайт девелопера One Construction.

Проект развивается как модульный digital showroom: утверждённая главная, витрина объектов, будущие страницы ЖК, планировки, заявки и CMS.

**Стек:** Astro 6 · React 19 · Tailwind v4 · TypeScript strict.

---

## Текущий статус

Готово:

- `/` — главная страница, визуально утверждена заказчиком.
- `/projects` — витрина всех объектов.
- `SiteFooter.astro` — общий footer.
- `SiteFooter variant="compact"` — footer для внутренних страниц.
- Проекты загружаются через Astro Content Layer.
- `showOnHomepage` управляет объектами на главной.
- `One Ordo Resort` добавлен как временный 4-й объект.

Следующий этап:

- `/projects/[slug]` — универсальный шаблон страницы объекта.
- Пилот: `Medina+`.
- Проверка шаблона на `Yacht Village`.
- Затем масштабирование на `Lotos` и `One Ordo Resort`.

---

## Основные страницы

### `/`

Approved homepage.

Поведение:

- Header “Объекты” → `/#projects`
- Hero CTA “Смотреть объекты” → `/projects`

### `/projects`

Витрина всех объектов.

Использует:

- `src/components/sections/projects/ProjectsHero.astro`
- `src/components/sections/projects/ProjectsShowcase.astro`
- `src/components/sections/projects/ProjectsCta.astro`
- `SiteFooter variant="compact"`

Поведение:

- показывает все JSON-файлы из `src/content/projects/`;
- project image и CTA ведут на `/projects/{project.id}`;
- body/specs/empty areas карточек не должны быть кликабельными.

### `/projects/[slug]`

Сейчас Phase 2 placeholder.

Нужно сделать один динамический шаблон, а не отдельные страницы руками.

---

## Архитектура

Главная собирается из изолированных секций:

- `src/components/sections/homepage/`

Страница всех объектов:

- `src/components/sections/projects/`

Общие layout-компоненты:

- `src/components/layout/SiteFooter.astro`
- `src/layouts/Layout.astro`

Данные:

- `src/content/projects/*.json`
- `src/data/company.ts`
- `src/data/homepage.ts`
- `src/data/privileges.ts`
- `src/data/purchase.ts`

Content Layer config:

- `src/content.config.ts`

---

## Project data

Текущие объекты:

- `lotos.json`
- `medina.json`
- `yacht-village.json`
- `one-ordo-resort.json`

Правила:

- не хардкодить карточки объектов;
- использовать `getCollection("projects")`;
- сортировать через `sortOrder`;
- главная показывает проекты, где `showOnHomepage !== false`;
- `/projects` показывает все проекты;
- будущий featured object лучше управлять через `isFeaturedOnProjectsPage`.

---

## Legacy / не использовать без явной задачи

Не импортировать в новые страницы без отдельного запроса:

- `src/components/modules/ProjectCard.astro`
- `src/components/modules/ConstructionTimeline.astro`
- `src/components/sections/homepage/HomeMaterials.astro`
- `src/components/sections/project-page/ProjectGallery.astro`
- `src/components/sections/project-page/ProjectSpecs.astro`
- `src/components/ui/Badge.astro`
- `src/components/ui/Button.astro`
- `src/components/ui/Input.astro`

---

## Design source

Актуальные дизайн-правила живут в:

- `DESIGN.md`

Коротко:

- premium light architectural brutalism;
- alabaster / bone / limestone;
- graphite / slate typography;
- restrained Royal Violet;
- sharp geometry;
- no rounded SaaS cards;
- important data must stay readable on mobile.

---

## AI workflow

Актуальные правила для Codex / Claude Code / Cursor / других AI-агентов живут в:

- `instructions.md`

Коротко:

- работать маленькими scoped задачами;
- редактировать только разрешённые файлы;
- не трогать утверждённую главную без явной задачи;
- не использовать legacy/stub components;
- не выдумывать бизнес-данные;
- после задач запускать `npm run typecheck` и `npm run build`.

---

## Commands

Run dev server:

    npm run dev

Typecheck:

    npm run typecheck

Build:

    npm run build

Preview production build:

    npm run preview

Known warning:

    src/content/apartments is currently empty

Это ожидаемо до реализации каталога планировок.

---

## Production risks / TODO

- Заменить временные изображения на утверждённые рендеры/фото клиента.
- Проверить legal/contact/commercial data перед production.
- Реализовать настоящую отправку формы.
- Решить судьбу `/admin`: скрыть, защитить или завершить.
- Реализовать `/projects/[slug]`.
- Позже подключить CMS / Keystatic.
