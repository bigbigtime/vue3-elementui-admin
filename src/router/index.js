import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "Login",
    hidden: true,
    aaa: "",
    bbb:""
  },
  // 登录 
  {
    path: "/login",
    name: "Login",
    hidden: true,
    component: () => import("../views/account/Login.vue")
  },
  // 后台首页
  {
    path: "/home",
    name: "Home",
    meta: {
      title: "控制台",
      icon: "news"
    },
    component: () => import("../layout/Index.vue"),
    children: [
      {
        path: "/console",
        name: "Console",
        meta: {
          title: "首页"
        },
        component: () => import("../views/console/Index.vue"),
      }
    ]
  },
  {
    path: "/news",
    name: "News",
    meta: {
      title: "信息管理",
      icon: "news"
    },
    component: () => import("../layout/Index.vue"),
    children: [
      {
        path: "/newsIndex",
        name: "NewsIndex",
        meta: {
          title: "信息列表"
        },
        component: () => import("../views/info/Index.vue"),
      },
      {
        path: "/newsCategory",
        name: "NewsCategory",
        meta: {
          title: "信息分类"
        },
        component: () => import("../views/info/Category.vue"),
      },
      {
        path: "/newsCategory",
        name: "NewsCategory",
        hidden: true,
        meta: {
          title: "信息分类"
        },
        component: () => import("../views/info/Category.vue"),
      }
    ]
  },
  {
    path: "/user",
    name: "User",
    meta: {
      title: "用户管理",
      icon: "user"
    },
    component: () => import("../layout/Index.vue"),
    children: [
      {
        path: "/userIndex",
        name: "UserIndex",
        meta: {
          title: "用户列表"
        },
        component: () => import("../views/user/Index.vue"),
      }
    ]
  }
    
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
