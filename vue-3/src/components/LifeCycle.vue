<template>
  <h1>LifeCycle</h1>
  <button @click="num++">常量累加</button>
  <div>常量：{{ num }}</div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "LifeCycle",
  setup() {
    let num = ref("字符串");
    return { num };
  },
};
</script>

<style>
</style>