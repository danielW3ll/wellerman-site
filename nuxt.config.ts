// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  srcDir: 'src/',
  build: {
    transpile: ['vuetify'],
  },
  css: ['~/assets/main.css'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'de',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Wellermann – BIM-Koordinator, Entwickler und Maker aus der Stadt Velen. Entdecke Projekte und DIY-Innovationen.',
        },
        {
          name: 'keywords',
          content:
            'Wellermann, Stadt Velen, Velen, BIM, Entwickler, Maker, GNU/Linux',
        },
        { name: 'author', content: 'Dein Name' }, // falls du deinen Namen hinzufügen möchtest
        {
          property: 'og:title',
          content: 'Wellermann in Stadt Velen - BIM & Maker-Projekte',
        },
        {
          property: 'og:description',
          content:
            'Projekte und Beiträge von Wellermann aus Velen. Schwerpunkte: BIM-Koordination, Entwicklung und Maker-Projekte.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://wellermann.de' }, // aktualisieren // ein passendes Bild hinzufügen
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:title',
          content: 'Wellermann - BIM-Koordinator, Entwickler & Maker',
        },
        {
          name: 'twitter:description',
          content:
            'Leidenschaft für BIM, Entwicklung, GNU/Linux, OSS und Maker-Projekte.',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@nuxtjs/seo',
  ],
  site: {
    url: 'https://wellermann.de',
    name: 'Wellermann.de',
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
