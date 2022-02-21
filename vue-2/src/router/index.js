import VueRouter from "vue-router";
import store from "../store";

const router= new VueRouter({
  mode:"history",
  routes: [
    {
      name: "about",
      path: "/about",
      component: () => import("../components/route/About.vue"),
    },
    {
      name: "home",
      path: "/home",
      component: () => import("../components/route/Home.vue"),
      children: [
        {
          name: "homeSon1",
          path: "homeSon1",
          component: () => import("../components/route/HomeSon1.vue"),
        },
        {
          name: "homeSon2",
          path: "homeSon2",
          component: () => import("../components/route/HomeSon2.vue"),
          children: [
            {
              name: "detail",
              path: "detail/:data/:title", //params取值必须以此形式
              // path: "detail",//配合第三种写法从query中取值

              // props用于params传参中path中拼接过长
              // 第一种写法 该对象以props形式传给detail组件
              // props:{
              //   data:1,
              //   title:2
              // },

              // 第二种写法  布尔值为真，只能将params参数以props形式传给detail组件
              // props: true,

              // 第三种写法 params和query均能获取
              props: ({ query, params }) => {
                return {
                  data: query.data || params.data,
                  title: query.title || params.title,
                };
              },
              component: () => import("../components/route/Detail.vue"),
            },
          ],
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log(store.state.countStore.sum);
  next();
});

export default router;
