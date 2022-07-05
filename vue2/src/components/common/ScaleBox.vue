<template>
  <div
    class="ScaleBox"
    ref="ScaleBox"
    :style="{
      width: width + 'px',
      height: height + 'px',
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ScaleBox",
  props: {},
  data() {
    return {
      scale: 0,
      width: 1920,
      height: 937,
    };
  },
  mounted() {
    this.setScale();
    window.addEventListener("resize", this.debounce(this.setScale));
  },
  methods: {
    getScale() {
      // 固定好16：9的宽高比，计算出最合适的缩放比
      const { width, height } = this;
      const ww = window.innerWidth / width;
      const wh = window.innerHeight / height;
      return ww < wh ? ww : wh;
    },
    setScale() {
      // 获取到缩放比例，设置它
      this.scale = this.getScale();
      if (this.$refs.ScaleBox) {
        this.$refs.ScaleBox.style.transform = `scale:(${this.scale})`;
      }
    },
    debounce(fn, delay = 500) {
      let timer;
      return function () {
        const th = this;
        const args = arguments;
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(function () {
          timer = null;
          fn.apply(th, args);
        }, delay);
      };
    },
  },
};
</script>

<style lang="less" scoped>
@defaultScale: 1;
.ScaleBox {
  transform: scale(@defaultScale);
  display: flex;
  flex-direction: column;
  transform-origin: center;
  z-index: 999;
}
</style>