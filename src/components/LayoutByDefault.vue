<template>
  <div class="bg-gray-100 min-h-screen">
    <NavBar/>
    <main>
        <router-view/>
    </main>
  </div>
</template>

<script setup>
import NavBar from './NavBar.vue';
</script>
