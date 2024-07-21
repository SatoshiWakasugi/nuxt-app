<template>
  <div class="container">
    <h1>AleCountContainer</h1>
    <slot
      name="aleCountContainer"
      :aleCount="state.aleCount"
      :doubledAleCount="doubledAleCount"
      :incrementAleCount="incrementAleCount"
      :clearAleCount="clearAleCount"
    />
  </div>
</template>

<script setup>
const { state, doubled, increment, clear } = useAleCounter();
const doubledAleCount = doubled;

const incrementAleCount = () => {
  increment({ ...state.value, aleCount: state.value.aleCount + 1 });
};

const clearAleCount = () => {
  clear();
};
</script>
