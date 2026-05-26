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
    display: "42.8746° N · 74.5698° E",
    lat: 42.8746,
    lng: 74.5698,
  },
  phones: [
    { href: "tel:+996555100100", display: "+996 555 100 100", primary: true },
    { href: "tel:+996700100100", display: "+996 700 100 100", primary: false },
  ],
  email: {
    href: "mailto:info@oneconstruction.kg",
    display: "info@oneconstruction.kg",
  },
  office: {
    addressRu: "г. Бишкек,\nул. Раззакова 32",
    addressDisplayRu: "БИШКЕК, УЛ. РАЗЗАКОВА 32",
    streetRu: "ул. Раззакова 32",
  },
  hours: {
    display: "ПН — СБ · 10:00 — 19:00",
  },
  legal: {
    companyName: "NEEDS_VERIFICATION",
    inn: "NEEDS_VERIFICATION",
    privacyPolicyHref: "NEEDS_VERIFICATION",
    documentsHref: "NEEDS_VERIFICATION",
  },
} as const;
