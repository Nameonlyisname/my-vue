// 自定义hooks 和v2中mixin相似
import { onBeforeUnmount, onMounted, reactive } from "vue";
export default function () {
  let position = reactive({
    x: 0,
    y: 0,
  });

  function savePoint(e) {
    console.log(e.pageX, e.pageY);
    position.x = e.pageX;
    position.y = e.pageY;
  }
  onMounted(() => {
    window.addEventListener("click", savePoint);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("click", savePoint);
  });

  return position;
}
