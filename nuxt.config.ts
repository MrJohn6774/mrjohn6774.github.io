// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "John Cheng | Portfolio",
      meta: [
        {
          name: "description",
          content: "Portfolio website of John Cheng - engineer and developer.",
        },
      ],
    },
  },
});
