<template>
  <div class="p-8 pb-0 text-orange-500">
    <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
  </div>
  <MealsUnit :meals="meals"/>
</template>

<script setup>
import { onMounted, ref } from "vue";
import BasicFetch from "../api";
import MealsUnit from "../components/MealsUnit.vue";
import axios from "axios";

const meals = ref([]);

onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    axios.get(`https:/www.themealdb.com/api/json/v1/1/random.php`)
      .then(({ data }) => meals.value.push(data.meals[0]));
  }
});
</script>
