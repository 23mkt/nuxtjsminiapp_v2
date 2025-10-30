import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: false,       // SPA mode
  target: 'static', // Static build
  app: {
    baseURL: '/nuxt/'  // <-- Important! Make all asset paths relative to /nuxt/
  }
})
