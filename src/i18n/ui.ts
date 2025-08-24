// Import content translations
import { en } from "./en";
import { bs } from "./bs";

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
    "common.loading": "Loading...",
    "common.error": "Error",
    "common.success": "Success",
    "footer.description":
      "Alirio gives you best in class support in living like what you dreamed of, with our specialized team feel free to let us deal with everyday joy you need to have.",
    "footer.company": "Company",
    "footer.help": "Help",
    "footer.contact": "Contact Us",
    "footer.privacy": "Privacy Policy",
  },
  bs: {
    "nav.home": "Početna",
    "nav.services": "Usluge",
    "nav.pricing": "Cijene",
    "nav.about": "O nama",
    "nav.contact": "Kontakt",
    "common.loading": "Učitavanje...",
    "common.error": "Greška",
    "common.success": "Uspjeh",
    "footer.description":
      "Alirio vam pruža najbolju podršku u životu kakav ste sanjali, s našim specijaliziranim timom slobodno nam prepustite svakodnevnu radost koju trebate imati.",
    "footer.company": "Kompanija",
    "footer.help": "Pomoć",
    "footer.contact": "Kontaktirajte nas",
    "footer.privacy": "Politika privatnosti",
  },
} as const;

// Content translations object
export const contentTranslations = {
  en,
  bs,
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

// Create unified translation function
export function getTranslations(lang: string) {
  return {
    ui: ui[lang] || ui.en,
    content: contentTranslations[lang] || contentTranslations.en,
  };
}
