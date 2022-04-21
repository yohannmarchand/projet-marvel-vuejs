import { $api } from "../plugin/axios";
import store from "./index";

export default {
  namespaced: true,

  state: () => ({
    comics: [],
  }),

  getters: {
    GET_COMICS_BY_SEARCH: (state) => (value) => {
      return state.comics.filter(comic => comic.title.toLowerCase().includes(value.toLowerCase()))
    }
  },

  mutations: {
    SET_COMICS(state, comics) {
      state.comics = comics
    }
  },

  actions: {
    FETCH_COMICS() {
      $api.get('/comics').then(({ data }) => {
        store.commit('comics/SET_COMICS', data.data.results)
      })
    }
  },

}