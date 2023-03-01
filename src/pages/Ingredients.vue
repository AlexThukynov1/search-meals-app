<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
    <router-link :to="{name:'byIngredients', params: {ingredient: ingredient.strIngredient}}" v-for="ingredient of ingredients" :key="ingredient.idIngredient" class="block bg-white rounded p-3 mb-3 shadow">
        <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
        <p>{{ ingredient.strDescription }}</p>
    </router-link>

  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import BasicFetch from "../api";
import axios from "axios";

const ingredients = ref([]);

onMounted(() => {
  axios.get("https:/www.themealdb.com/api/json/v1/1/list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>
