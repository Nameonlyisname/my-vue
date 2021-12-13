<template>
  <div class="slot">
    <slot name="top">头部（默认显示汉字）</slot>
    <slot name="main">主体（默认显示汉字）</slot>
    <slot name="footer">尾（默认显示汉字）</slot>
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
.slot a {
  display: inline-block;
  margin-left: 10px;
}
</style>> 