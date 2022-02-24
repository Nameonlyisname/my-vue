<template>
  <a-layout class="layout">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="title">admin</div>
      <div class="user">
        <img :src="url" alt="用户头像" />
        <p>欢迎，{{ userInfo.name }}</p>
        <p>{{test}}</p>
      </div>
      <!-- <Menu></Menu> -->
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { mapState,mapGetters } from "vuex";
import Menu from "./menu";
export default {
  name: "Layout",
  components:{
    Menu
  },
  data() {
    return {
      collapsed: false,
    };
  },
  computed: {
    ...mapState("admin/user", ["userInfo"]),
    ...mapGetters("admin/user",["test"]),
    url() {
      return require("@/assets/" + this.userInfo.url);
    },
  },
};
</script>
<style lang="less" scoped>
.layout {
  width: 100%;
  height: 100%;
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }
  .title {
    font-size: 16px;
    color: white;
    text-align: center;
    line-height: 50px;
  }
  .user {
    color: white;
    text-align: center;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    p {
      margin: 5px;
    }
  }
}
</style>
