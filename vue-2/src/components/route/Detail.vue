<template>
  <ul>
    <!-- <li>消息：{{ $route.query.data }}</li>
    <li>消息标题：{{ $route.query.title }}</li> -->

    <!-- <li>消息：{{$route.params.data}}</li>
      <li>消息标题：{{$route.params.title}}</li> -->

    <!-- 使用路由props -->
    <li>消息：{{ data }}</li>
    <li>消息标题：{{ title }}</li>
  </ul>
</template>

<script>
export default {
  props: ["data", "title"], //配套路由中的props
  mounted() {
    console.log(this.$route); 
  },
};
</script>

<style></style>
