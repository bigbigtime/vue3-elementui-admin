import router from "./index";
// 全局前置守卫
router.beforeEach((to, from) => {
    console.log(to)
})
// 全局后置守卫
router.afterEach((to, from) => {
})
