<template>
  <div>
    <slot name="trigger" :open="onOpen" class="w-fit pointer">
      <button @click="onOpen">open</button>
    </slot>
    <Teleport to="body">
      <div
        v-show="open"
        class="fixed z-50 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
      >
        <div class="relative bg-white p-6 w-[360px] rounded-md">
          <button @click="onClose" class="fixed top-0 right-0">Close</button>
          <slot name="contents" :close="onClose">contents</slot>
        </div>
      </div>
      <div
        v-show="open"
        @click="onClose"
        class="z-99 fixed flex justify-center align-middle top-0 bottom-0 left-0 right-0 bg-black opacity-50"
      />
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

<style scoped></style>
