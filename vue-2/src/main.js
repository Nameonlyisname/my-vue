import Vue from "vue";
import App from "./App.vue"; 
import VueRouter from "vue-router";

import plugins from "./plugins/index";
import store from "./store";
import router from "./router";

Vue.use(plugins);
Vue.use(VueRouter)

Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
  store,
  router,
  beforeCreate() {
    Vue.prototype.$bus = this; //全局事件总线
  },
}).$mount("#app");
