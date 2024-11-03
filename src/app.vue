<script setup>
useHead({
  title: 'wellermann',
  meta: [
    {
      name: 'Daniel Wellermann',
      content: 'Home',
    },

  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  ],
})
</script>
<template>
  <NuxtLayout>
    <v-app>
      <NuxtPage />
    </v-app>
  </NuxtLayout>
</template>
