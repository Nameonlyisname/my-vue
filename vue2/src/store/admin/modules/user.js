export default {
  namespaced: true,
  state: {
    userInfo: undefined,
  },
  mutations: {
    setUserInfo(state, value) {
      state.userInfo = value;
    },
  },
};
