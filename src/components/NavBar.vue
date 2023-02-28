<template>
  <header class="bg-white shadow h-16 flex justify-between items-stretch">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full px-5"
    >
      Home
    </router-link>
    <div class="flex items-center gap-1">
      <router-link
        :to="{ name: 'byName', params: {} }"
        class="px-3 h-full hover:bg-purple-200 inline-flex items-center transition-colors max-[520px]:text-sm max-[465px]:text-xs"
      >
        Search meals
      </router-link>
      <router-link
        :to="{ name: 'byLetter', params: {} }"
        class="px-3 h-full hover:bg-purple-200 inline-flex items-center transition-colors max-[520px]:text-sm max-[465px]:text-xs"
      >
        Meals by letter
      </router-link>
      <router-link
        :to="{ name: 'ingredients', params: {} }"
        class="px-3 h-full hover:bg-purple-200 inline-flex items-center transition-colors max-[520px]:text-sm max-[465px]:text-xs"
      >
        Meals by Ingredients
      </router-link>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
