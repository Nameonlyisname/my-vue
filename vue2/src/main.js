import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import store from "./store";
import allMenu from "./menu";

Vue.use(Antd);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
  watch: {
    $route() {},
  },
  beforeCreate() {
    this.$store.commit("admin/menu/setMenu", allMenu);
  },
}).$mount("#app");
