<template>
  <div v-for="i in 300_000" :key="i">
    <BaseButtonHandler :click-handler="onButtonClick" />
  </div>
</template>

<script setup lang="ts">
import BaseButtonHandler from "@/components/BaseButtonHandler.vue";

function onButtonClick() {
  console.log("clicked");
}
</script>

<style scoped></style>
