<template>
  <div class="container">
    <h1>FavoriteContainer</h1>
    <slot
      name="favoriteContainer"
      :favorite="favorite"
      :on-toggle-favorite="onToggleFavorite"
    />
  </div>
</template>

<script setup>
const favorite = ref(false)

const onToggleFavorite = () => {
  favorite.value = !favorite.value
}
</script>
