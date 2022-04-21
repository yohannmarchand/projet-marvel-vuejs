import { $api } from "../plugin/axios";
import store from "./index";

export default {
  namespaced: true,

  state: () => ({
    comics: [],
    detail: {},
    pagination: 0,
    limit: 20,
  }),

  getters: {
    GET_COMICS_BY_SEARCH: (state) => (value) => {
      return state.comics.filter(comic => comic.title.toLowerCase().includes(value.toLowerCase()))
    }
  },

  mutations: {
    ADD_COMICS(state, comics) {
      comics.forEach(comic => state.comics.push(comic))
    },

    SET_PAGINATION(state, pagination) {
      state.pagination = pagination
    },

    GET_DETAIL(state, detail) {
      state.detail = detail;
    }
  },

  actions: {
    FETCH_COMICS() {
      $api.get('/comics').then(({ data }) => {
        store.commit('comics/SET_PAGINATION', data.data.count / data.data.limit)
        store.commit('comics/ADD_COMICS', data.data.results)
      })
    },

    FETCH_NEXT_PAGE({ state }) {
      $api.get(`/comics?offset=${state.pagination * state.limit}`).then(({ data }) => {
        store.commit('comics/SET_PAGINATION', data.data.count / data.data.limit)
        store.commit('comics/ADD_COMICS', data.data.results)
      })
    },

    FETCH_COMIC_DETAIL({ state }, payload) {
      $api.get(`/comics/${payload}`).then(({ data }) => {

        store.commit('comics/GET_DETAIL', data.data.results[0])
      })
    }
  },

}