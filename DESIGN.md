# One Construction · Design Context

## Направление

Premium light architectural brutalism.

Сайт должен ощущаться как современный архитектурный showroom: светлый, строгий, дорогой, визуальный, но удобный и читаемый.

---

## Визуальные принципы

- Светлая база: alabaster / bone / limestone.
- Текст: graphite / slate / deep navy.
- Акцент: restrained Royal Violet.
- Геометрия: sharp, без скруглений.
- Линии: тонкие hairline borders.
- Изображения — часть структуры, не декор.
- Много воздуха, но без пустоты.
- Editorial-композиция вместо generic card grid.
- Важные данные всегда читаемые, особенно на mobile.

---

## Typography

Используем:

- Geist — основной шрифт.
- Geist Mono — технические labels, индексы, координаты, micro-details.

Правила:

- Большие display-заголовки допустимы, но не должны ломать композицию.
- Mono не использовать для больших эмоциональных заголовков, если это делает сайт слишком техническим.
- Цены, сроки, локации, CTA, характеристики объектов должны быть читаемыми.
- Не менять глобальные font-family без отдельной задачи.

---

## Geometry

- `border-radius: 0` по умолчанию.
- Не использовать `rounded-xl`, `rounded-2xl`, pill UI.
- Допустим максимум 2px только если технически нужно для media/glass, но лучше избегать.
- Borders: `0.5px–1px`, restrained.
- Без heavy shadows.
- Без glow.
- Без SaaS-card эстетики.

---

## Цвет

Основная палитра:

- `#FBFBFA` — alabaster.
- `#F8F7F4` — bone.
- `#F5F4F0` — limestone.
- slate / graphite для текста.
- Royal Violet для CTA, focus, hover, акцентов.

Избегать:

- pure white как основной фон;
- pure black как основной текст;
- neon gradients;
- синих/фиолетовых glow-эффектов.

---

## Motion

Motion должен быть тихим и премиальным.

Можно:

- opacity;
- transform;
- subtle image scale;
- reveal on scroll;
- smooth anchor scroll.

Нельзя:

- bounce;
- playful overshoot;
- heavy animated noise;
- motion ради motion.

`prefers-reduced-motion` должен уважаться.

---

## Homepage

Главная уже утверждена заказчиком.

Не менять без явной причины:

- overall visual direction;
- Hero composition;
- Projects section;
- About layout;
- Privileges bento system;
- Purchase copy/layout;
- Contact form behavior;
- Footer large variant.

Мелкие правки допустимы только с narrow scope.

---

## `/projects`

Страница всех объектов должна ощущаться как premium object catalogue.

Текущие правила:

- full-bleed hero image cover;
- title overlay, не split-layout как на homepage;
- featured object + динамическая сетка остальных объектов;
- карточки информативные, но не перегруженные;
- essential info visible by default;
- image and CTA may be clickable;
- body/specs/empty areas should not navigate;
- compact footer.

---

## Project detail pages

Следующий дизайн-этап — страницы объектов.

Они не должны копировать homepage или `/projects`.

Ожидаемое ощущение:

- project-specific;
- functional;
- visual-led;
- premium developer presentation;
- удобный путь к планировкам и заявке.

Базовые секции:

- hero объекта;
- key stats;
- project essence / benefits;
- plans;
- gallery;
- purchase options;
- construction status;
- contact CTA;
- compact footer.

---

## Anti-references

Не делать:

- generic real-estate template;
- Tilda-like cards;
- SaaS landing;
- crypto/neon aesthetic;
- overly dark pages;
- heavy shadows;
- rounded cards;
- decorative icons everywhere;
- fake blueprint clutter;
- hover-only important content.

---

## Review checklist

Перед тем как принимать визуальный результат:

1. Выглядит ли премиально?
2. Отличается ли страница от homepage и `/projects`, если это новый тип страницы?
3. Читаются ли важные данные?
4. Нет ли перегруза mono/technical style?
5. Нет ли generic карточной сетки?
6. Работает ли mobile 390px?
7. Не сломана ли утверждённая главная?
