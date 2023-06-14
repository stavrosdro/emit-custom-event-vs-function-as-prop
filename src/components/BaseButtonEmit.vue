<template>
  <div>
    <button class="btn" @click="onClick">Click me!</button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: "button-click"): void;
}>();

function onClick() {
  emit("button-click");
}
</script>

<style scoped>
.btn {
  padding: 8px 16px;
  cursor: pointer;
}
</style>
