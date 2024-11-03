<template>
  <v-app>
    <v-app-bar app color="transparent" class="pt-2 hidden-sm-and-down" flat>
      <v-row class="">
        <v-col cols="" class="d-flex justify-center align-center">
          <v-card color="" class="pa-3 rounded-lg border-sm d-flex justify-center align-center">
            <span class="text-h5">wllmnn</span>
            <!-- Hier hinter die Aktive Seite als span anzeigen -->

            <span class="text-primary font-weight-medium text-h5 ">$</span>
            <span class="text-h5 elementToFadeInAndOut me-2">_</span>
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
    <v-main class="pt-0">
      <slot />
    </v-main>

    <v-fab :active="$vuetify.display.smAndDown" location="bottom end" size="64" app appear color="" class="" variant="outlined" width="">
      <!-- <v-icon>mdi-menu</v-icon> -->

      <span class="text-primary font-weight-medium text-h5 ">$</span>
      <span class="text-h5 elementToFadeInAndOut me-2">_</span>
      <!-- Hier hinter die Aktive Seite als span anzeigen -->
      <v-menu transition="slide-x-transition" offset-y location="top" activator="parent" class="primary hidden-md-and-up ">

        <v-btn v-for="menue in menue" :key="menue.icon" class="my-2 border border-opacity-100 text-none text-primary" onclick="console.log('asd')" :to="menue.href" :prepend-icon="menue.icon"
          density="default">{{
            menue.text }}</v-btn>
      </v-menu>
    </v-fab>


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
    href: '/',
  },
  {
    icon: 'mdi-apps',
    text: '~/stuff',
    href: '/',
  },
  {
    icon: 'mdi-account-box-outline',
    text: '~/contact',
    href: '/',
  },
]
</script>
<style scoped>
.elementToFadeInAndOut {
  animation: fadeInOut 1s infinite;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>
