<template>
  <!-- 样式可写父组件内 也可写入子组件 -->
  <div class="slot">
    <slot name="top"></slot>
    <slot :movies="movies" :other="other"
      >使用此组件，插槽不传值时，显示本句话</slot
    >
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: ["泰坦尼克号", "石头门", "哪吒"],
      other: [1, 2, 3, 4],
    };
  },
};
</script>

<style scoped>
.slot {
  width: 300px;
  background: skyblue;
}
.slot h1 {
  text-align: center;
  background: orange;
}</style
>>
