// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  nitro: {
    storage: {
      'schedule': {
        driver: 'fs',
        base: './data'
      }
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
  ],
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    config: {},
    viewer: true,
    exposeConfig: false,
  },
  devtools: { enabled: true }
})