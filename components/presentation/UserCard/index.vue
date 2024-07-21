<template>
  <div class="presentation">
    <h2>UserCard</h2>
    <p>ID: {{ id }}</p>
    <p>Name: {{ name }}</p>
    <p>Age: {{ age }}</p>
    <p>Sex: {{ sex }}</p>
    <p>greetingId: {{ greetingId }}</p>
    <p>greeting: {{ greeting }}</p>
    <p>favorite: <span v-if="favorite">好き</span><span v-else>嫌い</span></p>
    <Button @click="onClick" class="ale_button">お気に入り</Button>
  </div>
</template>

<script setup>
const props = defineProps({
  age: { type: Number, required: true },
  id: { type: String, required: true },
  name: { type: String, required: true },
  sex: { type: String, required: true },
  greeting: { type: String, required: true },
  greetingId: { type: String, required: true },
  favorite: { type: Boolean, required: true },
});

const emit = defineEmits(["click"]);

const onClick = () => {
  emit("click");
};
</script>
