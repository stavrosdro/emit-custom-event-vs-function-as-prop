<template>
  <div>
    <button class="btn" @click="onClick">Click me!</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  clickHandler: () => void;
}>();

function onClick() {
  props.clickHandler();
}
</script>

<style scoped>
.btn {
  padding: 8px 16px;
  cursor: pointer;
}
</style>
