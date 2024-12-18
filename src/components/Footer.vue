<script setup>

</script>
<template>
  <v-footer class="d-flex">
    <v-row>
      <v-col cols="12" md="12" lg="4">
        <v-btn href="" variant="text">
          Blog
        </v-btn>
      </v-col>
      <v-col cols="6" md="3" lg="2">
        <v-btn href="" variant="text">
          Projekte
        </v-btn>
      </v-col>
      <v-col cols="6" md="3" lg="2">
        <v-btn href="" variant="text">
          Contact
        </v-btn>
      </v-col>
      <!-- <v-col cols="6" md="3" lg="2"></v-col> -->
      <p class="text-caption">
        &copy; {{ new Date().getFullYear() }} — <strong>My App</strong>
      </p>
    </v-row>
  </v-footer>
</template>
