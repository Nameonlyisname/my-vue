const frameIn = [
  {
    path: "/",
    component: () => import("../components/layout"),
    children: [
      {
        path: "/home",
        name: "Home",
        meta: {
          title: "首页",
        },
        component: () => import("../views/Home"),
      },
    ],
  },
];
const frameOut = [
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
    },
    component: () => import("../views/Login"),
  },
];

const errorPages = [
  {
    path: "*",
    name: "404",
    meta: {
      title: "404",
    },
    component: () => import("../views/Error/404.vue"),
  },
];

export { frameIn };

export default [...frameIn, ...frameOut, ...errorPages];