import Vue from "vue";
import Vuex from "vuex";

const state = {
  sum: 0,
};

const getters = {
  bigSum(state) {
    return state.sum * 10
  }
}

const actions = {
  //   increment(context, value) {
  //     context.commit("INCREMENT", value);
  //   },
  //   decrement(context, value) {
  //     context.commit("DECREMENT", value);
  //   },
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
};

const mutations = {
  INCREMENT(state, value) {
    state.sum += value * 1;
  },
  DECREMENT(state, value) {
    state.sum -= value * 1;
  },
};



Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
});