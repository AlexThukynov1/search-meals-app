import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import SeacrhByName from "../pages/SearchByName.vue";
import SeacrhByLetter from "../pages/SearchByLetter.vue";
import SearchByIngredients from "../pages/SearchByIngredients.vue";
import LayoutByDefault from "../components/LayoutByDefault.vue";
import GuestLayout from "../components/GuestLayout.vue";
import MealDetails from "../pages/MealDetails.vue"
import Ingredients from "../pages/Ingredients.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: LayoutByDefault,
      children: [
        {
          path: "/",
          name: "home",
          component: HomePage,
        },
        {
          path: "/letter/:letter?",
          name: "byLetter",
          component: SeacrhByLetter,
        },
        {
          path: "/searchByName/:name?",
          name: "byName",
          component: SeacrhByName,
        },
        {
          path: "/SearchByIngredients/:ingredient?",
          name: "byIngredients",
          component: SearchByIngredients,
        },
        {
          path: "/ingredients",
          name: "ingredients",
          component: Ingredients,
        },
        {
          path: '/meal/:id',
          name:'mealDetails',
          component: MealDetails
        }
      ],
    },
    {
        path:'/auth',
        component: GuestLayout,
    }
  ],
});

export default router;
