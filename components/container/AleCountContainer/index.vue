<template>
  <div class="container">
    <h1>AleCountContainer</h1>
    <slot
      name="aleCountContainer"
      :ale-count="state.aleCount"
      :doubled-ale-count="doubledAleCount"
      :on-increment-ale-count="onIncrementAleCount"
      :on-clear-ale-count="onClearAleCount"
    />
  </div>
</template>

<script setup>
const { state, doubled, increment, clear } = useAleCounter()
const doubledAleCount = doubled

const onIncrementAleCount = () => {
  increment({ ...state.value, aleCount: state.value.aleCount + 1 })
}

const onClearAleCount = () => {
  clear()
}
</script>
