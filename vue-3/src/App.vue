<template>
  <div>{{ name }}</div>
  <div v-for="(o, i) in obj" :key="i">{{ o }}</div>
  <button @click="hello">点击控制台打印</button>
  <button @click="changeName">修改obj中name</button>
</template>

<script>
import { h, ref } from "vue";
export default {
  name: "App",
  components: {},
  setup(props) {
    let name = ref("哈哈");
    let obj = ref({
      name: "?",
      age: 18,
    });

    function hello() {
      console.log(obj);
    }

    function changeName() {
      // console.log(name);
      // console.log(obj);
      name.value = "?????????";
      obj.value.name="0.0"
    }

    return {
      name,
      obj,
      hello,
      changeName,
    };

    // 返回一个函数
    return () => h(<h1>???????????????</h1>);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
