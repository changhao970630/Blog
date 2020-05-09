import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isCollapse: false,
  },
  mutations: {
    toogleCollapse(state, params) {
      state.isCollapse = params;
    },
  },
  actions: {},
  modules: {
    user,
  },
});
