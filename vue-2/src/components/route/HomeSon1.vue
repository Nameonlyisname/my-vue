<template>
  <div>
    <h5>HomeSon1</h5>
    <ul>
      <li>111111111 <input type="text" /></li>
      <li>111111111 <input type="text" /></li>
      <li>111111111 <input type="text" /></li>
      <li>111111111 <input type="text" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "son1",

  //使用keep-alive有以下俩钩子
  activated() {
    console.log("son1激活");
  },
  deactivated() {
    console.log("son1失活");
  },
};
</script>

<style></style>
