<template>
  <v-app>
    <v-app-bar app color="transparent" class="pt-2 hidden-sm-and-down " flat>
      <v-row class="">
        <v-col cols="" class="d-flex justify-center align-center">
          <v-card color="" class="pa-3 rounded-lg d-flex justify-center align-center">
            <span class="text-h5">wellermann</span>
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
    <v-main class="" :class="$vuetify.display.smAndDown ? 'pb-12 pt-4 ' : 'pt-16 mt-8'">
      <slot />
    </v-main>
    <!-- <v-footer class="bg-indigo-lighten-1 text-center d-flex flex-column">
      <div>
        <v-btn v-for="icon in menue" :key="icon" :icon="icon" class="mx-4" variant="text"></v-btn>
      </div>

      <div class="pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa
        consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin.
        Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </div>

      <v-divider></v-divider>

      <div>
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </div>
    </v-footer> -->
    <v-container class="position-fixed bottom-0 d-flex align-center justify-center pb-8" fluid>
      <!-- <v-card class="pa-3 rounded-lg border-sm d-flex justify-center align-center"> -->

      <!-- Hier hinter die Aktive Seite als span anzeigen -->

      <v-menu location="top" class="">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" size="x-large" class="border border-opacity-100 hidden-md-and-up w-100 ">
            wellermann
            <v-icon class="text-primary">mdi-menu</v-icon>
            <!-- <span class="text-primary font-weight-medium text-h5 ">$</span> -->
            <span class="text-h5 text-white elementToFadeInAndOut ">_</span>
          </v-btn>
        </template>
        <v-btn v-for="menue in menue" :key="menue.icon" class=" ms-auto my-2 border border-opacity-100 text-none text-primary w-50" :to="menue.href" :prepend-icon="menue.icon" density="default">{{
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
