<template>
  <div>
    <h1>Parent组件：</h1>
    <div>{{ value }}</div>
    <button @click="addValue">+1</button>

    <!-- 通过绑定事件 子组件传值给父组件 -->
    <!-- <Son :total="value" @changeValue="changeValue"></Son> -->

    <!-- 通过ref配合$on 子组件传值给父组件 -->
    <!-- <Son :total="value" ref="son"></Son> -->

    <!-- 通过事件总线传值 -->
    <Son :total="value"></Son>
  </div>
</template>

<script>
import Son from "./Son.vue";

export default {
  name: "What", //修改在开发者工具中标签名字
  components: {
    Son,
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
    // //通过绑定事件 子组件传值给父组件
    // changeValue(e) {
    //   this.value = e;
    // },
  },

  mounted() {
    // //通过ref配合$on 子组件传值给父组件
    // this.$refs.son.$on("changeValue", (e) => {
    //   this.value = e;
    // });

    // 通过事件总线传值
    this.$bus.$on("changeValue", (e) => {
      this.value = e;
    });
  },
  beforeDestroy() {
    // 通过事件总线传值 组件销毁时记得清理
    this.$bus.$off("changeValue");
  },
};
</script>

<style>
</style>