<template>
  <div id="app">
    <!-- <FormTable />
    <hr /> -->
    <!-- <Parent></Parent>
    <hr /> -->
    <Count></Count> 
    <hr />
    <Route></Route>

    <!-- $attrs传值 -->
    <!-- <Input disabled name="按钮" str="???"></Input> -->
  </div>
</template>

<script>
import FormTable from "./page/FormTable.vue";
import Parent from "./components/Parent.vue";
import MySlot from "./page/MySlot.vue";
import Count from "./page/Count.vue";
import Route from "./page/Route.vue";
import Input from "./components/Input.vue";

export default {
  name: "App",
  components: {
    FormTable,
    Parent,
    Count,
    MySlot,
    Route,
    Input
  },
  data() {
    return {
      foods: ["白菜", "青菜", "蔬菜"],
      cars: ["奔驰", "奥迪", "法拉利"],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}

.slot-list {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
