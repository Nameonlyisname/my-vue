<template>
  <div>
    <h1>Watch</h1>
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
import { reactive, ref, watch } from "vue";
export default {
  name: "Watch",
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

    // // 监听一个基本数据
    // watch(str,(now,old)=>{
    //     console.log(now,old);
    // })

    // // 监听多个基本数据
    // watch(
    //   [str, num],
    //   (now, old) => {
    //     console.log(now, old);
    //   },
    //   { immediate: true }
    // );

    // // 监听reactive定义的对象时 now与old始终相等 设置deep无效(强制为true)
    // watch(
    //   person,
    //   (now, old) => {
    //     console.log(now === old);
    //     console.log(now, old);
    //   },
    //   { deep: false }
    // );

    // // 监听对象中多个属性  new old能正确记录
    // watch([() => person.name, () => person.age], (now, old) => {
    //   console.log(now, old);
    // });

    // // 监听reactive定义的对象中某个基本类型属性  new old能正确记录
    // watch(
    //   () => person.job.j1.salary,
    //   (now, old) => {
    //     console.log(now, old);
    //   }
    // );

    // 监听reactive定义的对象中某个对象  now与old始终相等 设置deep有效
    // watch(
    //   () => person.job,
    //   (now, old) => {
    //     console.log(now, old);
    //   },
    //   { deep: false }
    // );
    watch(
      () => person.job.j1,
      (now, old) => {
        console.log(now, old);
      },
      { deep: false }
    );

    
    return { person, str, num };
  },
};
</script>

<style>
</style>