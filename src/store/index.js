import { createStore } from "vuex";
import BasicFetch from "../api";

const store = createStore({
  state: {
    searchedMeals: [],
    mealsByLetter: [],
    mealsByIngredients: [],
  },
  actions: {
    searchMeals({ commit }, keyword) {
      BasicFetch.get(`search.php?s=${keyword}`).then(({ data }) => {
        commit("setSearchMeals", data.meals);
      });
    },
    searchMealsByLetter({ commit }, letter) {
      BasicFetch.get(`search.php?f=${letter}`).then(({ data }) => {
        commit("setSearchMealsByLetter", data.meals);
      });
    },
    searchMealsByIngredients({ commit }, ingredient) {
      BasicFetch.get(`filter.php?i=${ingredient}`).then(({ data }) => {
        commit("setSearchMealsByIngredients", data.meals);
      });
    },
  },
  getters: {},
  mutations: {
    setSearchMeals(state, meals) {
      state.searchedMeals = meals || [];
    },
    setSearchMealsByLetter(state, meals) {
      state.mealsByLetter = meals || [];
    },
    setSearchMealsByIngredients(state, meals) {
      state.mealsByIngredients = meals || [];
    },
  },
  modules: {},
});

export default store;
