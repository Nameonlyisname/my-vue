import home from "./modules/home";
import error from "./modules/error";

const frameIn = [
  {
    path: "/",
    redirect:'home',
    component: () => import("../components/layout"),
    children: [home, error],
  },
];
const frameOut = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login"),
  },
];

const errorPages = [
  {
    path: "*",
    name: "404",
    component: () => import("../views/Error/404.vue"),
  },
];

export const menuList = frameIn;

export default [...frameIn, ...frameOut, ...errorPages];
