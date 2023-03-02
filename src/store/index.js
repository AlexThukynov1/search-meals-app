import { createStore } from "vuex";
import BasicFetch from "../api";
import axios from "axios";

const store = createStore({
  state: {
    searchedMeals: [],
    mealsByLetter: [],
    mealsByIngredients: [],
    isLoading: false
  },
  actions: {
    searchMeals({ commit }, keyword) {
      commit('loadingTogle', true)
      axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`).then(({ data }) => {
        commit("setSearchMeals", data.meals);
        commit('loadingTogle', false)
      });
    },
    searchMealsByLetter({ commit }, letter) {
      commit('loadingTogle', true)
      axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`).then(({ data }) => {
        commit("setSearchMealsByLetter", data.meals);
        commit('loadingTogle', false)
      });
    },
    searchMealsByIngredients({ commit }, ingredient) {
      commit('loadingTogle', true)
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`).then(({ data }) => {
        commit("setSearchMealsByIngredients", data.meals);
        commit('loadingTogle', false)
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
    loadingTogle(state, value) {
      state.isLoading = value
    }
  },
  modules: {},
});

export default store;
