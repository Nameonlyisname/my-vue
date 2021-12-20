<template>
  <div>姓名：{{ name }}</div>
  <button @click="change">打印</button>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "Reactive",
  setup(props) {
    let name = ref("槐诗");

    function change() {
      console.log(name);
      name.value="?????"
    }

    return {
      name,
      change
    };
  },
};
</script>

<style>
</style>