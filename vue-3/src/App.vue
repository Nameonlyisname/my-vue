<template> 
  <!-- <Computed></Computed> -->
  <!-- <Watch></Watch> -->
  <WatchEffect></WatchEffect>
</template>

<script>  
import Computed from "./components/Computed.vue";
import Watch from "./components/Watch.vue";
import WatchEffect from "./components/WatchEffect.vue";

export default {
  name: "App",
  components: { 
    Computed,
    Watch,
    WatchEffect
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
