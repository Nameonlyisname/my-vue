<template>
  <div class="son">
    <h3>Son组件（孙）</h3>
    <h4>车：{{ car.name }}——车价：{{ car.price }}</h4>
    <Dialog></Dialog>
  </div>
</template>

<script>
import Dialog from "./Dialog.vue";
import { inject } from "vue";
export default {
  name: "Son",
  components: {
    Dialog,
  },
  setup() {
    let car = inject("car");
    return { car };
  },
};
</script>

<style>
.son {
  background: burlywood;
  padding: 10px;
}
</style>