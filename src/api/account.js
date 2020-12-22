import instance from "@/utils/request";  // 引入拦截器
/** 注册 */
export function Register(data = {}){
    return instance.request({
        method: "post",
        url: "/register/",
        data
    })
}
    