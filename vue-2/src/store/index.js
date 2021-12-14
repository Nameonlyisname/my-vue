import Vue from "vue";
import Vuex from "vuex";
import countStore from "./modules/module_1"
import mulStore from "./modules/module_2"



Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    countStore: countStore,
    mulStore
  }
});