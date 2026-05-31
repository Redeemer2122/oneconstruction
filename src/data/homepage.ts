export const hero = {
  image:
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=2400&q=85&auto=format&fit=crop",
  imageAlt: "Премиальный архитектурный рендер",
  eyebrow: "ONE CONSTRUCTION · BISHKEK · 2026",
  titleLines: ["ОДНА МЕЧТА.", "ОДНА ЦЕЛЬ.", "ОДИН РЕЗУЛЬТАТ."],
  subtitle:
    "Жилые комплексы в Бишкеке — от точного проекта до пространства, в котором хочется жить.",
  featuredProject: {
    eyebrow: "FEATURED PROJECT / 03",
    name: "ЖК «Медина+»",
    offer: "Рассрочка до 70 месяцев",
    meta: "IV кв. 2028 · ул. Мичурина, 163",
    href: "/projects/medina",
  },
  // Temporary local hero media; replace with approved project renders when available.
  showcaseProjects: [
    {
      index: "03",
      eyebrow: "FEATURED PROJECT / 03",
      name: "ЖК «Медина+»",
      line: "Рассрочка до 70 месяцев",
      meta: "IV кв. 2028 · ул. Мичурина, 163",
      href: "/projects/medina",
      image: "/img/hero/medina-hero-temp.jpg",
      imageAlt: "Светлая архитектурная форма с графичной фасадной сеткой",
    },
    {
      index: "01",
      eyebrow: "FEATURED PROJECT / 01",
      name: "ЖК «Лотос»",
      line: "Рассрочка до 40 месяцев",
      meta: "IV кв. 2027 · ул. Молодогвардейцев 100",
      href: "/projects/lotos",
      image: "/img/hero/lotos-hero-temp.jpg",
      imageAlt: "Светлый фасад жилого комплекса с балконами и перспективной геометрией",
    },
    {
      index: "02",
      eyebrow: "FEATURED PROJECT / 02",
      name: "Yacht Village",
      line: "Индивидуальные условия покупки",
      meta: "резиденции клубного формата",
      href: "/projects/yacht-village",
      image: "/img/hero/yacht-village-hero-temp.jpg",
      imageAlt: "Светлая клубная резиденция с открытой террасой и бассейном",
    },
  ],
  metrics: [
    { value: "10", label: "ЛЕТ ОПЫТА" },
    { value: "ДО 70 МЕС.", label: "РАССРОЧКА" },
    { value: "422", label: "КВАРТИРЫ" },
    { value: "БИШКЕК / ИССЫК-КУЛЬ", label: "ГЕОГРАФИЯ" },
  ],
} as const;

export const about = {
  manifestoTitle: "Пространство,\nв котором\nхочется жить.",
  paragraphs: [
    {
      html: "<strong class=\"font-medium text-slate-900\">One Construction</strong> — девелопер, который создаёт пространства, в которых хочется жить. Мы строим не квадратные метры, а долгий маршрут от первого эскиза до утреннего кофе у окна.",
      size: "lg",
    },
    {
      html: "Каждый проект — выверенная архитектурная гипотеза: свет, материал, тишина и пропорции. Без компромиссов на скрытых от глаз инженерных слоях.",
      size: "base",
    },
  ],
  advantages: [
    {
      index: "01",
      metric: "10+",
      unit: "ЛЕТ",
      title: "Опыт",
      body: "Более десяти лет на рынке недвижимости Кыргызстана. Каждый сданный объект — отдельный архитектурный акт, а не серийный тираж.",
    },
    {
      index: "02",
      metric: "400 000",
      unit: "М²",
      title: "Построено",
      body: "Совокупный объём введённых в эксплуатацию площадей. Жилые комплексы, апартаменты, коммерческие пространства.",
    },
    {
      index: "03",
      metric: "1 200+",
      unit: "СЕМЕЙ",
      title: "Доверились",
      body: "Тысяча двести семей выбрали наши дома своим первым адресом. Главный показатель — повторные обращения.",
    },
    {
      index: "04",
      metric: "ISO",
      unit: "QC",
      title: "Контроль качества",
      body: "Лабораторный контроль материалов на каждой захватке. Бетон B25–B35, арматура A500, многоступенчатая приёмка.",
    },
    {
      index: "05",
      metric: "AAA",
      unit: "ARCH",
      title: "Архитектура со смыслом",
      body: "Авторские проекты в коллаборации с архитектурными бюро. Свет, пропорции, тишина — основа технического задания.",
    },
  ],
} as const;
