<template>
  <div>
    <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
      <a-sub-menu v-for="(o, i) in realMenu" :key="i">
        <span slot="title">
          <a-icon type="home" />
          <span>{{ o.title }}</span>
        </span>
        <a-menu-item v-for="(c, n) in o.children" :key="`${i}-${n}`">
          {{ c.title }}
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Menu",
  data() {
    return {};
  },
  computed: {
    ...mapGetters("admin/menu", ["realMenu"]),
  },
};
</script>

<style>
</style>