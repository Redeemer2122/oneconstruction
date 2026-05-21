# One Construction · Цифровой Шоурум

Премиальный сайт девелопера One Construction. Astro 5 · React 19 · Tailwind v4 · TypeScript.

## Стек

- **Astro 5** — статика по умолчанию, нулевой JS, острова — только там, где нужна интерактивность.
- **React 19** — изолированные client-islands (`ContactForm` и т.д.).
- **Tailwind v4** через `@tailwindcss/vite` — CSS-first тема (`src/styles/global.css`).
- **TypeScript strict** — строгая типизация контента (Zod схемы).

## Скрипты

```bash
npm install       # установить зависимости
npm run dev       # дев-сервер (http://localhost:4321)
npm run build     # прод-сборка
npm run preview   # превью прод-сборки
npm run typecheck # astro check
```

## Архитектура (`src/`)

- `components/ui/` — атомы (Button, Input, Badge).
- `components/modules/` — крупные переиспользуемые блоки (ProjectCard, ContactForm, ConstructionTimeline).
- `components/sections/` — секции конкретных страниц (homepage/, project-page/).
- `content/` — Zod-валидируемый контент (Keystatic в Фазе 2).
- `layouts/Layout.astro` — корневой шаблон + noise overlay.
- `pages/` — роуты.
- `styles/global.css` — Tailwind v4 theme (cobalt + steel + ink, OKLCH).
- `lib/` — утилиты.

## Дизайн-законы (фиксировано)

- **Запрет скруглений.** `*` глобально обнулён до `border-radius: 0`. Максимум — `2px` для стеклянных карточек.
- **Scale Shock.** Гигантские display-заголовки + моно-микродетали (`Geist Mono`, 10px, uppercase, `tracking-[0.18em]`).
- **Цвет.** OKLCH. Никаких `#000` / `#fff`. Все нейтрали тинтованы в кобальт. Один акцент — кобальт.
- **Шрифты.** Geist + Geist Mono. **Inter забанен.**
- **Моушн.** Только `ease-out-quart/quint/expo`. **Bounce и elastic запрещены.** Анимация — только `transform` и `opacity`.
- **Ноис-оверлей.** Один `fixed pointer-events-none` элемент, не на скролл-контейнерах.
- **Острова.** GSAP / тяжёлые либы — точечно, на конкретный модуль, через `client:visible`.

## Скиллы (анти-slop guard)

Активные SKILL-файлы в `.windsurf/skills/`:

- `taste-skill/SKILL.md` — High-Agency Frontend (Leonxlnx).
- `impeccable/SKILL.md` — Impeccable Design Laws (pbakaus).

## Логотип

`/public/img/logo-silver.jpeg` — металлический серебристый знак (используется в шапке Фазы 2).

## Фазы

- **Фаза 1 (текущая):** scaffold, токены, архитектура, активация скиллов.
- **Фаза 2:** контент-коллекции, Keystatic, страницы ЖК, галереи, моушн.
- **Фаза 3:** интеграции (формы, аналитика, прод-деплой).
