<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style>

main {
  margin-top: 4rem;
}

</style>
