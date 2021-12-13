import Vue from "vue";
import App from "./App.vue"; 

import plugins from "./plugins/index";
import store from "./store";

Vue.use(plugins);

Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus = this; //全局事件总线
  },
}).$mount("#app");
