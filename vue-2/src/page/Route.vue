<template>
  <div>
    <h1>Route页面</h1>
    <router-link class="menu"  active-class="active" to="/home">Home</router-link>
    <router-link class="menu" active-class="active" to="/about">About</router-link>
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
.active{
  color: red;
}


</style>
