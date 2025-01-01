<script setup>
const name = defineProps({
  name: String,
})
</script>

<template>

  <div class="d-flex align-center">
    <span class="font-weight text-h4 ">~/{{ name.name }}</span>
    <!-- <span class="text-primary font-weight-medium text-h4 ">$</span> -->
    <!-- <span class="text-h4 me-2 ms-2">_</span> -->
  </div>
  <v-divider color="success mt-2"></v-divider>
</template>
