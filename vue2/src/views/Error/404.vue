<template>
  <div>404</div>
</template>

<script>
export default {
  name: "NotFound",
  data() {
    return {};
  },
  mounted() {
    console.log(this.$route.params.notFound);
  },
};
</script>

<style>
</style>