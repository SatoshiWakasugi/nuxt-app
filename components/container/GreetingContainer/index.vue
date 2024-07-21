<template>
  <div class="container">
    <h1>
      GreetingContainer<span class="text-m"
        >user id: {{ id }} を受け取りました。</span
      >
    </h1>

    <slot name="greetingContainer" :greeting="state" />
  </div>
</template>

<script setup>
import { fetchGreeting } from "~/apis/greeting";

const props = defineProps({
  id: { type: String, required: true },
});

const getGreeting = (id) => {
  try {
    const response = fetchGreeting(id);
    return response;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const { state, setGreeting } = useGreeting();
const response = getGreeting(props.id);

setGreeting(response);
</script>
