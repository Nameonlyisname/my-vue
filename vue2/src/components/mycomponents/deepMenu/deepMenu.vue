<template>
  <div class="container">
    <DeepMenuItem :key="index" v-for="(item, index) in menuList">
      <span v-if="!item.children">{{ item.name }}</span>

      <template v-else>
        <span>{{ item.name }}</span>
        <DeepMenu :menuList="item.children"></DeepMenu>
      </template>
    </DeepMenuItem>
  </div>
</template>

<script>
import DeepMenuItem from "./deepMenuItem.vue";
export default {
  name: "DeepMenu",
  components: {
    DeepMenuItem,
  },
  props: ["menuList"],
};
</script>

<style lang="less" scoped>
.container{
  span{
    font-size: 16px;
  }
}
</style>