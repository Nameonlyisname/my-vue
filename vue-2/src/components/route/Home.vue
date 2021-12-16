<template>
  <div>
    <h1>Home组件</h1>
    <router-link class="menu" active-class="active" to="/home/homeSon1"
      >HomeSon1</router-link
    >
    <router-link class="menu" active-class="active" to="/home/homeSon2"
      >HomeSon2</router-link
    >
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.menu {
  display: block;
  font-size: 20px;
  text-decoration: none;
}
.active {
  color: red;
}
</style>
