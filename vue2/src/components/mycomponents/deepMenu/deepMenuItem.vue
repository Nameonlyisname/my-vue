<template>
  <div class="item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "DeepMenuItem",
};
</script>

<style lang="less" scoped>
div.item {
  margin: 10px 0;
  padding-left: 20px;
  border-radius: 4px;
  background: skyblue;
  color: #fff;
}
</style>