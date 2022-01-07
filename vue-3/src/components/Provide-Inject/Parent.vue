<template>
  <div class="parent">
    <h3>Parent组件（父）</h3>
    <h4>车：{{ car.name }}——车价：{{ car.price }}</h4>
    <Son></Son>
  </div>
</template>

<script>
import Son from "./Son.vue";
import { inject } from "vue";
export default {
  name: "Parent",
  components: {
    Son,
  },
  setup() {
    let car = inject("car");
    return { car };
  },
};
</script>

<style>
.parent {
  background: pink;
  padding: 10px;
}
</style>