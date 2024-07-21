<template>
  <div class="container">
    <h1>FavoriteContainer</h1>
    <slot
      name="favoriteContainer"
      :favorite="favorite"
      :toggleFavorite="toggleFavorite"
    />
  </div>
</template>

<script setup>
const favorite = ref(false);

const toggleFavorite = () => {
  favorite.value = !favorite.value;
};
</script>
