<template>
  <div>姓名：{{ name }}</div>
  <div>小说：《{{ story.name }}》——主角：{{ story.prot }}</div>
  <button @click="handleLog">打印</button>
  <button @click="changeStory">更改小说信息</button>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "App",
  setup(props) {
    // ref用于基本数据
    //reactive用于对象
    let name = ref("？？？");
    let story = reactive({
      name: "天启预报",
      prot: "槐诗",
    });

    function handleLog() {
      console.log(name, story);
    }

    function changeStory() {
      story.name = "从红月开始";
      story.prot = "单兵";
    }

    return {
      name,
      story,
      handleLog,
      changeStory,
    };
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
