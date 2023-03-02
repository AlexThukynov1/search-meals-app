<template>
     <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <Meal :meals="meals" />
    </div>
    <div class="text-center" v-if="!meals.length">
    </div>
    <Spinner v-if="loaded"/>
</template>

<script setup>
import Meal from './Meal.vue';
import Spinner from './Spinner.vue';
import { computed } from 'vue';
import store from '../store';

const loaded = computed(() => store.state.isLoading);
const {meals} = defineProps({
    meals: {
        required: true,
        type: Object
    }
})
</script>

