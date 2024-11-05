<script setup>

const pageName = 'contact'

useHead({

  title: `${pageName} - wellermann`,
  meta: [
    { name: 'description', content: 'Kontaktiere mich für Anfragen zu BIM-Koordination, Entwicklung, GNU/Linux und Maker-Projekten.' },
    { name: 'keywords', content: 'Kontakt, BIM-Koordinator, Entwickler, Maker, GNU/Linux, OSS' },
    { property: 'og:title', content: 'Kontakt - Wellermann' },
    { property: 'og:description', content: 'Erreiche mich für Anfragen zu BIM, Entwicklung und Maker-Projekten.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://wellermann.de/contact' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Kontakt - Wellermann' },
    { name: 'twitter:description', content: 'Kontaktiere mich für Informationen zu BIM-Koordination, Entwicklung und Maker-Projekten.' },
  ]
})
</script>
<template>
  <v-container class="w-lg-75">
    <HeaderComp class="" :name="pageName" />
    <p class="text-subtitle-1 text-medium-emphasis mb-6 mt-2">Folgt bald... </p>
  </v-container>
</template>
