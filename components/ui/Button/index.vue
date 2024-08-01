<template>
  <div>
    <button
      class="px-4 py-2 rounded-md bg-blue-600 text-white"
      @click="onClick"
    >
      <slot />
    </button>
  </div>
</template>

<script setup>
const emit = defineEmits(['click'])

const onClick = () => {
  emit('click')
}
</script>
