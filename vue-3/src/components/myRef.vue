<template>
  <input type="text" v-model="keyWord" />
  <h3>{{ keyWord }}</h3>
</template>

<script>
import { customRef } from "vue";
export default {
  name: "myRef",
  setup() {
    function myRef(value, delay) {
      let timer;
      return customRef((track, trigger) => {
        return {
          get() {
            // console.log("读取", value);
            track(); //通知vue追踪对应数据的变化
            return value;
          },
          set(newValue) {
            // console.log("修改了", newValue);
            clearTimeout(timer);
            timer = setTimeout(() => {
              value = newValue;
              trigger(); //通知vue重新解析模板
            }, delay);
          },
        };
      });
    }
    let keyWord = myRef("Hello", 500);

    return { keyWord };
  },
};
</script>

<style>
</style>