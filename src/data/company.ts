export const company = {
  name: "ONE CONSTRUCTION",
  shortName: "One Construction",
  description:
    "Девелопер премиальных жилых комплексов в Кыргызстане. Архитектура без компромиссов с 2014 года.",
  city: "Bishkek",
  country: "KG",
  cityRu: "Бишкек",
  founded: "2014",
  coordinates: {
    display: "42.8746° N / 74.5698° E",
    lat: 42.8746,
    lng: 74.5698,
  },
  phones: [
    { href: "tel:+996888999999", display: "+996 (888) 999-999", primary: true },
  ],
  email: {
    href: "mailto:monolitkapitals@gmail.com",
    display: "monolitkapitals@gmail.com",
  },
  socialLinks: [
    {
      label: "WA",
      name: "WhatsApp",
      href: "https://wa.me/996888999999",
      external: true,
    },
    {
      label: "IG",
      name: "Instagram",
      href: "https://www.instagram.com/one_construction_?igsh=NTYybnZ2YmI3OHFl",
      external: true,
    },
    {
      label: "TG",
      name: "Telegram",
      href: "#",
      external: false,
    },
  ],
  office: {
    addressRu: "г. Бишкек,\nул. Юнусалиева 86/1",
    addressDisplayRu: "БИШКЕК, УЛ. ЮНУСАЛИЕВА 86/1",
    streetRu: "ул. Юнусалиева 86/1",
  },
  hours: {
    display: "пн-сб: 9:00-18:00",
    sunday: "вс: выходные",
  },
  legal: {
    companyName: "ОсОО «Монолит Капитал Строй»",
    inn: "02711201710253",
    license: "Лицензия серии КРЦ-2 №012636 от 05.12.2025 г.",
    privacyPolicyLabel: "Политика конфиденциальности",
    privacyPolicyHref: "#",
    documentsHref: "#",
  },
} as const;
