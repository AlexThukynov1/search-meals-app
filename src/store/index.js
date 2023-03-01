import { createStore } from "vuex";
import BasicFetch from "../api";
import axios from "axios";

const store = createStore({
  state: {
    searchedMeals: [],
    mealsByLetter: [],
    mealsByIngredients: [],
  },
  actions: {
    searchMeals({ commit }, keyword) {
      axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`).then(({ data }) => {
        commit("setSearchMeals", data.meals);
      });
    },
    searchMealsByLetter({ commit }, letter) {
      axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`).then(({ data }) => {
        commit("setSearchMealsByLetter", data.meals);
      });
    },
    searchMealsByIngredients({ commit }, ingredient) {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`).then(({ data }) => {
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
