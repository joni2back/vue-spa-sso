import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuth: false,
  },
  mutations: {
    isAuth(state, mode) {
      state.isAuth = mode;
    }
  },
  actions: {
    updateAuthStatus(store, token) {
      store.commit('isAuth', !!token);
      if (token) {
        return localStorage.access_token = token;
      }
      localStorage.removeItem('access_token');
    }
  },
  modules: {},
});
