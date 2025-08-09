// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image'],
  image: {
    screens: { md: 960, lg: 1280, xl: 1920 }
  },
  css: ['~/assets/styles/main.scss', '@splidejs/vue-splide/css'],
})