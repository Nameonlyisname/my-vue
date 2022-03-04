<template>
  <div>
    <!-- default-selected-keys绑定数字0 麻了 -->
    <a-menu
      theme="dark"
      mode="inline"
      :default-selected-keys="active"
      :open-keys="openKeys"
      @click="handleClick"
      @openChange="onOpenChange"
    >
      <template v-for="(o, i) in realMenu">
        <a-sub-menu :key="`${i}`" v-if="o.children">
          <span slot="title">
            <a-icon type="home" />
            <span>{{ o.title }}</span>
          </span>
          <template v-for="(c, n) in o.children">
            <a-sub-menu :key="`${i}-${n}`" v-if="c.children">
              <span slot="title">
                <a-icon type="home" />
                <span>{{ c.title }}</span>
              </span>
              <template v-for="(v, s) in c.children">
                <a-menu-item :key="`${i}-${n}-${s}`" v-if="!v.children">
                  <a-icon type="home" />
                  <span>{{ v.title }}</span>
                </a-menu-item>
              </template>
            </a-sub-menu>
            <a-menu-item :key="`${i}-${n}`" v-if="!c.children">
              <a-icon type="home" />
              <span>{{ c.title }}</span>
            </a-menu-item>
          </template>
        </a-sub-menu>
        <a-menu-item :key="`${i}`" v-if="!o.children">
          <a-icon type="home" />
          <span>{{ o.title }}</span>
        </a-menu-item>
      </template>
    </a-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Menu",
  data() {
    return {
      active: ["0"],
      openKeys: [],
    };
  },
  computed: {
    ...mapGetters("admin/menu", ["realMenu"]),
  },
  watch: {
    $route: {
      handler(now) {
        let route = now.fullPath;
        let temps = route.split("/").filter((i) => i);
        let func = (arrs, targets = this.realMenu, res = []) => {
          let num = targets.findIndex((i) => i.name == arrs[0]);
          res.push(num);
          if (arrs.length > 1) {
            let nArrs = arrs.slice(1);
            return func(nArrs, targets[num].children, res);
          }
          return res;
        };
        let res = func(temps);

        this.active = new Array(res.join("-"));
        if (res.length == 2 || res.length == 1) {
          this.openKeys = [res[0] + ""];
        }
        if (res.length == 3) {
          this.openKeys = [res[0] + "-" + res[1], res[0] + ""];
        }
      },
      immediate: true,
    },
  },
  methods: {
    handleClick({ item, key, keyPath }) {
      let temps = (key + "").split("-");
      let func = (arrs, targets = this.realMenu) => {
        let len = arrs.length;
        if (len == 1) {
          return targets[arrs[0]].path;
        } else {
          let newArrs = arrs.slice(1);
          return func(newArrs, targets[arrs[0]].children);
        }
      };
      let path = func(temps);
      this.$route.fullPath != path && this.$router.push(path);
    },

    onOpenChange(openKeys) {
      let latestOpenKey = openKeys.find(
        (key) => this.openKeys.indexOf(key + "") === -1
      );
      if (!latestOpenKey) {
        this.openKeys = [];
      } else {
        if (latestOpenKey[0][0] != openKeys[0][0]) {
          this.openKeys = [latestOpenKey];
        } else {
          this.openKeys = openKeys;
        }
      }
    },
  },
};
</script>

<style>
</style>