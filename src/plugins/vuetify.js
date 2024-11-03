import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'dark',
      themes: {
        dark: {
          colors: {
            primary: '#00FF00',
          },
        },
        light: {
          colors: {
            primary: '#00FF00',
          },
        },
      },
    },
    ssr: true,
  })
  app.vueApp.use(vuetify)
})
