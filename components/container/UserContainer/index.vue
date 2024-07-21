<template>
  <div class="container">
    <h1>
      UserContainer<span class="text-m"
        >user id: {{ id }} を受け取りました。</span
      >
    </h1>
    <slot name="userContainer" :profile="state" />
  </div>
</template>

<script setup>
import { fetchUser } from "~/apis/user";

const props = defineProps({
  id: { type: String, required: true },
});

const getUser = (id) => {
  try {
    const response = fetchUser(id);
    return response;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const { state, setUser } = useUser();
const response = getUser(props.id);

setUser(response);
</script>
