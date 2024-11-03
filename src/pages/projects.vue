<script setup>

const pageName = 'projects'

useHead({

  title: `${pageName}- wellermann`,
  meta: [
    {
      name: pageName,
      content: 'Projects',
    },
  ],
})

useSeoMeta({
  ogtitle: 'Projects',
  description: 'Projects',
  keywords: 'Projects',
  image: '/public/ich.jpeg',
  url: 'https://wellermann.com/projects',
})

</script>
<template>
  <v-container :class="$vuetify.display.mdAndUp ? 'pt-16 mt-8' : ''">
    <HeaderComp class="" :name="pageName" />
    <p class="text-subtitle-1 text-medium-emphasis mb-6 mt-2">Hier liste ich meine Projekte. </p>
    <v-card class="d-flex justify-center ga-6 py-3" variant="elevated" flat>
      <v-row justify="center">
        <v-col>
          <div class=" px-4">
            <div class="d-flex align-center ga-2 my-2">
              <p class="text-caption text-medium-emphasis">2023</p>
              <v-chip size="x-small"> Digital Product </v-chip>
            </div>
            <p class="text-subtitle-1">Field Target Score Card</p>
            <p class="text-caption text-medium-emphasis my-1"> Die Fieldtarget Scorecard Web-App ist mein persönliches Projekt.
              Das ich in erster Linie für mich selbst entwickle, um meine Leistung beim Schießen zu verfolgen und zu verbessern.
              Gleichzeitig möchte ich es aber auch allen anderen Fieldtarget-Schützen zur Verfügung stellen.</p>
            <v-divider class="my-3">

            </v-divider>
            <v-btn color="secondary" text href="https://fieldtarget-event.com/" target="_blank" variant="outlined">fieldtarget-event.com</v-btn>
          </div>
        </v-col>
      </v-row>


    </v-card>
  </v-container>
</template>
