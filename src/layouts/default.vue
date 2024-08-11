<script setup>
import { ref } from 'vue'
import { useDisplay } from 'vuetify'

const { mdAndDown } = useDisplay()
const drawer = ref(null)

// Watcher on smAndUp
onMounted(() => {
  console.log('Mounted')
  // if (mdAndDown) {
  //   drawer.value = false
  // }
})
</script>
<template>
  <v-app>
    <!-- <v-navigation-drawer :width="250" mobile-breakpoint="md" style="top: 0px; bottom: 0px;"> -->
    <v-navigation-drawer v-model="drawer" mobile-breakpoint="md" :width="250" style="top: 0px; bottom: 0px;">
      <v-row class="align-center justify-center flex-column fill-height pt-8 mx-0">
        <h2 class="text-h2 font-weight-black text-primary mb-2">DW</h2>
        <div class="text-h5 mb-2">Daniel Wellermann</div>
        <p class="font-weight-thin mb-5">BIM-Magier und Maker</p>
        <!-- About Me -->
        <div class="my-1">
          <v-btn variant="text" class="font-weight-light" to="/">START</v-btn>
        </div>
        <!-- Blog & Docs -->
        <!-- W-Helfer (utilities für den Alltag ) -->
        <div class="my-1">
          <v-btn variant="text" class="" to="/about" disabled>
            <template v-slot:append>
              <v-badge class="ms-2 mb-4" color="purple" content="Soon!">
              </v-badge>
            </template>
            <!-- <span class="text-primary font-weight-bold">W</span> -->
            <span>Blog & DOCS</span>
          </v-btn>
        </div>
        <div class="my-1">
          <v-btn variant="text" class="" to="/about" disabled>
            <template v-slot:append>
              <v-badge class="ms-2 mb-4" color="purple" content="Soon!">
              </v-badge>
            </template>
            <span class="text-primary font-weight-bold">W</span><span>-Helfer</span>
          </v-btn>
        </div>
        <!-- Naturbaukasten App für Ökobaudat ?  -->
        <div class="my-1" hidden>
          <v-btn variant="text" class="" disabled>
            <template v-slot:append>
              <v-badge class="ms-2 mb-4" color="amber" content="APP">
              </v-badge>
            </template>
            <span>Naturbaukasten.de</span>
          </v-btn>
        </div>

        <!-- Kontakt -->
        <div class="my-1">
          <v-btn variant="text" class="font-weight-light text-amber" disabled>Get in Touch!</v-btn>
        </div>
        <!-- Footer  Github and Socials -->
        <div class="mt-auto mb-4">
          <v-btn icon href="https://github.com/danielW3ll" target="_blank" class="mx-3">
            <v-icon>mdi-github</v-icon>
          </v-btn>
          <v-btn icon href="https://de.linkedin.com/in/wellermann" target="_blank" class="mx-3">
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn icon href="https://www.instagram.com/daniel_wellermann" target="_blank" class="mx-3">
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
        </div>
      </v-row>
    </v-navigation-drawer>
    <!-- <v-app-bar v-if="$vuetify.display.smAndDown" collapse elevation="7" class="">
      <template v-slot:prepend>

        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </template>
      <v-toolbar-title>Wellermann</v-toolbar-title>
    </v-app-bar> -->

    <!-- Floating Burger Button with v-fab-->

    <v-main>

      <v-fab @click="drawer = !drawer" :active="$vuetify.display.smAndDown" icon="mdi-menu" location="top right" variant="tonal" app style="top: 0.5rem; right: 0.5rem">
      </v-fab>
      <slot />
    </v-main>
  </v-app>
</template>
