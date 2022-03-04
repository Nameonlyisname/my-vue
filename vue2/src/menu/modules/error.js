const pre = "/error/";
export default {
  path: "/error",
  name: "error",
  title: "错误界面",
  children: [
    {
      path: `${pre}4xx`,
      name: "4xx",
      title: "4xx",
      children: [
        { path: `${pre}4xx/404`, name: "404", title: "404" },
        { path: `${pre}4xx/403`, name: "403", title: "403" },
      ],
    },
    { path: `${pre}500`, name: "500", title: "500" },
  ],
};
