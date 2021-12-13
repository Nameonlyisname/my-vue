<template>
  <div>
    <h1>当前求和：{{ sum }}</h1>
    <select v-model="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">和为奇数加一</button>
    <button @click="incrementWait">等等再加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    increment() {
      this.sum += this.n * 1;
    },
    decrement() {
      this.sum -= this.n * 1;
    },
    incrementOdd() {
      if (this.sum % 2) {
        this.sum += this.n * 1;
      }
    },
    incrementWait() {
      setTimeout(() => {
        this.sum += this.n * 1;
      }, 1000);
    },
  },
};
</script>

<style scoped>
</style>