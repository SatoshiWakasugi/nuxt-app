<template>
  <div>
    <div @click="onOpen" class="trigger">
      <slot name="trigger">
        <button>open</button>
      </slot>
    </div>
    <Teleport to="body">
      <div v-show="open" class="modal">
        <div class="contents-wrapper">
          <button @click="onClose" class="close-button">Close</button>
          <slot name="contents" :close="onClose">contents</slot>
        </div>
      </div>
      <div v-show="open" @click="onClose" class="overlay" />
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from "vue";

const open = ref(false);

const emit = defineEmits(["onOpen", "onClose"]);

const onOpen = () => {
  open.value = true;
  emit("onOpen", "open");
};

const onClose = () => {
  open.value = false;
  emit("onClose", "close");
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal {
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.trigger {
  width: fit-content;
  cursor: pointer;
}

.contents-wrapper {
  position: relative;
  background: #ffffff;
  padding: 24px;
  width: 360px;
}

.close-button {
  position: fixed;
  top: 0.5rem;
  right: 0.5rem;
}
</style>
