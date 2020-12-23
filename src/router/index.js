import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "Login"
  },
  // 登录 
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/account/Login.vue")
  },
  // 后台首页
  {
    path: "/home",
    name: "Home",
    component: () => import("../layout/Index.vue")
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
