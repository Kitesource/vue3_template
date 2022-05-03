<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
.app {
  min-height: 100vh;
}
</style>
