// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "@vueuse/sound/nuxt",
    "@formkit/nuxt",
  ],
  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true,
  },
  runtimeConfig: {
    public: {
      CLOUDFLARE_WORKER_URL: "",
    },
  },
  googleFonts: {
    families: {
      "EB Garamond": [400, 500, 600, 700],
      "Open Sans": [400, 600, 700],
    },
  },
  routeRules: {
    "/": {
      ssr: false,
    },
    "/gallery": {
      ssr: false,
    },
  },
  sound: {
    sounds: {
      scan: true,
    },
  },
});
