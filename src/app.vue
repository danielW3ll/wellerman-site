<script setup>
useHead({
  title: 'wellermann',
  htmlAttrs: {
    lang: 'de'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: 'Open Space im Netz eines BIM-Koordinators, Entwicklers und Makers. Leidenschaft für GNU/Linux, OSS, IT und eine gut ausgestattete Werkstatt mit Drehbank und 3D-Drucker.' },
    { name: 'keywords', content: 'BIM-Koordinator, Entwickler, Maker, GNU/Linux, OSS, IT, Werkstatt, 3D-Drucker, Drehbank' },
    { name: 'author', content: 'Dein Name' }, // falls du deinen Namen hinzufügen möchtest
    { property: 'og:title', content: 'Wellermann - BIM-Koordinator, Entwickler & Maker' },
    { property: 'og:description', content: 'Entdecke die Welt eines BIM-Koordinators, Entwicklers und Makers mit Fokus auf GNU/Linux, OSS und IT.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://wellermann.de' }, // aktualisieren // ein passendes Bild hinzufügen
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Wellermann - BIM-Koordinator, Entwickler & Maker' },
    { name: 'twitter:description', content: 'Leidenschaft für BIM, Entwicklung, GNU/Linux, OSS und Maker-Projekte.' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  ],
})
</script>
<template>
  <NuxtLayout>

    <NuxtPage />

  </NuxtLayout>
</template>
