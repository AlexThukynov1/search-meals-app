<template>
  <div class="flex p-8 flex-col">
    <div class="flex justify-center gap-2 mt-2">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters.split('')"
        :key="letter"
      >
        {{ letter }}
      </router-link>
    </div>
    <MealsUnit :meals="meals"/>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";
import store from "../store";
import MealsUnit from "../components/MealsUnit.vue";

const letters = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
const meals = computed(() => store.state.mealsByLetter);
const route = useRoute();

watch(route,() => {
    store.dispatch("searchMealsByLetter", route.params.letter);
})

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>
