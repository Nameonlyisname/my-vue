<template>
  <h1>鼠标位置：x：{{ position.x }}——y：{{ position.y }}</h1>
</template>

<script>
import { onBeforeUnmount, onMounted, reactive } from "vue";
export default {
  name: "MousePosition",
  setup() {
    let position = reactive({
      x: 0,
      y: 0,
    });

    function savePoint(e) {
      console.log(e.pageX, e.pageY);
      position.x = e.pageX;
      position.y = e.pageY;
    }
    onMounted(() => {
      window.addEventListener("click", savePoint);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("click", savePoint);
    });

    return { position };
  },
};
</script>

<style>
</style>