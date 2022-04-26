<template>
  <div>
    <DeepMenu :menuList="menuList"></DeepMenu>
  </div>
</template>

<script>
import DeepMenu from "./deepMenu.vue";
export default {
  components: { DeepMenu },
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
};
</script>

<style>
</style>