<template>
  <div>
    <button
      @click="onClick"
      class="px-4 py-2 rounded-md bg-blue-600 text-white"
    >
      <slot />
    </button>
  </div>
</template>

<script setup>
const emit = defineEmits(["click"]);

const onClick = () => {
  emit("click");
};
</script>
