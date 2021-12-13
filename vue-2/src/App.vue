<template>
  <div id="app">
    <div class="slot-list">
      <MySlot1>
        <h1>食物（默认插槽）</h1>
        <ul>
          <li v-for="(food, i) in foods" :key="i">{{ food }}</li>
        </ul>
      </MySlot1>

      <MySlot2>
        <h1 slot="top">车（具名插槽）</h1>
        <ul slot="main">
          <li v-for="(car, i) in cars" :key="i">{{ car }}</li>
        </ul>
        <template v-slot:footer>
          <a href="">模拟按钮1</a>
          <a href="">模拟按钮2</a>
          <a href="">模拟按钮3</a>
        </template>
      </MySlot2>

      <MySlot3>
        <h1 slot="top">电影（作用域插槽）</h1>

        <!-- 基础写法 -->
        <!-- <template slot-scope="myScope">
          {{ myScope }}
          <ul>
            <li v-for="(m, i) in myScope.movies" :key="i">{{ m }}</li>
          </ul>
        </template> -->

        <!-- 结构赋值的写法 -->
        <template slot-scope="{ movies }"> 
          <ul>
            <li v-for="(m, i) in movies" :key="i">{{ m }}</li>
          </ul>
        </template>

        <template v-slot:footer>
          <a href="">模拟按钮1</a>
          <a href="">模拟按钮2</a>
          <a href="">模拟按钮3</a>
        </template>
      </MySlot3>
    </div>
    <hr />
    <FormTable />
    <hr />
    <Parent></Parent>
    <hr />
    <Count></Count>
  </div>
</template>

<script>
import FormTable from "./components/formTable.vue";
import Parent from "./components/Parent.vue";
import MySlot1 from "./components/MySlot/MySlot1.vue"; //默认插槽
import MySlot2 from "./components/MySlot/MySlot2.vue"; //具名插槽
import MySlot3 from "./components/MySlot/MySlot3.vue"; //作用域插槽
import Count from "./components/Count.vue"

export default {
  name: "App",
  components: {
    FormTable,
    Parent,
    MySlot1,
    MySlot2,
    MySlot3,
    Count
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
