<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <button type="button" @click="count++">count is: {{ count }}</button>

  <div class="box">
    <div class="box2"></div>
  </div>
</template>

<style lang="less" scoped>
a {
  color: #42b983;
}

.box {
  width: 100px;
  height: 100px;
  margin: auto;
  background: red;
  .box2 {
    width: 50px;
    height: 50px;
    margin: auto;
    background: skyblue;
  }
}
</style>
