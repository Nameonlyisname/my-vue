<template>
  <div>标题：{{ name }}</div>
  <div>小说：《{{ story.name }}》——主角：{{ story.prot }}</div>
  <div>小说：<input v-model="story.name" /></div>
  <div>主角姓名：<input v-model="story.prot" /></div>
  <div>计算属性：<input v-model="story.full" /></div>
 
  <button @click="changeStory">更改小说信息</button>
  <button @click="handleHello">触发父组件传递的函数</button>
  <button @click="changeFathData">修改父组件中值</button>
</template>

<script>
import { ref, reactive, computed } from "vue";
export default {
  name: "Demo",
  props: ["data"],
  emits: ["hello"],
  setup(props, context) {
    console.log(props, context, this);
    // ref用于基本数据
    //reactive用于对象
    let name = ref("Demo标题");
    let story = reactive({
      name: "天启预报",
      prot: "槐诗",
    });

    story.full = computed({
      get() {
        return story.name + "-" + story.prot;
      },
      set(value) {
        let arrs = value.split("-");
        story.name = arrs[0] || "";
        story.prot = arrs[1] || "";
      },
    });
 
    function changeStory() {
      story.name = "从红月开始";
      story.prot = "单兵";
    }
    function handleHello() {
      context.emit("hello", "???");
    }
    function changeFathData() {
      props.data.person= "?????";
      props.data.type = "?????";
    }

    return {
      name,
      story,
      changeStory,
      handleHello,
      changeFathData,
    };
  },
};
</script>

<style>
</style>