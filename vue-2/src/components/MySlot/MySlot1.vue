<template>
  <!-- 样式可写父组件内 也可写入子组件 -->
  <div class="slot">
    <slot>使用此组件，插槽不传值时，显示本句话</slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.slot {
  width: 300px;
  background: skyblue;
}
.slot h1 {
  text-align: center;
  background: orange;
}
</style>> 