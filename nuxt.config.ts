// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Nuxt Portfolio',
      titleTemplate: '%s | Londolanis Portfolio',
    },
  },
  $development: {
    app: {  
      head: {
        title: 'Dev',
      },
    },
  },
  $production: {
    app: {
      head: {
        title: 'Prod',
      },
    },
  },
})
