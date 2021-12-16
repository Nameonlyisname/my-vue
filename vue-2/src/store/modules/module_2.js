export default {
  namespaced:true,
  state: {
    mul: 1,
  },
  getters: {},
  actions: {},
  mutations: {
    MULTIPLICATION(state, value) {
      state.mul *= value * 1;
    },
  },
};
