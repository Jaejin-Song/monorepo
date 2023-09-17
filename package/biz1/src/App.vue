<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <HelloWorld />
  <span class="biz-text header-04">biz-color</span>
</template>

<style lang="scss" scoped>
.biz-text {
  color: var(--system-error-color);
  background-color: var(--background-03-color);
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
</style>
