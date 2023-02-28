<template>
  <div
    v-for="meal of meals"
    :key="meal.idMeal"
    class="bg-white shadow rounded-xl"
  >
    <RouterLink :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl h-48 object-cover w-full"
      />
    </RouterLink>
    <div class="px-3">
      <h3 class="font-bold text-center">{{ meal.strMeal }}</h3>
      <p class="mb-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, ducimus?
      </p>
      <div class="pb-4 flex justify-between items-center">
        <YouTubeBtn :href="meal.strYoutube">YouTube</YouTubeBtn>
      </div>
    </div>
  </div>
</template>

<script setup>
import YouTubeBtn from './YouTubeBtn.vue';
const props = defineProps({
    meals: Array
})
</script>
