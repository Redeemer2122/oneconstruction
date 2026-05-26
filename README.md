# One Construction · Цифровой Шоурум

Премиальный светлый сайт девелопера One Construction. Astro 6.3.6 · React 19 · Tailwind v4 · TypeScript.

## Стек

- **Astro 6.3.6** — статика по умолчанию, острова для интерактивности.
- **React 19** — клиентские острова (`ContactForm`).
- **Tailwind v4** — CSS-first тема (`src/styles/global.css`) с кастомной светлой палитрой (Alabaster, Bone, Royal Violet).
- **TypeScript strict** — строгая типизация.

## Дизайн-законы

- **Запрет скруглений** (`border-radius: 0`).
- **Scale Shock** (монументальные display-заголовки + Geist Mono технические детали).
- **Читаемость данных**: микро-mono подписи допустимы как атмосфера, но реальные бизнес-данные должны оставаться читаемыми, особенно на мобильных.
- **Светлая база** (алебастр/кость вместо черного, глубокий графит вместо белого текста).
- **Акцент** — Royal Violet / Indigo.

## Текущая Архитектура

- Главная страница собирается в `src/pages/index.astro` из секций `src/components/sections/homepage/`.
- Проекты загружаются через Astro Content Layer: `src/components/sections/homepage/HomeProjects.astro` вызывает `getCollection("projects")` и сортирует элементы по `sortOrder`.
- Конфиг Content Layer находится в `src/content.config.ts`.
- Текущие файлы проектов:
  - `src/content/projects/lotos.json`
  - `src/content/projects/yacht-village.json`
  - `src/content/projects/medina.json`
- `src/content/apartments/` запланирован для будущего каталога планировок и сейчас пустой, кроме служебного `.gitkeep`.
- Промежуточные data-файлы: `src/data/company.ts`, `src/data/homepage.ts`, `src/data/purchase.ts`, `src/data/privileges.ts`. Это текущие источники секционного контента и кандидаты для будущей CMS-миграции.

## Legacy / Не Использовать Без Явной Задачи

- `src/components/modules/ProjectCard.astro` — legacy/unused.
- `src/components/modules/ConstructionTimeline.astro` — legacy/unused.
- `src/components/sections/homepage/HomeMaterials.astro` — legacy/unused.
- Не импортировать эти компоненты обратно на главную страницу, если будущая задача явно не просит их вернуть.

## Фазы

- **Текущий статус** — основная архитектура главной стабилизирована, контент централизован, данные проектов перенесены в Content Layer.
- **Критические content fixes** — начаты.
- **Текущий фокус** — визуальный апгрейд секций главной, начиная с `Projects` и `Hero`.
- **Фаза 3: Страницы объектов и Каталог планировок** — [ЗАПЛАНИРОВАНО]
- **Фаза 4: Управление контентом (Keystatic CMS)** — [ЗАПЛАНИРОВАНО]
