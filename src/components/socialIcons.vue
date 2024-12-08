<script setup>
defineProps({
  modeStyle: String,
})
const socials = [
  {
    icon: 'mdi-linkedin',
    href: 'https://www.linkedin.com/in/wellermann/',
  },
  {
    icon: 'mdi-instagram',
    href: 'https://www.instagram.com/daniel_wellermann/',
  },
  {
    icon: 'mdi-facebook',
    href: 'https://www.facebook.com/wellermann.daniel',
  },
  {
    icon: 'mdi-github',
    href: 'https://github.com/danielW3ll',
  },
]
</script>
<template>
  <v-card v-if="modeStyle === 'default'" color="" class="pa-3 rounded-lg d-flex ">
    <v-btn v-for="social in socials" :key="social.icon" icon :href="social.href" target="_blank" class=" mx-2 border border-opacity-100 text-none text-primary" variant="outlined">
      <v-icon>{{ social.icon }}</v-icon>
    </v-btn>
  </v-card>

  <v-card v-else-if="modeStyle === 'footer'" color="" class="pa-3 rounded-lg d-flex justify-center">
    <v-btn v-for="social in socials" :key="social.icon" icon :href="social.href" target="_blank" class=" mx-2 border border-opacity-100 text-none text-primary" variant="outlined">
      <v-icon>{{ social.icon }}</v-icon>
    </v-btn>
  </v-card>

  <!-- List -->
  <v-card v-else-if="modeStyle === 'list'">

    <v-list>
      <v-list-item v-for="social in socials" :key="social.icon">
        <template v-slot:prepend>
          <v-icon :icon="social.icon"></v-icon>
        </template>
        <v-list-item-title>
          <a :href="social.href" target="_blank">{{ social.href }}</a>
        </v-list-item-title>
      </v-list-item>
    </v-list>


  </v-card>
</template>
