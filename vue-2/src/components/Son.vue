<template>
  <div>
    <h1>Son组件</h1>
    <div>
      自己的value:{{ value }}-------------------父组件的value：{{ total }}
    </div>
    <button @click="addValue">+1</button>
    <button @click="changeParentValue">更改父组件值 +1</button>
  </div>
</template>

<script>
export default {
  props: {
    total: Number,
  },
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    addValue() {
      this.value++;
    },
    changeParentValue() {
      let temp = this.total;
      // this.$emit("changeValue", ++temp);

      // 通过事件总线传值
      this.$bus.$emit("changeValue", ++temp);
    },
  },
};
</script>

<style>
</style>