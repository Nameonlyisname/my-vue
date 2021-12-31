<template>
  <h1>鼠标位置：x：{{ position.x }}——y：{{ position.y }}</h1>
</template>

<script>
import usePosition from "../hooks/usePosition";
export default {
  name: "MousePosition",
  setup() {
    let position = usePosition();

    return { position };
  },
};
</script>

<style>
</style>