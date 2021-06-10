import instance from "@/utils/request";  // 引入拦截器
/** 一级分类添加 */
export function firstCategoryAdd(data = {}){
    return instance.request({
        method: "post",
        url: "/news/addFirstCategory/",
        data
    })
}