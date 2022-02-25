const pre = "/menu1/";
export default {
  path: "/menu1",
  title: "一级菜单1",
  header: "home",
  children: [
    {
      path: `${pre}item1`,
      title: "二级菜单1",
    },
    {
      path: `${pre}item2`,
      title: "二级菜单2",
    },
    {
      path: `${pre}item2`,
      title: "二级菜单3",
    },
  ],
};
