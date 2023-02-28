<template>
     <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <Meal :meals="meals" />
    </div>
    <div class="text-center" v-if="!meals.length">
        The are no meals
    </div>
</template>

<script setup>
import Meal from './Meal.vue';
const {meals} = defineProps({
    meals: {
        required: true,
        type: Object
    }
})
</script>

