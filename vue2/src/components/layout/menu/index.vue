<template>
  <div>
    <a-menu mode="inline" :default-selected-keys="['1']">
      <a-menu-item v-for="(o, i) in menu.children" :key="i">
        <span>{{ o.meta.title }}</span>
      </a-menu-item>

      <!-- <a-menu-item key="1">
        <a-icon type="user" />
        <span>nav 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="video-camera" />
        <span>nav 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="upload" />
        <span>nav 3</span>
      </a-menu-item> -->
    </a-menu>
  </div>
</template>

<script>

export default {
  name: "Menu",
  data() {
    return {
      
    };
  },
  computed: {
    
  },
};
</script>

<style>
</style>