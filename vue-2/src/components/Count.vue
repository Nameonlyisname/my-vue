<template>
  <div>
    <h1>当前求和：{{ sum }}</h1>
    <h1>当前求和扩大十倍：{{ bigSum }}</h1>
    <select v-model="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd">和为奇数加一</button>
    <button @click="incrementWait">等等再加</button>
  </div>
</template>

<script>
import { mapState,mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    // ...mapState({
    //   sum: "sum",
    // }),
    ...mapState(["sum"]),
    ...mapGetters(['bigSum'])
  },
  methods: {
    // increment() {
    //   this.$store.commit("INCREMENT", this.n);
    // },
    // decrement() {
    //   this.$store.commit("DECREMENT", this.n);
    // },
    ...mapMutations({
      increment:"INCREMENT",
      decrement:"DECREMENT"
    }),
    
    incrementOdd() {
      this.$store.dispatch("incrementOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("incrementWait", this.n);
    },
  },
  mounted() {},
};
</script>

<style scoped>
</style>