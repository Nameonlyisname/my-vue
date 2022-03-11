import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "../store";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.fullPath == "/login") {
    next();
  } else {
    let userInfo = store.state.admin.user.userInfo;
    if (!userInfo) {
      next({ name: "Login" });
    } else {
      next();
    }
  }
});

export default router;
