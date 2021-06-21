import instance from "@/utils/request";  // 引入拦截器
/** 获取验证码 */
export function GetCode(data = {}){
    return instance.request({
        method: "post",
        url: "/getCode/",
        data
    })
}

/** http 状态码异常演示接口 */
export function ErrorHttp(data = {}){
    return instance.request({
        method: "post",
        url: "/error/",
        data
    })
}


/** 获取七牛云token */
export function GetQininToken(data = {}){
    return instance.request({
        method: "post",
        url: "/uploadImgToken/",
        data
    })
}
    