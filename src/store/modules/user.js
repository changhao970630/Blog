import Cookie from "js-cookie";

export default {
  state: {
    USER_INFO: {},
  },
  mutations: {
    SET_USER(state, params) {
      state.USER_INFO = params;
    },
  },
  actions: {
    handleSaveUserInfo({ commit }, params) {
      localStorage.setItem("user_info", JSON.stringify(params));
      Cookie.set("token", params.token, {
        expires: 7,
      });
      commit("SET_USER", params);
    },
    handleDeleteUserInfo({ commit }, params) {
      localStorage.removeItem("user_info");
      Cookie.remove("token");
      commit("SET_USER", params);
      console.warn("init");
    },
  },
};
