<template>
  <div>
    <h1>WatchEffect</h1>
    <button @click="person.name += '!'">修改姓名</button>
    <button @click="person.job.j1.salary++">涨薪</button>
    <button @click="person.age++">增长年龄</button>
    <button @click="num++">常量累加</button>
    <button @click="str += '?'">字符串累加</button>

    <div>常量：{{ num }}</div>
    <div>字符串：{{ str }}</div>
    <div>姓名：{{ person.name }}</div>
    <div>年龄：{{ person.age }}</div>
    <div>薪资：{{ person.job.j1.salary }}</div>
  </div>
</template>

<script>
import {  reactive, ref, watch,watchEffect } from "vue";
export default {
  name: "WatchEffect",
  setup() {
    let str = ref("字符串");
    let num = ref(0);

    const person = reactive({
      name: "高文",
      age: 18,
      job: {
        j1: {
          salary: 10,
        },
      },
    });

    watchEffect(()=>{
      let s=str.value
      console.log(s);
    })

    
    return { person, str, num };
  },
};
</script>

<style>
</style>