<template>
  <div>{{ name }}</div>
  <div>{{ age }}</div>
  <div>{{ job.j1.salary }}</div>
  <button @click="age++">加年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import { toRef, toRefs,reactive } from "@vue/reactivity";
export default {
    name:"ToRef",
  setup() {
    const person = reactive({
      name: "高文",
      age: 18,
      job: {
        j1: {
          salary: 10,
        },
      },
    }); 
    // return {
    //   name: toRef(person,"name"),
    //   age: toRef(person,"age"),
    //   job: toRef(person,"job"),
    // };
    return { ...toRefs(person) };
  },
};
</script>

<style>
</style>