import { $api } from "../plugin/axios";
import store from "./index";

export default {
  namespaced: true,

  state: () => ({
    detail: {},
  }),

  mutations: {
    GET_DETAIL(state, detail) {
      state.detail = detail;
    }
  },

  actions: {
    FETCH_COMIC_DETAIL({ state }, payload) {
      $api.get(`/comics/${payload}`).then(({ data }) => {

        store.commit('comics/GET_DETAIL', data.data.results[0])
      })
    }
  },

}