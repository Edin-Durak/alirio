import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://edin-durak.github.io",
  // base: "/alirio",
  i18n: {
    defaultLocale: "sv",
    locales: ["en", "sv", "bs", "ar"],
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
