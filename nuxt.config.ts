// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@vueuse/nuxt'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.scss'],
  runtimeConfig: {
    apiKey: '',
    apiBaseUrl: '',
    public: {
      imgBaseURL: ''
    }
  }
})
