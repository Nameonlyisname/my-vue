export default {
  path: "error",
  name: "Error",
  component: () => import("../../views/Error"),
  children: [
    {
      path: "4xx",
      name: "4xx",
      component: () => import("../../views/Error"),
      children:[
        {
          path: "404",
          name: "404",
          component: () => import("../../views/Error/404.vue"),
        },
        {
          path: "403",
          name: "403",
          component: () => import("../../views/Error/403.vue"),
        },
      ]
    },
    {
      path: "500",
      name: "500",
      component: () => import("../../views/Error/500.vue"),
    },
  ],
};
