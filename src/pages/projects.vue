<script setup>
const pageName = 'projects'

useHead({
  title: `Projekte, Produkte`,
  meta: [
    {
      name: 'description',
      content:
        'Eine Übersicht über meine Projekte in den Bereichen BIM-Koordination, Entwicklung, GNU/Linux, Open Source Software und Maker-Kreationen.',
    },
    {
      name: 'keywords',
      content:
        'Projekte, BIM, Entwickler, GNU/Linux, OSS, IT, Maker, Werkstatt',
    },
    { property: 'og:title', content: 'Projekte - Mein Open Space' },
    {
      property: 'og:description',
      content:
        'Erfahre mehr über meine Projekte in BIM-Koordination, Open Source Software, GNU/Linux und DIY-Maker-Projekten.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://wellermann.de/projects' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Projekte - Mein Open Space' },
    {
      name: 'twitter:description',
      content:
        'Eine Sammlung meiner BIM, Open Source, GNU/Linux und Maker-Projekte.',
    },
  ],
})

const projects = [
  {
    active: false,
    date: 2023,
    title: 'Field Target Score Card',
    description:
      'Die Fieldtarget Scorecard Web-App ist mein persönliches Projekt. Das ich in erster Linie für mich selbst entwickle, um meine Leistung beim Schießen zu verfolgen und zu verbessern. Gleichzeitig möchte ich es aber auch allen anderen Fieldtarget-Schützen zur Verfügung stellen.',
    link: '',
    linkExtern: ['https://fieldtarget-event.com/'],
    category: ['Digital Product'],
  },
]
</script>
<template>
  <v-container class="w-lg-75">
    <HeaderComp class="" :name="pageName" />
    <p class="text-subtitle-1 text-medium-emphasis mb-6 mt-2">Meine Projekte</p>
    <v-row justify="center">
      <v-col v-for="prj in projects" :key="prj.title">
        <v-card class="d-flex justify-center ga-6 py-3" variant="elevated" flat :to="prj.link ? prj.link : ''">
          <div class="px-4">
            <div class="d-flex align-center ga-2 my-2">
              <p class="text-caption text-medium-emphasis">{{ prj.date }}</p>
              <v-chip size="x-small" v-for="category in prj.category" :key="category">{{ category }}</v-chip>
              <v-chip class="ms-auto" :color="prj.active ? 'primary' : 'warning'" label>{{ prj.active ? 'Aktiv' : 'Zurückgestellt' }}</v-chip>

            </div>
            <p class="text-subtitle-1">{{ prj.title }}</p>
            <p class="text-caption text-medium-emphasis my-1">{{ prj.description }}</p>
            <v-divider class="my-3"></v-divider>
            <v-btn v-for="link in prj.linkExtern" :key="link" color="secondary" text :href="link" target="_blank" variant="outlined">{{ link }}</v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
