const pre = "/menu2/";
export default {
  path: "/menu2",
  title: "一级菜单2",
  header: "home",
  access:["admin","user"],
  children: [
    {
      path: `${pre}item1`,
      title: "二级菜单1",
      access:["user"],
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
