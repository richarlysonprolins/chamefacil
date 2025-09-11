<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <RouterView />
</template>

<style>
html, body, #app {
  width: 100dvw !important;
  background-color: rgb(0, 129, 250);
}
#app {
  display: flex;
  place-items: center;
}
</style>
