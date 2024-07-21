<template>
  <div class="presentation">
    <h2>AleCount</h2>
    <p class="ale-count">応援の数: {{ aleCount }}</p>
    <p class="ale-count">2倍の数: {{ doubledAleCount }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  aleCount: { type: Number },
  doubledAleCount: { type: Number },
});
</script>

<style scoped>
.ale-count {
  font-weight: bold;
  padding: 0 24px;
}
</style>
