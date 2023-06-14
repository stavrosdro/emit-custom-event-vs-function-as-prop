<template>
  <div>
    <BaseButtonEmit
      v-for="i in 300_000"
      :key="i"
      @button-click="onButtonClick"
    />
  </div>
</template>

<script setup lang="ts">
import BaseButtonEmit from "@/components/BaseButtonEmit.vue";

function onButtonClick() {
  console.log("clicked");
}
</script>

<style scoped></style>
