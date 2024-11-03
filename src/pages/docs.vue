<script setup>

const pageName = 'docs'

useHead({

  title: `${pageName}- wellermann`,
  meta: [
    {
      name: pageName,
      content: 'Projects',
    },
  ],
})

</script>
<template>
  <v-container :class="$vuetify.display.mdAndUp ? 'pt-16 mt-8' : ''">
    <HeaderComp class="" :name="pageName" />
    <p class="text-subtitle-1 text-medium-emphasis mb-6 mt-2">Folgt bald... </p>
  </v-container>
</template>
