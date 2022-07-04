<template>
  <ScaleBox>
    <div id="app">
      <router-view />
    </div>
  </ScaleBox>
</template>
<script>
import ScaleBox from "./components/common/ScaleBox.vue";
export default {
  components: {
    ScaleBox,
  },
  // data() {
  //   return {};
  // },
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
