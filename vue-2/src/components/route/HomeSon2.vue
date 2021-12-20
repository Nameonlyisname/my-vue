<template>
  <div>
    <h5>HomeSon2</h5>
    <ul>
      <li v-for="(o, i) in arrs" :key="i">
        <!-- query传参 （字符串，对象） -->
        <!-- <router-link :to="`/home/homeSon2/detail?title=${o.title}&data=${o.data}`">{{ o.title }}</router-link> -->
        <!-- <router-link :to="{ path: '/home/homeSon2/detail', query: o }">{{
          o.title
        }}</router-link> -->

        <!-- 命名路由 -->
        <!-- <router-link :to="{ name: 'detail', query: o }">{{
          o.title
        }}</router-link> -->

        <!-- params传参（字符串，对象） 不能用path -->
        <!-- <router-link :to="`/home/homeSon2/detail/${o.data}/${o.title}`">{{ o.title }}</router-link> -->
        <router-link :to="{ name: 'detail', params: o }">{{
          o.title
        }}</router-link>
        <button @click="pushShow(o)">push路由</button>
        <button @click="replaceShow(o)">replace路由</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrs: [
        { title: "消息1", data: "1" },
        { title: "消息2", data: "2" },
        { title: "消息3", data: "3" },
      ],
    };
  },
  methods: {
    pushShow(o) {
      // console.log(this.$router);
      this.$router.push({
        name: "detail",
        params: o,
      });
    },
    replaceShow(o) {
      this.$router.replace({
        name: "detail",
        params: o,
      });
    },
  },
};
</script>

<style></style>
