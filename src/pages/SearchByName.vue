<template>
  <div class="pb-0 p-8">
    <input
      type="text"
      v-model="keyword"
      name=""
      class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
      placeholder="Search"
      @change="searchMeal"
    />
  </div>
  <MealsUnit :meals="meals" />
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { ref, onMounted } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import MealsUnit from "../components/MealsUnit.vue";

const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);
const route = useRoute();

function searchMeal() {
  store.dispatch("searchMeals", keyword.value);
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeal();
  }
});
</script>
