export default {
  state: {
    sum: 0,
  },
  getters: {
    bigSum(state) {
      return state.sum * 10;
    },
  },
  actions: {
    incrementOdd(context, value) {
      if (context.state.sum % 2) {
        context.commit("INCREMENT", value);
      }
    },
    incrementWait(context, value) {
      setTimeout(() => {
        context.commit("INCREMENT", value);
      }, 1000);
    },
  },
  mutations: {
    INCREMENT(state, value) {
      state.sum += value * 1;
    },
    DECREMENT(state, value) {
      state.sum -= value * 1;
    },
  },
};
