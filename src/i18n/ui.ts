// Import content translations
import { en } from "./en";
import { bs } from "./bs";
import { sv } from "./sv";
import { ar } from "./ar";

export const languages = {
  en: "English",
  sv: "Svenska",
  bs: "Bosanski",
  ar: "العربية",
};

export const defaultLang = "sv";

export const ui = {
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.pricing": "Pricing",
    "nav.about": "About us",
    "nav.contact": "Contact",
    "nav.phone": "Call",
    "common.loading": "Loading...",
    "common.error": "Error",
    "common.success": "Success",
    "footer.description":
      "Alirio gives you best in class support in living like what you dreamed of, with our specialized team feel free to let us deal with everyday joy you need to have.",
    "footer.company": "Alirio",
    "footer.help": "Help",
    "footer.contact": "Contact Us",
    "footer.privacy": "Privacy Policy",
    "footer.email": "Email Alirio Care",
    "footer.phone": "Call Alirio Care",
    "footer.copyright": "© Copyright {year}, Designed and developed by",
    "footer.developer1": "Asad",
    "footer.developer2": "Edin",
    "footer.and": "&",
  },
  bs: {
    "nav.home": "Početna",
    "nav.services": "Usluge",
    "nav.pricing": "Cijene",
    "nav.about": "O nama",
    "nav.contact": "Kontakt",
    "nav.phone": "Poziv",
    "common.loading": "Učitavanje...",
    "common.error": "Greška",
    "common.success": "Uspjeh",
    "footer.description":
      "Sanjamo da jednog dana možemo ponuditi još više - možda dom za starije gdje se različite kulture mogu susresti, gdje su okusi domovine na meniju i gdje se svi osjećaju kao kod kuće. Ali počinje ovdje, s vama, u vašem domu, s njegom koju trebate.",
    "footer.company": "Alirio",
    "footer.help": "Pomoć",
    "footer.contact": "Kontaktirajte nas",
    "footer.privacy": "Politika privatnosti",
    "footer.email": "Email Alirio Care",
    "footer.phone": "Pozovite Alirio Care",
    "footer.copyright": "© Copyright {year}, Dizajnirano i razvijeno od strane",
    "footer.developer1": "Asad",
    "footer.developer2": "Edin",
    "footer.and": "i",
  },
  sv: {
    "nav.home": "Hem",
    "nav.services": "Tjänster",
    "nav.pricing": "Priser",
    "nav.about": "Om Alirio",
    "nav.contact": "Kontakta oss",
    "nav.phone": "Samtal",
    "common.loading": "Laddar...",
    "common.error": "Fel",
    "common.success": "Lyckat",
    "footer.description":
      "Vi drömmer om att vi en dag kan erbjuda ännu mer – kanske ett äldreboende där olika kulturer kan mötas, där hemlandets smaker står på menyn och där alla känner sig hemma. Men det börjar här, hos dig, i ditt hem, med den omsorg du behöver.",
    "footer.company": "Alirio",
    "footer.help": "Hjälp",
    "footer.contact": "Kontakta oss",
    "footer.privacy": "Integritetspolicy",
    "footer.email": "Mejla Alirio Care",
    "footer.phone": "Ring Alirio Care",
    "footer.copyright": "© Copyright {year}, Designat och utvecklat av",
    "footer.developer1": "Asad",
    "footer.developer2": "Edin",
    "footer.and": "och",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.services": "الخدمات",
    "nav.pricing": "الأسعار",
    "nav.about": "حول",
    "nav.contact": "اتصل بنا",
    "nav.phone": "مكالمة",
    "common.loading": "جاري التحميل...",
    "common.error": "خطأ",
    "common.success": "نجح",
    "footer.description":
      "نحلم بأن نتمكن يوماً ما من تقديم المزيد - ربما منزل للمسنين حيث يمكن للثقافات المختلفة أن تلتقي، حيث توجد نكهات الوطن في القائمة وحيث يشعر الجميع وكأنهم في المنزل. لكن الأمر يبدأ هنا، معك، في منزلك، مع الرعاية التي تحتاجها.",
    "footer.company": "أليريو",
    "footer.help": "مساعدة",
    "footer.contact": "اتصل بنا",
    "footer.privacy": "سياسة الخصوصية",
    "footer.email": "البريد الإلكتروني أليريو كير",
    "footer.phone": "اتصل بـ Alirio Care",
    "footer.copyright": "© حقوق النشر {year}، تم التصميم والتطوير بواسطة",
    "footer.developer1": "أسد",
    "footer.developer2": "إيدين",
    "footer.and": "و",
  },
} as const;

// Content translations object
export const contentTranslations = {
  en,
  bs,
  sv,
  ar,
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang; // Now returns "sv" as default
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

// Create unified translation function
export function getTranslations(lang: string) {
  return {
    ui: ui[lang] || ui.sv,
    content: contentTranslations[lang] || contentTranslations.sv,
  };
}
