<script setup>
definePageMeta({
  layout: 'default',
})

const menue = [
  {
    icon: 'mdi-home-outline',
    text: '~/',
    href: '/',
  },
  {
    icon: 'mdi-post-outline',
    text: '~/docs',
    href: '/blog',
  },
  {
    icon: 'mdi-account-box-outline',
    text: '~/msg',
    href: '/contact',
  },
]
</script>
<template>


  <!-- HEader Menü Sticky -->
  <v-main class="">
    <v-container class="d-flex align-center justify-center ">


      <div class="w-100 w-md-75 text-center">

        <div class="d-flex justify-center " align-self="center">
          <v-img src="/public/ich.jpeg" class="rounded-lg elevation-5 " style="max-width: 250px;" lazy-src="/public/ich.jpeg" alt="Daniel Wellermann"></v-img>
          <!-- <NuxtImg src="/public/ich.jpeg" class="rounded-lg elevation-5 " loading="lazy" /> -->
        </div>

        <!-- <v-chip border="thin opacity-25" color="surface" variant="flat">
          <span class="hidden-sm-and-down">Announcing our</span> <span class="hidden-md-and-up">Our&nbsp;</span> next round of funding. Click <a
            class="d-inline-block mx-1 text-decoration-none text-primary" href="#">here</a> to learn more.
        </v-chip> -->



        <h1 class="text-h4 text-h3 font-weight-bold my-6">
          Mein Workspace im Netz
        </h1>

        <div class="text-body-1  pt-4">
          BIM-Koordinator, Entwickler und Maker.
        </div>
        <div class="text-body-1 text-medium-emphasis mb-10">
          Willkommen in meinem virtuellen Workspace!
          Hauptberuflich bin ich BIM-Koordinator und Entwickler.
          In meiner Freizeit bin ich passionierter Maker und Tüftler.
          Meine Interessen liegen bei GNU/Linux, Open Source Software und IT.
          Dazu gehört eine voll ausgestattete Werkstatt mit Werkzeugen, Drehbank und 3D-Drucker.
        </div>
        <!-- <div class="text-body-1 text-medium-emphasis mb-10">
          Mit meiner Erfahrung auf dem Bau und meiner langjährigen Affinität zu GNU/Linux und IT steht die Fachlichkeit bei der Digitalisierung im Vordergrund.
        </div> -->

        <div class="d-flex ga-4 justify-space-around pt-8">

          <!-- <v-btn class="text-none" color="primary" flat rounded="lg" text="Get started" />

          <v-btn append-icon="mdi-chevron-right" class="text-none" flat rounded="lg" text="Learn more" /> -->
        </div>

        <div class="text-body-1 my-6">
          <span>
            Seite befindet sich noch im Aufbau
          </span>
          <span class="text-primary">
            ;)
          </span>
        </div>

      </div>


    </v-container>
  </v-main>
</template>
<style scoped>
.v-bg {
  filter: blur(56px);
  pointer-events: none;
}

.v-bg>div {
  background: linear-gradient(to bottom right,
      rgb(var(--v-theme-primary)),
      rgb(var(--v-theme-error)));
  z-index: -10;
  clip-path: polygon(20% 50%, 27% 66%, 41% 66%, 50% 50%, 41% 34%, 27% 34%, 20% 50%, 55% 50%, 62% 66%, 76% 66%, 85% 50%, 76% 34%, 62% 34%, 55% 50%, 30% 50%, 37% 66%, 51% 66%, 60% 50%, 51% 34%, 37% 34%, 30% 50%);
}
</style>
