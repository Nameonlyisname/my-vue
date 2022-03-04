const pre = "/menu1/";
export default {
  path: "/menu1",
  name: "menu1",
  title: "1",
  children: [
    {
      path: `${pre}item1`,
      name: "item1",
      title: "1-1",
      children: [
        {
          path: `${pre}item1/i1`,
          title: "1-1-1",
        },
        {
          path: `${pre}item1/i2`,
          title: "1-1-2",
        },
      ],
    },
    {
      path: `${pre}item2`,
      name: "item2",
      title: "1-2",
      access: ["user"],
    },
    {
      path: `${pre}item3`,
      name: "item3",
      title: "1-3",
    },
  ],
};
