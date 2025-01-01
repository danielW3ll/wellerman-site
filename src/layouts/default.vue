<script setup>
const activatorMenu = ref(false)
const menue = [
  {
    icon: 'mdi-home-outline',
    text: '~/',
    href: '/',
  },
  {
    icon: 'mdi-apps',
    text: '~/projects',
    href: '/projects',
  },
  {
    icon: 'mdi-post-outline',
    text: '~/docs',
    href: '/docs',
  },
  {
    icon: 'mdi-account-box-outline',
    text: '~/contact',
    href: '/contact',
  },
]

const footerMenue = [
  {
    text: 'docs',
    href: '/docs',
  },
  {
    text: 'projects',
    href: '/projects',
  },
  {
    text: 'Contact',
    href: '/contact',
  },
]
// Get Route
const route = useRoute()
const routePath = ref()
watch(
  () => route.path,
  () => {
    routePath.value = route.path
    console.log(routePath.value)
  },
)

onBeforeMount(() => {
  routePath.value = route.path
  console.log(routePath.value)
})
</script>
<template>
  <v-app>
    <v-app-bar app color="transparent" class="pt-2  " flat>
      <v-row class="">
        <v-col cols="" class="d-flex justify-center align-center ">
          <v-card color="" class="pa-3 rounded-lg d-flex justify-center align-center ">
            <span class="text-w">WELLERMANN</span>
            <!-- Hier hinter die Aktive Seite als span anzeigen -->

            <span class="text-primary font-weight-medium text-h5">$</span>
            <span class="text-h5 me-2 elementToFadeInAndOut ms-2">_</span>
            <v-btn v-for="menue in menue" :key="menue.icon" class="mx-2 border border-opacity-100 text-none text-primary hidden-sm-and-down" :to="menue.href" variant="outlined"
              :prepend-icon="menue.icon">{{
                menue.text }}</v-btn>
            <!-- THEME SWITCHER -->
            <!-- <v-btn class="mx-2 border-dashed border border-opacity-100 text-none" color="primary" variant="outlined" @click="console.log('toggle')" prepend-icon="mdi-theme-light-dark"> -->

            <!-- </v-btn> -->
            <!-- Languega Switcher de/en -->
            <!-- <v-btn class="mx-2 border-dashed border border-opacity-100 text-none" color="primary" variant="outlined" @click="console.log('toggle')" prepend-icon="mdi-translate"> -->

            <!-- </v-btn> -->
            <v-menu class="">
              <template v-slot:activator="{ props }">
                <v-btn icon="mdi-menu" variant="text" v-bind="props" class="hidden-md-and-up pa-0 ma-0" density="comfortable"></v-btn>
              </template>

              <v-list>
                <v-list-item v-for="menue in menue" :key="menue.icon" :to="menue.href" link>
                  <v-list-item-title class="text-primary">{{ menue.text }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card>
        </v-col>

      </v-row>
    </v-app-bar>


    <!-- <v-main class="" :class="$vuetify.display.smAndDown ? 'pb-12 pt-4 ' : 'pt-16 mt-8'"> -->
    <v-main class="">
      <slot />
    </v-main>
    <v-footer class="d-flex flex-column text-center">
      <v-row>
        <v-col cols="12" md="12" lg="3">
          <v-responsive>
            <span class="">WELLERMANN</span>
            <!-- Hier hinter die Aktive Seite als span anzeigen -->
          </v-responsive>

        </v-col>
        <v-col v-for="menue in footerMenue" :key="menue.text" cols="4" md="4" lg="3">
          <v-btn :to="menue.href" variant="text">
            {{ menue.text }}
          </v-btn>
        </v-col>

        <v-col cols="12">
          <p class="text-caption text-center">
            &copy; {{ new Date().getFullYear() }} — <strong>Daniel Wellermann</strong>
          </p>
        </v-col>
        <!-- <v-col cols="6" md="3" lg="2"></v-col> -->

      </v-row>
    </v-footer>
  </v-app>
</template>

<style scoped>
.text-w {
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 0.0892857143em;

}
</style>
