<script lang="ts">
/**
 * # Modal
 *
 * This component provides a modal dialog with customizable trigger and content slots.
 *
 * ---
 *
 * ## How to import
 *
 * ```javascript
 * import Modal from '@/components/ui/Modal/index.vue';
 * ```
 *
 * ---
 * ## Props
 * - **open**: `Boolean` (optional)
 *   - Controls the visibility of the modal.
 * - **closeIcon**: `String` (optional)
 *   - The icon used to close the modal.
 *
 * ---
 * ## Slots
 * - **trigger**
 *   - The slot for the trigger element to open the modal.
 * - **contents**
 *   - The slot for the content inside the modal.
 *
 * ---
 * ## Emits
 * - **onOpen**
 *   - Emitted when the modal is opened.
 * - **onClose**
 *   - Emitted when the modal is closed.
 * - **update**
 *   - Emitted when the modal is updated.
 *
 * ---
 * ## Storybook
 * - [Storybook Link](https://www.youtube.com/)
 */

export default {}
</script>

<template>
  <div>
    <slot
      name="trigger"
      :open="onOpen"
      class="w-fit pointer"
    >
      <button @click="onOpen">
        open
      </button>
    </slot>
    <Teleport to="body">
      <div
        v-show="isOpen"
        class="fixed z-50 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
      >
        <div
          class="relative bg-white w-[360px] rounded-md"
          :class="[classes]"
          :style="[BASE_STYLE, styles]"
        >
          <button
            v-show="closeIcon"
            class="fixed top-4 right-4 w-6 h-6"
            @click="onClose"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            ><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
          </button>
          <slot
            name="contents"
            :close="onClose"
          >
            contents
          </slot>
        </div>
      </div>
      <div
        v-show="isOpen"
        class="z-99 fixed flex justify-center align-middle top-0 bottom-0 left-0 right-0 bg-black opacity-50"
        @click="overlayClosable ? onClose : null"
      />
    </Teleport>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)

const props = defineProps({
  classes: { type: String },
  styles: { type: Object },
  open: { type: Boolean },
  closeIcon: { type: Boolean, default: true },
  closable: { type: Boolean, default: true },
  overlayClosable: { type: Boolean, default: true },
})

const emit = defineEmits(['onOpen', 'onClose', 'update'])

onMounted(() => {
  if (props.open) {
    isOpen.value = props.open
  }
})

watch(() => props.open, () => {
  isOpen.value = props.open
}, { deep: true })

const onOpen = () => {
  isOpen.value = true
  emit('onOpen', 'open')
}

const onClose = () => {
  if (!props.closable) {
    return
  }
  if (props.open) {
    emit('update')
    return
  }
  isOpen.value = false
  emit('onClose', 'close1', 'close2')
}

const BASE_STYLE = reactive({
  padding: '1.5rem',
})
</script>

<style scoped></style>
