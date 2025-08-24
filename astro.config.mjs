import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://edin-durak.github.io",
  // base: "/alirio",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "sv", "bs", "ar", "ku", "sy"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    ssr: {
      noExternal: ["@astrojs/i18n"],
    },
  },
});
