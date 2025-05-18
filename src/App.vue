<template>
  <NavBar />
  <main class="app-content">
    <router-view />
  </main>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #FAF0E6; /* светлый бежевый */
}

.app-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: calc(100vh - 200px);
}
</style>