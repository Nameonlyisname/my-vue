<template>
  <h1>Computed</h1>
  <div>姓：<input type="text" v-model="person.first" /></div>
  <div>名：<input type="text" v-model="person.last" /></div>
  <div>姓名：<input type="text" v-model="person.fullName" /></div>
</template>

<script>
import { computed, reactive } from "vue";
export default {
  name: "Computed",
  setup() {
    const person = reactive({
      first: "高",
      last: "文",
    });

    // 适用于 不修改全名的计算属性
    // person.fullName = computed(() => {
    //   return person.first + "&" + person.last;
    // });

    person.fullName = computed({
      set(value) {
        let arrs = value.split("&");
        person.first = arrs[0];
        person.last = arrs[1];
      },
      get() {
        return person.first + "&" + person.last;
      },
    });

    return {
      person,
    };
  },
};
</script>

<style>
</style>