// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "@vueuse/sound/nuxt",
    "@nuxtjs/storybook",
  ],
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
