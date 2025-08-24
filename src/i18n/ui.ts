export const languages = {
  en: "English",
  sv: "Svenska",
  bs: "Bosanski",
  ar: "العربية",
  ku: "کوردی",
  sy: "ܣܘܪܝܝܐ",
};

export const defaultLang = "en";

export const ui = {
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.pricing": "Pricing",
    "nav.about": "About us",
    "nav.contact": "Contact",
    "language.dropdown": "Select language",
    "common.loading": "Loading...",
    "common.error": "Error",
    "common.success": "Success",
  },
  bs: {
    "nav.home": "Početna",
    "nav.services": "Usluge",
    "nav.pricing": "Cijene",
    "nav.about": "O nama",
    "nav.contact": "Kontakt",
    "language.dropdown": "Odaberite jezik",
    "common.loading": "Učitavanje...",
    "common.error": "Greška",
    "common.success": "Uspjeh",
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
