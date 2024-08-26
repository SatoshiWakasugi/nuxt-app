<script lang="ts">
/**
 * # Modal
 *
 * This component provides a modal UI.
 *
 * ***
 * ## ❓ How to import
 *
 * ```javascript
 * import Modal from '@/components/ui/Modal/index.vue';
 * ```
 *
 * ***
 * ## 🛠️ Props
 * - **open** : `Boolean` (optional)
 *   - Controls the visibility of the modal.
 * - **closeIcon** : `Boolean` (optional)
 *   - The icon used to  the modal.
 * - **closable** : `Boolean` (optional)
 *   - The icon used to  the modal.
 * - **overlayClosable** : `Boolean` (optional)
 *   - The icon used to  the modal.
 * - **...** : `HTMLAttributes`
 *   - The icon used to  the modal.
 *
 * ***
 * ## 🎰 Slots
 * - **trigger** : slotPlops -> [ open ]
 *   - The slot for the trigger element to open the modal.
 * - **contents** : slotPlops -> [ close ]
 *   - The slot for the content inside the modal.
 *
 * ***
 * ## 🚀 Emits
 * - **onOpen**
 *   - Emitted when the modal is opened.
 * - **onClose**
 *   - Emitted when the modal is closed.
 * - **update**
 *   - Emitted when the modal is updated.
 *
 * ***
 * ## 📕 Storybook
 * - [Storybook Link](https://www.youtube.com/)
 */
</script>

<template>
  <div>
    <div
      class="w-fit pointer"
      @click="onOpen"
    >
      <slot
        name="trigger"
        :open="onOpen"
      />
    </div>
    <Teleport to="body">
      <div
        v-if="isOpen"
        class="fixed h-full w-full bg-black opacity-50"
        @click="overlayClosable && onClose()"
      />
      <div
        v-if="isOpen"
        class="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
      >
        <div
          :class="[BASE_STYLE, props.class]"
        >
          <button
            v-show="closeIcon"
            class="absolute top-4 right-4 w-6 h-6"
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
          />
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

interface Props extends /* @vue-ignore */ HTMLAttributes {
  open?: boolean
  closeIcon?: boolean
  closable?: boolean
  overlayClosable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  triggerType: 'button',
  closeIcon: true,
  closable: true,
  overlayClosable: true,
})

const emit = defineEmits(['onOpen', 'onClose', 'handleOpen'])

const isOpen = ref(false)

const slots = useSlots()
const { trigger, contents } = slots

const throwError = (errorMessage: string) => {
  throw Error(errorMessage)
}

if (trigger) {
  if (!trigger()?.[0]?.children) throwError('slot #trigger children is required.')
}

if (contents) {
  if (!contents()?.[0]?.children) throwError('slot #contents children is required.')
}

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
  emit('onOpen')
}

const onClose = () => {
  if (!props.closable) {
    return
  }
  if (props.open) {
    emit('handleOpen')
    return
  }
  isOpen.value = false
  emit('onClose')
}

const BASE_STYLE = 'bg-white w-[360px] rounded-md p-8'
</script>

<style scoped></style>
