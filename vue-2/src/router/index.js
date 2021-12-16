import VueRouter from "vue-router";

export default new VueRouter({
  routes: [
    {
      path: "/about",
      component: () => import("../components/route/About.vue"),
    },
    {
      path: "/home",
      component: () => import("../components/route/Home.vue"),
    },
  ],
});


