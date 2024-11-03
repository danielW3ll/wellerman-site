<script setup>
const name = defineProps({
  name: String,
})
</script>

<template>
  <div class="d-flex align-center">
    <span class="font-weight text-h4 ">{{ name.name }}</span>
    <span class="text-primary font-weight-medium text-h4 ">$</span>
    <span class="text-h4 elementToFadeInAndOut me-2">_</span>
  </div>
</template>
