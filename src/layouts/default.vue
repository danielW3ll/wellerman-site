<template>
  <v-app>
    <v-app-bar app color="transparent" class="pt-2 hidden-sm-and-down " flat>
      <v-row class="">
        <v-col cols="" class="d-flex justify-center align-center">
          <v-card color="" class="pa-3 rounded-lg d-flex justify-center align-center">
            <span class="text-h5">wllmnn</span>
            <!-- Hier hinter die Aktive Seite als span anzeigen -->

            <span class="text-primary font-weight-medium text-h5">$</span>
            <span class="text-h5 me-2">_</span>
            <v-btn v-for="menue in menue" :key="menue.icon" class="mx-2 border border-opacity-100 text-none text-primary" :to="menue.href" variant="outlined" :prepend-icon="menue.icon">{{
              menue.text }}</v-btn>
            <!-- THEME SWITCHER -->
            <!-- <v-btn class="mx-2 border-dashed border border-opacity-100 text-none" color="primary" variant="outlined" @click="console.log('toggle')" prepend-icon="mdi-theme-light-dark"> -->

            <!-- </v-btn> -->
            <!-- Languega Switcher de/en -->
            <!-- <v-btn class="mx-2 border-dashed border border-opacity-100 text-none" color="primary" variant="outlined" @click="console.log('toggle')" prepend-icon="mdi-translate"> -->

            <!-- </v-btn> -->
          </v-card>
        </v-col>

      </v-row>
    </v-app-bar>
    <v-main class="pt-0" :class="$vuetify.display.mdAndDown ? 'pb-12' : ''">
      <slot />
    </v-main>
    <v-container class="position-fixed bottom-0 d-flex align-center justify-center " fluid>
      <!-- <v-card class="pa-3 rounded-lg border-sm d-flex justify-center align-center"> -->

      <!-- Hier hinter die Aktive Seite als span anzeigen -->

      <v-menu location="top" class="">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" size="x-large" class="border border-opacity-100 hidden-md-and-up ">
            <span class="text-h5">wllmnn</span>
            <span class="text-primary font-weight-medium text-h5 ">$</span>
            <span class="text-h5 text-white elementToFadeInAndOut me-2">_</span>
          </v-btn>
        </template>
        <v-btn v-for="menue in menue" :key="menue.icon" class="my-2 border border-opacity-100 text-none text-primary" :to="menue.href" :prepend-icon="menue.icon" density="default">{{
          menue.text }}</v-btn>
      </v-menu>
      <!-- </v-card> -->
    </v-container>
  </v-app>
</template>
<script setup>
const activatorMenu = ref(false)
const menue = [
  {
    icon: 'mdi-home-outline',
    text: '~/',
    href: '/',
  },
  {
    icon: 'mdi-post-outline',
    text: '~/docs',
    href: '/docs',
  },
  {
    icon: 'mdi-apps',
    text: '~/projects',
    href: '/projects',
  },
  {
    icon: 'mdi-account-box-outline',
    text: '~/contact',
    href: '/contact',
  },
]
</script>
<style scoped></style>
