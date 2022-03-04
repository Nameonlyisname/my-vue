const pre = "/menu2/";
export default {
  path: "/menu2",
  title: "2",
  access:["admin","user"],
  children: [
    {
      path: `${pre}item1`,
      title: "2-1",
      access:["user"],
    },
    {
      path: `${pre}item2`,
      title: "2-2",
    },
    {
      path: `${pre}item3`,
      title: "2-3",
    },
  ],
};
