import { $api } from "../plugin/axios";
import store from "./index";

export default {
  namespaced: true,

  state: () => ({
    comics: [],
  }),

  getters: {

  },

  mutations: {
    SET_COMICS(state, comics) {
      state.comics = comics
    }
  },

  actions: {
    FETCH_COMICS(state) {
      $api.get('/comics').then(({ data }) => {
        store.commit('comics/SET_COMICS', data.data.results)
      })
    }
  },

}