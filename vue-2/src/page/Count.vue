<template>
  <div>
    <h1>当前求和：{{ sum }}</h1>
    <h1>乘{{n}}：{{ mul }}</h1>
    <select v-model="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">和为奇数加一</button>
    <button @click="incrementWait(n)">等等再加</button>
    <button @click="multiplication(n)">累乘{{n}}</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
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
    ...mapState("countStore", ["sum"]),
    ...mapState("mulStore", ["mul"]),
  },
  methods: {
    // increment() {
    //   this.$store.commit("INCREMENT", this.n);
    // },
    // decrement() {
    //   this.$store.commit("DECREMENT", this.n);
    // },
    // ...mapMutations({
    //   increment:"INCREMENT",
    //   decrement:"DECREMENT"
    // }),
    ...mapMutations("countStore", {
      increment: "INCREMENT",
      decrement: "DECREMENT",
    }),
    ...mapMutations("mulStore", { multiplication: "MULTIPLICATION" }),

    // incrementOdd() {
    //   this.$store.dispatch("incrementOdd", this.n);
    // },
    // incrementWait() {
    //   this.$store.dispatch("incrementWait", this.n);
    // },
    // ...mapActions(["incrementOdd","incrementWait"])
    ...mapActions("countStore", ["incrementOdd", "incrementWait"]),
  },
  mounted() {
    console.log(this.$store);
  },
};
</script>

<style scoped></style>
