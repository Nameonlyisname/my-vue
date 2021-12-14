export default {
  state: {
    mul: 0,
  },
  getters: {},
  actions: {},
  mutations: {
    MULTIPLICATION(state, value) {
      state.mul *= value * 1;
    },
  },
};
