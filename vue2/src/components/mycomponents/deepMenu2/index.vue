<script>
export default {
  data() {
    return {
      menuList: [
        {
          name: "一级菜单",
          children: [
            {
              name: "二级菜单",
              children: [
                {
                  name: "三级菜单",
                  children: [
                    {
                      name: "四级菜单",
                      children: [
                        {
                          name: "五级菜单",
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "三级菜单",
                },
              ],
            },
            {
              name: "二级菜单",
            },
          ],
        },
        {
          name: "一级菜单",
          children: [
            {
              name: "二级菜单",
              children: [
                {
                  name: "三级菜单",
                },
                {
                  name: "三级菜单",
                },
              ],
            },
          ],
        },
      ],
    };
  },

  render: (h) => {
    return h("div", "???");
  },

  methods: {},

  mounted() {},
};
</script>

<style>
</style>