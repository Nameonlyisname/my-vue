<template>
  <div>
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
</template>

<script>
import MySlot1 from "../components/MySlot/MySlot1.vue"; //默认插槽
import MySlot2 from "../components/MySlot/MySlot2.vue"; //具名插槽
import MySlot3 from "../components/MySlot/MySlot3.vue"; //作用域插槽
export default {
  comments: {
    MySlot1,
    MySlot2,
    MySlot3,
  },
};
</script>

<style></style>
