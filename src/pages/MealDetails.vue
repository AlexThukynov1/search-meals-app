<template>
  <div class="max-w-[900px] mx-auto p-8">
    <h1 class="text-5xl mb-5">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="object-cover w-full" />
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Categoty:</strong> {{ meal.strCategory }}
      </div>
      <div><strong class="font-bold">Country:</strong> {{ meal.strArea }}</div>
      <div><strong class="font-bold">Tags:</strong> {{ meal.strTags }}</div>
    </div>
    <div class="my-3">
        {{ meal.strInstructions }}
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul>
          <template v-for="(ing, ind) of new Array(20)">
            <li v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-3">Measures</h2>
        <ul>
          <template v-for="(ing, ind) of new Array(20)">
            <li v-if="meal[`strMeasure${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div class="mt-4 flex gap-3">
        <YouTubeBtn :href="meal.strYoutube">Go to YouTube</YouTubeBtn>
        <a
          :href="meal.strSource"
          target="_blank"
          class=" px-3 py-2 rounded border text-gray-700 border-indigo-600 hover:bg-indigo-200 hover:text-white transition-colors"
          >Go to source</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import BasicFetch from "../api";
import YouTubeBtn from "../components/YouTubeBtn.vue";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  BasicFetch.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>
