# One Construction Content Audit

Comparison of old One Construction homepage content against the current beta homepage implementation and content data.

Sources:
- `docs/old-site-content.md`
- `src/data/company.ts`
- `src/data/homepage.ts`
- `src/data/purchase.ts`
- `src/data/privileges.ts`
- `src/pages/index.astro`
- `src/components/sections/homepage/HomeHero.astro`
- `src/components/sections/homepage/HomeProjects.astro`
- `src/components/sections/homepage/HomeAbout.astro`
- `src/components/sections/homepage/HomePurchase.astro`
- `src/components/sections/homepage/HomeTimeline.astro`
- `src/components/sections/homepage/HomeContact.astro`
- `src/components/sections/homepage/HomeHeader.astro`
- `src/content/projects/lotos.json`
- `src/content/projects/yacht-village.json`
- `src/content/projects/medina.json`

| Section | Field | Old site value | Current beta value | Status | Notes |
|---|---|---|---|---|---|
| Hero | Main headline | Современный комплекс для тех, кто ценит комфорт без лишнего шума | АРХИТЕКТУРА / БЕЗ / КОМПРОМИССА | MISMATCH | Old hero is project-led and comfort-focused; beta is brand-led premium positioning. |
| Hero | Featured project | ЖК «Медина+» | MISSING_IN_BETA | MISSING_IN_BETA | Beta hero data does not identify a featured project. |
| Hero | Subtitle / offer | NOT_FOUND | Премиальные жилые комплексы в Бишкеке. Стекло, сталь, выверенный архитектурный ритм. | BETA_ONLY | Polished positioning copy not found on old homepage. |
| Hero | Eyebrow | NOT_FOUND | ONE CONSTRUCTION · BISHKEK · 2026 | BETA_ONLY | Not present in old homepage extraction. |
| Hero | Installment offer | Рассрочка на 70 месяцев, без первоначального взноса | MISSING_IN_BETA | MISMATCH | Beta hero component omits the prominent old-site offer. Medina project data has 70 months but omits "без первоначального взноса". |
| Hero | CTA text | Оставить заявку; Перейти к проекту | Смотреть объекты; Связаться | MISMATCH | Beta CTAs exist in `HomeHero.astro`, but do not match old CTA text. |
| Hero | Phone | +996 (888) 999-999 | MISSING_IN_BETA | MISSING_IN_BETA | Phone is present in contact/footer data, but not displayed in the beta hero component. |
| Hero | Metric: objects | NOT_FOUND | 250+ ОБЪЕКТОВ | NEEDS_VERIFICATION | Old homepage extraction did not include this metric; commercially sensitive. |
| Hero | Metric: years | NOT_FOUND | 15+ ЛЕТ НА РЫНКЕ | NEEDS_VERIFICATION | Conflicts with company founded value of 2014, which implies about 12 years in 2026. |
| Hero | Metric: apartments | NOT_FOUND | 480+ КВАРТИР | NEEDS_VERIFICATION | Sum of beta project units is 422, not 480. Could include other projects, but needs confirmation. |
| Hero | Hero image | NOT_FOUND | Unsplash architecture image | PLACEHOLDER | Old hero image was not captured; beta uses Unsplash and should be replaced or approved. |
| Hero | Image alt | NOT_FOUND | Премиальный архитектурный рендер | PLACEHOLDER | Alt text claims render, but current image is an Unsplash photo URL. |
| Company/contact | Company name | One Construction | ONE CONSTRUCTION; One Construction | CONFIRMED | Brand name is consistent aside from casing. |
| Company/contact | Company description | One Construction — девелопер, который создаёт не просто здания, а пространства, где хочется жить. | Девелопер премиальных жилых комплексов в Кыргызстане. Архитектура без компромиссов с 2014 года. | MISMATCH | Beta changes positioning, adds premium and 2014 founding claim. |
| Company/contact | Founded year | NOT_FOUND | 2014 | NEEDS_VERIFICATION | Not present on old homepage; company history claim should be client-confirmed. |
| Company/contact | City | Бишкек | Бишкек | CONFIRMED | Confirmed at city level. |
| Company/contact | Phone primary | +996 (888) 999-999 | +996 555 100 100 | MISMATCH | Direct phone mismatch. |
| Company/contact | Phone secondary | NOT_FOUND | +996 700 100 100 | NOT_FOUND_ON_OLD_SITE | Additional beta phone not found on old homepage. |
| Company/contact | Phone tel href | +996888999999 | tel:+996555100100; tel:+996700100100 | MISMATCH | Contact links do not match old site. |
| Company/contact | Email | monolitkapitals@gmail.com | info@oneconstruction.kg | MISMATCH | Direct email mismatch. |
| Company/contact | Office address | г. Бишкек, Ул. Юнусалиева 86/1; footer also г. Бишкек, ул. Юнусалиева 86 | г. Бишкек, ул. Раззакова 32 | MISMATCH | Direct office address mismatch. |
| Company/contact | Working hours | пн-сб: 9:00-18:00; вс: выходные | ПН — СБ · 10:00 — 19:00 | MISMATCH | Hours changed and Sunday closure is omitted in beta data. |
| Company/contact | Coordinates | NOT_FOUND | 42.8746° N · 74.5698° E | NEEDS_VERIFICATION | Coordinates not on old site; verify against the approved office address. |
| Company/contact | Country | NOT_FOUND | KG | BETA_ONLY | Structured metadata not found on old homepage. |
| Projects / ЖК «Лотос» | Name | ЖК «Лотос» | ЖК «Лотос» | CONFIRMED | Match. |
| Projects / ЖК «Лотос» | Location | ул. Молдокулова 100 | ул. Молдокулова 100, Бишкек | CONFIRMED | Beta adds city; base address matches. |
| Projects / ЖК «Лотос» | Status | Строится | Строится | CONFIRMED | Match. |
| Projects / ЖК «Лотос» | Delivery | Сдача — IV кв. 2027 | СДАЧА · IV КВ. 2027 | CONFIRMED | Same meaning, formatting changed. |
| Projects / ЖК «Лотос» | Storeys | 14-16 этажей | 14 — 16 ЭТАЖЕЙ | CONFIRMED | Same value, formatting changed. |
| Projects / ЖК «Лотос» | Units | 112 квартир | 112 КВАРТИР | CONFIRMED | Match. |
| Projects / ЖК «Лотос» | Price from | от 4,2 млн сом | от 4,2 млн сом | CONFIRMED | Match. |
| Projects / ЖК «Лотос» | Plan: 1-room | 1 комнатные; от 42.73м²; от 4,2 млн сом | 1-комнатные; от 42.73 м²; от 4,2 млн сом | CONFIRMED | Same value, formatting changed. |
| Projects / ЖК «Лотос» | Plan: 2-room | 2 комнатные; от 64.96м²; от 6,8 млн сом | 2-комнатные; от 64.96 м²; от 6,8 млн сом | CONFIRMED | Same value, formatting changed. |
| Projects / ЖК «Лотос» | Plan: 3-room | 3 комнатные; от 101.98м²; от 10,7 млн сом | 3-комнатные; от 101.98 м²; от 10,7 млн сом | CONFIRMED | Same value, formatting changed. |
| Projects / ЖК «Лотос» | Installment | Only general hero offer: 70 months, no down payment | Рассрочка до 40 месяцев | NEEDS_VERIFICATION | Old homepage did not confirm Lotos-specific 40-month terms. |
| Projects / ЖК «Лотос» | Cover image | NOT_FOUND | Unsplash image | PLACEHOLDER | Project image was not captured on old site; beta uses Unsplash. |
| Projects / ЖК «Лотос» | Old URL vs new planned URL | https://oneconstruction.kg/lotos | /projects/lotos | PARTIAL_MATCH | `HomeProjects.astro` generates detail links from `project.id` as `/projects/${project.id}`. New URL structure differs from old public URL. |
| Projects / Yacht Village | Name | Yacht Village; Яхт Виллидж; Резиденция «Яхт Village» | «Yacht Village» | CONFIRMED | Same project, naming style differs. |
| Projects / Yacht Village | Location | Ул. Юнусалиева 86/1 | ул. Юнусалиева 86/1, Бишкек | CONFIRMED | Beta adds city; base address matches. |
| Projects / Yacht Village | Status | Готово к сдаче | Готово к сдаче | CONFIRMED | Match. |
| Projects / Yacht Village | Delivery | Сдача | СДАЧА · ГОТОВ | NEEDS_VERIFICATION | Old value is vague; beta states ready/complete. |
| Projects / Yacht Village | Storeys | 2-3 этажа | 2 — 3 ЭТАЖА | CONFIRMED | Same value, formatting changed. |
| Projects / Yacht Village | Units | 40 квартир | 40 КВАРТИР | CONFIRMED | Match. |
| Projects / Yacht Village | Price from | от 4,2 млн сом | от 4,2 млн сом | CONFIRMED | Match. |
| Projects / Yacht Village | Plan: 1-room | 1 комнатные; от 24м²; от 4,2 млн сом | 1-комнатные; от 24 м²; от 4,2 млн сом | CONFIRMED | Same value, formatting changed. |
| Projects / Yacht Village | Plan: 2-room | 2 комнатные; от 62.47м²; от 6,8 млн сом | 2-комнатные; от 62.47 м²; от 6,8 млн сом | CONFIRMED | Same value, formatting changed. |
| Projects / Yacht Village | Installment | NOT_FOUND | Индивидуальные условия покупки | NEEDS_VERIFICATION | Correctly marked in beta note as unconfirmed. |
| Projects / Yacht Village | Cover image | NOT_FOUND | Unsplash image | PLACEHOLDER | Project image was not captured on old site; beta uses Unsplash. |
| Projects / Yacht Village | Old URL vs new planned URL | https://oneconstruction.kg/yachtvillage | /projects/yacht-village | PARTIAL_MATCH | `HomeProjects.astro` generates detail links from `project.id` as `/projects/${project.id}`. Slug changed from `yachtvillage` to `yacht-village`. |
| Projects / ЖК «Медина+» | Name | ЖК «Медина+» | ЖК «Медина+» | CONFIRMED | Match. |
| Projects / ЖК «Медина+» | Location | ул. Мичурина, 163 | ул. Мичурина, 163, Бишкек | CONFIRMED | Beta adds city; base address matches. |
| Projects / ЖК «Медина+» | Status | Строится | Строится | CONFIRMED | Match. |
| Projects / ЖК «Медина+» | Delivery | Сдача — IV кв. 2028 | СДАЧА · IV КВ. 2028 | CONFIRMED | Same meaning, formatting changed. |
| Projects / ЖК «Медина+» | Storeys | 16 этажей | 16 ЭТАЖЕЙ | CONFIRMED | Match. |
| Projects / ЖК «Медина+» | Units | 270 квартир | 270 КВАРТИР | CONFIRMED | Match. |
| Projects / ЖК «Медина+» | Price from | от 5 млн сом | от 5 млн сом | CONFIRMED | Match. |
| Projects / ЖК «Медина+» | Plan: 1-room | 1 комнатные; от 48.8м²; от 5 млн сом | 1-комнатные; от 48.8 м²; от 5 млн сом | CONFIRMED | Same value, formatting changed. |
| Projects / ЖК «Медина+» | Plan: 2-room | 2 комнатные; от 73.2м²; от 8 млн сом | 2-комнатные; от 73.2 м²; от 8 млн сом | CONFIRMED | Same value, formatting changed. |
| Projects / ЖК «Медина+» | Plan: 3-room | 3 комнатные; от 115.8м²; от 12 млн сом | 3-комнатные; от 115.8 м²; от 12 млн сом | CONFIRMED | Same value, formatting changed. |
| Projects / ЖК «Медина+» | Installment | Рассрочка на 70 месяцев, без первоначального взноса | Рассрочка до 70 месяцев | NEEDS_VERIFICATION | Duration aligns with old hero, but beta omits "без первоначального взноса". |
| Projects / ЖК «Медина+» | Cover image | NOT_FOUND | Unsplash image | PLACEHOLDER | Project image was not captured on old site; beta uses Unsplash. |
| Projects / ЖК «Медина+» | Old URL vs new planned URL | https://oneconstruction.kg/medina | /projects/medina | PARTIAL_MATCH | `HomeProjects.astro` generates detail links from `project.id` as `/projects/${project.id}`. New URL structure differs from old public URL. |
| About | Section heading | Мы создаём пространство, в котором хочется жить | Пространство, в котором хочется жить. | PARTIAL_MATCH | Same core phrase, but old "Мы создаём" framing is shortened in beta. |
| About | Eyebrow | • О компании | О КОМПАНИИ | PARTIAL_MATCH | Present in `HomeAbout.astro`, but without the old dot marker. |
| About | Main text opening | One Construction — девелопер, который создаёт не просто здания, а пространства, где хочется жить. | One Construction — девелопер, который создаёт пространства, в которых хочется жить. Мы строим не квадратные метры, а долгий маршрут от первого эскиза до утреннего кофе у окна. | PARTIAL_MATCH | First sentence preserves the core idea, but beta adds new editorial copy. |
| About | Transparency/process text | Наша цель — сделать процесс строительства прозрачным, комфортным и предсказуемым. | MISSING_IN_BETA | MISSING_IN_BETA | Old trust/process message is omitted. |
| About | Contractors text | Мы работаем только с проверенными подрядчиками... | MISSING_IN_BETA | MISSING_IN_BETA | Old contractor assurance is omitted. |
| About | Quality control text | Каждый объект проходит строгий контроль и строится по единым регламентам. | Без компромиссов на скрытых от глаз инженерных слоях. | PARTIAL_MATCH | Similar quality theme, but beta is materially rewritten and less specific. |
| About | Values | Прозрачность; Комфорт; Предсказуемость; Проверенные подрядчики; Строгий контроль качества; Единые регламенты; Доверие, открытость, результат | MISSING_IN_BETA | MISSING_IN_BETA | Explicit values list is not represented in beta data. |
| About | Advantage: experience | NOT_FOUND | 10+ ЛЕТ; Опыт | NEEDS_VERIFICATION | Old homepage did not include this metric; also differs from hero 15+ years. |
| About | Advantage: built area | NOT_FOUND | 400 000 М²; Построено | NEEDS_VERIFICATION | Commercial/statistical claim requires client verification. |
| About | Advantage: families | NOT_FOUND | 1 200+ СЕМЕЙ; Доверились | NEEDS_VERIFICATION | Commercial/statistical claim requires client verification. |
| About | Advantage: ISO QC | NOT_FOUND | ISO QC; бетон B25–B35; арматура A500 | NEEDS_VERIFICATION | Technical/quality claims not found on old homepage. |
| About | Advantage: architecture | NOT_FOUND | AAA ARCH; авторские проекты; архитектурные бюро | NEEDS_VERIFICATION | Premium/partner claim not found on old homepage. |
| Purchase | Section heading | Выберите удобный вариант покупки | Выберите удобный вариант покупки. | CONFIRMED | Present in `HomePurchase.astro`; punctuation/layout differs only. |
| Purchase | Eyebrow | • Варианты покупки | ПОКУПКА · 05 | PARTIAL_MATCH | Section label exists in `HomePurchase.astro`, but wording differs from old eyebrow. |
| Purchase | Intro text | Мы предлагаем прозрачные и гибкие схемы оплаты, чтобы каждая квартира была доступна в соответствии с вашими планами и возможностями. | Четыре сценария сделки. Подберём схему под ваш бюджет и горизонт планирования — без обязательной ипотеки и скрытых комиссий. | PARTIAL_MATCH | Same general purchase-flexibility idea, rewritten and more specific in beta. |
| Purchase | CTA | Оставить заявку | Оставить заявку; Рассчитать график; Узнать оценку; Подключиться | PARTIAL_MATCH | Old CTA is present on the full-payment card; other card CTAs are beta additions. |
| Purchase | Full payment option | NOT_FOUND | Полная оплата; до 12% скидка | NEEDS_VERIFICATION | Old homepage only showed general purchase intro; discount is commercially sensitive. |
| Purchase | Full payment bullets | NOT_FOUND | Скидка до 12% от прайса; Закрепление цены на 14 дней; Подбор приоритетной квартиры | BETA_ONLY | Detailed card copy not confirmed on old homepage. |
| Purchase | Installment option | General hero: 70 months, no down payment | Рассрочка 0%; 40 мес.; первый взнос от 30% | MISMATCH | Conflicts with old hero offer. Needs commercial verification before client review. |
| Purchase | Installment bullets | NOT_FOUND | Без переплат и банков; Первый взнос — от 30%; График до 40 месяцев | NEEDS_VERIFICATION | Not on old homepage and conflicts with old 70-month/no-down-payment offer. |
| Purchase | Trade-in option | NOT_FOUND | Trade-in; 0 ₽ доплата | NEEDS_VERIFICATION | Not confirmed on old homepage; also uses Russian ruble symbol. |
| Purchase | Trade-in bullets | NOT_FOUND | Оценка за 1 рабочий день; Юридическое сопровождение; Старое жильё / авто в зачёт | BETA_ONLY | Detailed card copy not confirmed on old homepage. |
| Purchase | Bonus program option | NOT_FOUND | Бонусная программа; + 3% лояльность | NEEDS_VERIFICATION | Not confirmed on old homepage; commercial claim. |
| Purchase | Bonus program bullets | NOT_FOUND | Бонусы за рекомендации; Доступ к pre-launch; Конвертация баллов в м² | BETA_ONLY | Detailed card copy not confirmed on old homepage. |
| Privileges | Section heading | Стандарт привилегий One Construction | Стандарт привилегий One Construction. | CONFIRMED | Present in `HomeTimeline.astro`; punctuation/layout differs only. |
| Privileges | Eyebrow | • Преимущества | СТАНДАРТ · 03 | PARTIAL_MATCH | Section label exists in `HomeTimeline.astro`, but old "Преимущества" eyebrow is not reused. |
| Privileges | Intro text | Каждый наш жилой комплекс создан с учётом 7 ключевых стандартов качества... Мы заботимся о вашем здоровье, удобстве и эмоциях... | Семь обязательных слоёв, которые мы закладываем в каждый дом... Это не маркетинговый список, а технический регламент... | PARTIAL_MATCH | Beta preserves the 7-standards concept, but rewrites the intro and adds a technical-regulation claim. |
| Privileges | Item 01 | NOT_FOUND | Энергоэффективные дома; КЛАСС A | NEEDS_VERIFICATION | Old homepage only confirmed that 7 standards exist, not the specific items. |
| Privileges | Item 02 | NOT_FOUND | Тишина и уединение; Rw ≥ 54 дБ | NEEDS_VERIFICATION | Specific acoustic claim needs verification. |
| Privileges | Item 03 | NOT_FOUND | Продуманные планировки; BIM · CAD | NEEDS_VERIFICATION | Specific item not confirmed on old homepage. |
| Privileges | Item 04 | NOT_FOUND | Чистая вода; 5 СТУПЕНЕЙ | NEEDS_VERIFICATION | Specific engineering claim needs verification. |
| Privileges | Item 05 | NOT_FOUND | Комфортный микроклимат; HVAC | NEEDS_VERIFICATION | Specific engineering claim needs verification. |
| Privileges | Item 06 | NOT_FOUND | Безопасное пространство; 24 / 7 | NEEDS_VERIFICATION | Security/operations claim needs verification. |
| Privileges | Item 07 | NOT_FOUND | Современная инфраструктура; WALK · 7 МИН | NEEDS_VERIFICATION | Specific walkability claim needs verification. |
| Footer/legal | Footer description | Мы создаём пространство, в котором хочется жить | Девелопер премиальных жилых комплексов в Кыргызстане. Архитектура без компромиссов с 2014 года. | MISMATCH | Footer in `src/pages/index.astro` uses `company.description`; content differs from old footer description. |
| Footer/legal | Legal company name | ОсОО «Монолит Капитал Строй» | NEEDS_VERIFICATION | NEEDS_VERIFICATION | Beta intentionally uses placeholder value. Must be replaced or confirmed. |
| Footer/legal | INN | 02711201710253 | NEEDS_VERIFICATION | NEEDS_VERIFICATION | Beta intentionally uses placeholder value. Legal data must be verified. |
| Footer/legal | License | Лицензия серии КРЦ-2 №012636 от 05.12.2025 г. | MISSING_IN_BETA | MISSING_IN_BETA | License is absent from provided beta data. |
| Footer/legal | Privacy policy | Политика конфиденциальности | NEEDS_VERIFICATION | PLACEHOLDER | Beta legal privacyPolicyHref is a placeholder. |
| Footer/legal | Documents link | NOT_FOUND | NEEDS_VERIFICATION | PLACEHOLDER | Beta legal documentsHref is a placeholder and not found on old homepage. |
| Footer/legal | Social links | Telegram: https://t.me/vegodes | MISSING_IN_BETA | MISSING_IN_BETA | No social links found in `index.astro`, `HomeHeader.astro`, `HomeContact.astro`, or company data. |
| Footer/legal | Footer project link: Medina | ЖК «Медина+» → https://oneconstruction.kg/medina | /projects/medina exists in project section; no footer project link | PARTIAL_MATCH | Project URL exists via `HomeProjects.astro`, but old footer-specific project link is not present in beta footer. |
| Footer/legal | Footer project link: One Ordo Resort | One Ordo Resort → https://oneconstruction.kg/medina | MISSING_IN_BETA | MISSING_IN_BETA | Old site mapping is unclear; no One Ordo Resort item found in beta footer or project data. |
| Footer/legal | Footer project link: Yacht Village | Резиденция «Яхт Village» → https://oneconstruction.kg/yachtvillage | /projects/yacht-village exists in project section; no footer project link | PARTIAL_MATCH | Project URL exists via `HomeProjects.astro`, but old footer-specific project link is not present in beta footer. |
| Footer/legal | Footer project link: Lotos | ЖК «Лотос» → https://oneconstruction.kg/lotos | /projects/lotos exists in project section; no footer project link | PARTIAL_MATCH | Project URL exists via `HomeProjects.astro`, but old footer-specific project link is not present in beta footer. |
| Footer/legal | Navigation links | Главная → #main; Объекты → #objects; О компании → #about; Варианты покупки → #purchase; Преимущества → #advantages; Контакты → #contacts | Header/footer beta nav: #projects, #about, #privileges, #purchase, #contact | PARTIAL_MATCH | Navigation exists in `HomeHeader.astro` and footer. Labels/anchors changed: no `#main`, `#objects`, or `#advantages`; beta uses `#projects`, `#privileges`, `#contact`. |
| Footer/legal | Copyright | © ОсОО «Монолит Капитал Строй» | © 2026 ONE CONSTRUCTION KG · ВСЕ ПРАВА ЗАЩИЩЕНЫ | MISMATCH | Copyright exists in `index.astro`, but does not match old legal company name. |
| Footer/legal | Build platform | Made on Tilda | NOT_FOUND | NOT_FOUND_ON_OLD_SITE | Not relevant to beta content, included only as old technical metadata. |
| Images | Hero image | NOT_FOUND | Unsplash photo URL | PLACEHOLDER | Needs replacement with approved project/brand visual. |
| Images | Lotos project image | NOT_FOUND | Unsplash photo URL | PLACEHOLDER | Needs approved Lotos render/photo. |
| Images | Yacht Village project image | NOT_FOUND | Unsplash photo URL | PLACEHOLDER | Needs approved Yacht Village render/photo. |
| Images | Medina project image | NOT_FOUND | Unsplash photo URL | PLACEHOLDER | Needs approved Medina render/photo. |
| Images | Project image provenance | Project images not captured in text extraction | All three project covers are remote Unsplash URLs | NEEDS_VERIFICATION | Verify whether beta may use temporary stock images during client review. |

