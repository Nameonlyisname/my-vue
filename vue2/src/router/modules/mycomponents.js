export default {
  path: "mycomponents",
  name: "Home",
  component: () => import("../../components/common/show.vue"),
  children: [
    {
      path: "deepMenu",
      name: "deepMenu",
      component: () => import("../../components/mycomponents/deepMenu"),
    },
  ],
};
