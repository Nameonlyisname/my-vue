<template>
  <!-- <Computed></Computed> -->

  <!-- <Watch></Watch> -->

  <!-- <WatchEffect></WatchEffect> -->

  <!-- <ToRef></ToRef> -->

  <!-- <MyRef></MyRef> -->

  <!-- <div>
    <button @click="isShow = !isShow">控制LifeCycle显影</button>
    <LifeCycle v-if="isShow"></LifeCycle>
  </div> -->

  <!-- <div>
    <button @click="isShow = !isShow">控制MousePosition显影</button>
    <MousePosition v-if="isShow"></MousePosition>
  </div> -->

  <div class="grdParent">
    <h3>App（祖）</h3>
    <h4>车：{{ car.name }}——车价：{{ car.price }}</h4>
    <Parent></Parent>
  </div>
</template>

<script>
import Computed from "./components/Computed.vue";
import Watch from "./components/Watch.vue";
import WatchEffect from "./components/WatchEffect.vue";
import LifeCycle from "./components/LifeCycle.vue";
import MousePosition from "./components/MousePosition.vue";
import ToRef from "./components/ToRef.vue";
import MyRef from "./components/myRef.vue";
import Parent from "./components/Provide-Inject/Parent.vue";

import { provide, reactive, toRefs } from "vue";
export default {
  name: "App",
  components: {
    Computed,
    Watch,
    WatchEffect,
    LifeCycle,
    MousePosition,
    ToRef,
    MyRef,
    Parent,
  },
  setup() {
    let data = reactive({
      isShow: true,
      car: {
        name: "五菱",
        price: "4w",
      },
    });

    provide("car", data.car);

    return { ...toRefs(data) };
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

.grdParent {
  width: 400px;
  margin: auto;
  background: skyblue;
  padding: 10px;
}
</style>