## Top Priority Fixes Before Client Review

1. Verify and replace all contact details: phone numbers, email, office address, working hours, and coordinates.
2. Replace legal placeholders with verified legal data: company name, INN, privacy policy link, documents link, and license.
3. Resolve the installment conflict between the old hero offer of 70 months with no down payment and the beta purchase card showing 40 months with 30% down payment.
4. Replace Unsplash hero and project images with approved One Construction/project-specific visuals, or label them as temporary before review.
5. Confirm hero strategy: old homepage featured ЖК «Медина+», while beta hero is brand-led and does not mention a featured project.
6. Verify all commercial claims in purchase cards, including 12% discount, 0% installment, trade-in, 0 ₽ доплата, and +3% loyalty.
7. Verify all headline metrics and statistics: 250+ objects, 15+ years, 480+ apartments, 400,000 m², 1,200+ families, ISO QC.
8. Confirm the seven privilege items and their technical claims, especially Class A, Rw ≥ 54 dB, filtration, HVAC, 24/7 security, and 7-minute walkability.
9. Restore or intentionally replace old trust/process copy about transparency, predictable construction, verified contractors, strict control, and unified regulations.
10. Confirm the intentional URL/anchor migration from old site paths and anchors to beta paths: `/projects/lotos`, `/projects/yacht-village`, `/projects/medina`, `#projects`, `#about`, `#privileges`, `#purchase`, `#contact`.

## Critical Mismatches Found

- Contact details changed materially: old phone/email/address/hours do not match beta company data.
- Installment terms conflict: old site promotes 70 months with no down payment, while beta purchase data promotes 40 months with 30% first payment.
- Legal information is incomplete or inconsistent in beta: legal company name, INN, privacy policy, documents, and license are missing/placeholders; copyright exists but does not match the old legal company name.
- Beta uses Unsplash images for hero and all audited projects.
- Beta adds many unverified commercial, technical, and statistical claims that are not present on the old homepage.
