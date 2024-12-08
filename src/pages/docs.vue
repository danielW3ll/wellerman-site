<script setup>
const pageName = 'docs'

useHead({
  title: `Blog, Dokumentationen`,
  meta: [
    {
      name: 'description',
      content:
        'Technische Dokumentationen und Ressourcen für BIM, Entwicklung und Open Source Software.',
    },
    {
      name: 'keywords',
      content:
        'Dokumentation, BIM, Entwickler, Open Source, GNU/Linux, Ressourcen',
    },
    { property: 'og:title', content: 'Dokumentation - wellermann' },
    {
      property: 'og:description',
      content:
        'Detaillierte Dokumentation und Ressourcen für BIM-Koordinierung, GNU/Linux und Open Source Software.',
    },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Dokumentation - wellermann' },
    {
      name: 'twitter:description',
      content:
        'Technische Dokumentation zu BIM, Open Source Software und GNU/Linux.',
    },
  ],
})
const docs = [
  // {
  //   type : 'blog', // blog, doc, pub
  //   date: 2023,
  //   title: 'Field Target Score Card',
  //   description: 'Die Fieldtarget Scorecard Web-App ist mein persönliches Projekt. Das ich in erster Linie für mich selbst entwickle, um meine Leistung beim Schießen zu verfolgen und zu verbessern. Gleichzeitig möchte ich es aber auch allen anderen Fieldtarget-Schützen zur Verfügung stellen.',
  //   link: '',
  //   linkExtern: ['https://fieldtarget-event.com/'],
  //   category: ['Digital Product']
  // }
]
</script>
<template>
  <v-container class="w-lg-75">
    <HeaderComp class="" :name="pageName" />
    <p class="text-subtitle-1 text-medium-emphasis mb-6 mt-2">Hier gibt es Blog beiträge, Dokumentationen und Veröffentlichungen</p>
    <v-row justify="center">
      <v-col v-for="doc in docs" :key="doc.title">
        <v-card class="d-flex justify-center ga-6 py-3" variant="elevated" flat :to="doc.link ? doc.link : ''">
          <div class="px-4">
            <div class="d-flex align-center ga-2 my-2">
              <p class="text-caption text-medium-emphasis">{{ doc.date }}</p>
              <v-chip size="x-small" v-for="category in doc.category" :key="category">{{ category }}</v-chip>
            </div>
            <p class="text-subtitle-1">{{ doc.title }}</p>
            <p class="text-caption text-medium-emphasis my-1">{{ doc.description }}</p>
            <v-divider class="my-3"></v-divider>
            <v-btn v-for="link in doc.linkExtern" :key="link" color="secondary" text :href="link" target="_blank" variant="outlined">{{ link }}</v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
