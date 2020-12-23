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
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
