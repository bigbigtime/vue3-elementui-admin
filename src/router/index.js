import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

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
    meta: {
      title: "控制台",
      icon: "console"
    },
    component: () => import("../layout/Index.vue")
  },
  {
    path: "/news",
    name: "News",
    meta: {
      title: "信息管理",
      icon: "news"
    },
    component: () => import("../layout/Index.vue")
  },
  {
    path: "/user",
    name: "User",
    meta: {
      title: "用户管理",
      icon: "user"
    },
    component: () => import("../layout/Index.vue")
  }
    
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
