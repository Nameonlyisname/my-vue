<template>
  <div>
    <button v-bind="$attrs">{{$attrs.name}}</button>
    <input type="text" :value="$attrs.str" :disabled="$attrs.disabled" />
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$attrs);
  },
};
</script>

<style>
</style>