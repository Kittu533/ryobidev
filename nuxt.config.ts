// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt'],
  typescript: {
    strict: true,
    typeCheck: true,
    shim: false
  },
  build: {
    transpile: ['@motionone/vue', 'motion']
  },
  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true
      }
    }
  },
  postcss: {
    plugins: {
      'postcss-minify-selectors': false // sementara nonaktifkan dulu kalau urgent
    }
  }
})