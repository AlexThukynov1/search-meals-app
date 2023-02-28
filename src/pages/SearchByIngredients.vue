<template>
   <MealsUnit :meals="meals"/>
</template>

<script setup>
import { onMounted, computed } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import MealsUnit from "../components/MealsUnit.vue";

const meals = computed(() => store.state.mealsByIngredients);
const route = useRoute()
onMounted(() => {
  store.dispatch('searchMealsByIngredients', route.params.ingredient)
});
</script>
