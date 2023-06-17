<template>
  <div v-for="i in 300_000" :key="i">
    <BaseButtonEmit @button-click="onButtonClick()" />
  </div>
</template>

<script setup lang="ts">
import BaseButtonEmit from "@/components/BaseButtonEmit.vue";

function onButtonClick() {
  console.log("clicked");
}
</script>

<style scoped></style>
