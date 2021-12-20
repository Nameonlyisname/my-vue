<template>
  <Reactive></Reactive>
</template>

<script>
import Reactive from "./components/Reactive.vue";
export default {
  name: "App",
  component: {
    Reactive,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
