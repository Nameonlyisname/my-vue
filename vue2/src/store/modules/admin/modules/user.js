export default {
  namespaced: true,
  state: {
    state: {
      userInfo: {},
    },
  },
  getters: {
    test(state, getters, vx) {
      console.log(state);
      console.log(getters);
      console.log(vx);
      return state.userInfo
    },
  },
  actions: {
    setUser(context, value) {
      context.commit("SETINFOR", value);
    },
  },
  mutations: {
    SETINFOR(state, value) {
      state.userInfo = value;
    },
  },
};
