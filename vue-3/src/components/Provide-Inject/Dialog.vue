<template>
  <button @click="isShow = true">弹框</button>

  <!-- 将弹框组件放置在body或放置在app内 -->
  <!-- <teleport to="body"> -->
  <teleport to="#app">
    <div v-if="isShow" class="mask">
      <div class="dialog">
        <h1>弹框内容</h1>
        <button @click="isShow = false">关闭弹框</button>
      </div>
    </div>
  </teleport>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Dialog",
  setup() {
    let isShow = ref(false);
    return { isShow };
  },
};
</script>

<style>
.mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}

.dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  background: gold;
  text-align: center;
}
</style>