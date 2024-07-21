<template>
  <div>
    <button @click="onClick" class="button"><slot /></button>
  </div>
</template>

<script setup>
const emit = defineEmits(["click"]);

const onClick = () => {
  emit("click");
};
</script>

<style scoped>
.button {
  padding: 4px 12px;
  font-size: large;
  background: skyblue;
  border-color: gray;
  border-radius: 4px;
}
</style>
