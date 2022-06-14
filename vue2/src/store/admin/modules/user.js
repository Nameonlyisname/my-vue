export default {
  namespaced: true,
  state: {
    userInfo: JSON.parse(localStorage.getItem("userInfo")) || undefined,
  },
  mutations: {
    setUserInfo(state, value) {
      localStorage.setItem("userInfo", JSON.stringify(value));
      state.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    },
  },
};
