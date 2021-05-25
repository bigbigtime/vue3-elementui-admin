import router from "./index";
// cookie
import { getToken } from "@u/cookies";
// 全局前置守卫
router.beforeEach((to, from) => {
    if(!getToken()) {
        console.log(to)
        if(to.name !== "Login") {
            return {
                name: "Login"
            }
        }
    }
})
// 全局后置守卫
router.afterEach((to, from) => {
})
