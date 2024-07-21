<template>
  <div class="container">
    <h1>AleCountContainer</h1>
    <slot
      name="aleCountContainer"
      :aleCount="state.aleCount"
      :doubledAleCount="doubledAleCount"
      :onIncrementAleCount="onIncrementAleCount"
      :onClearAleCount="onClearAleCount"
    />
  </div>
</template>

<script setup>
const { state, doubled, increment, clear } = useAleCounter();
const doubledAleCount = doubled;

const onIncrementAleCount = () => {
  increment({ ...state.value, aleCount: state.value.aleCount + 1 });
};

const onClearAleCount = () => {
  clear();
};
</script>
