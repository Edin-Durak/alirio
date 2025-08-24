// Import content translations
import { en } from "./en";
import { bs } from "./bs";
import { sv } from "./sv";

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
    "footer.company": "Alirio",
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
      "Sanjamo da jednog dana možemo ponuditi još više - možda dom za starije gdje se različite kulture mogu susresti, gdje su okusi domovine na meniju i gdje se svi osjećaju kao kod kuće. Ali počinje ovdje, s vama, u vašem domu, s njegom koju trebate.",
    "footer.company": "Alirio",
    "footer.help": "Pomoć",
    "footer.contact": "Kontaktirajte nas",
    "footer.privacy": "Politika privatnosti",
  },
  sv: {
    "nav.home": "Hem",
    "nav.services": "Tjänster",
    "nav.pricing": "Priser",
    "nav.about": "Om Alirio",
    "nav.contact": "Kontakta oss",
    "common.loading": "Laddar...",
    "common.error": "Fel",
    "common.success": "Lyckat",
    "footer.description":
      "Vi drömmer om att vi en dag kan erbjuda ännu mer – kanske ett äldreboende där olika kulturer kan mötas, där hemlandets smaker står på menyn och där alla känner sig hemma. Men det börjar här, hos dig, i ditt hem, med den omsorg du behöver.",
    "footer.company": "Alirio",
    "footer.help": "Hjälp",
    "footer.contact": "Kontakta oss",
    "footer.privacy": "Integritetspolicy",
  },
} as const;

// Content translations object
export const contentTranslations = {
  en,
  bs,
  sv,
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
