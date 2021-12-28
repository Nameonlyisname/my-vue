<template>
  <!-- <Computed></Computed> -->
  <!-- <Watch></Watch> -->
  <!-- <WatchEffect></WatchEffect> -->
  <!-- <div>
    <button @click="isShow = !isShow">控制LifeCycle显影</button>
    <LifeCycle v-if="isShow"></LifeCycle>
  </div> -->
  <div>
    <button @click="isShow = !isShow">控制MousePosition显影</button>
    <MousePosition v-if="isShow"></MousePosition>
  </div>
  
</template>

<script>
import Computed from "./components/Computed.vue";
import Watch from "./components/Watch.vue";
import WatchEffect from "./components/WatchEffect.vue";
import LifeCycle from "./components/LifeCycle.vue";
import MousePosition from "./components/MousePosition.vue";

import { ref } from "vue";
export default {
  name: "App",
  components: {
    Computed,
    Watch,
    WatchEffect,
    LifeCycle,
    MousePosition,
  },
  setup() {
    let isShow = ref(true);

    return { isShow };
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
