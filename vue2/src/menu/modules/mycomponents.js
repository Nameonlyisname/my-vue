const pre = "/mycomponents/";
export default {
  path: "/mycomponents",
  name: "mycomponents",
  title: "封装组件",
  children: [
    { path: `${pre}deepMenu`, name: "deepMenu", title: "嵌套菜单(template)" },
    { path: `${pre}deepMenu2`, name: "deepMenu2", title: "嵌套菜单(render)" },
  ],
};
