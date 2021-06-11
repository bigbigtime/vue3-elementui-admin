import instance from "@/utils/request";  // 引入拦截器
/** 一级分类添加 */
export function firstCategoryAdd(data = {}){
    return instance.request({
        method: "post",
        url: "/news/addFirstCategory/",
        data
    })
}

/** 获取分类 */
export function GetCategory(data = {}){
    return instance.request({
        method: "post",
        url: "/news/getCategoryAll/",
        data
    })
}

/** 子级分类添加 */
export function ChildCategoryAdd(data = {}){
    return instance.request({
        method: "post",
        url: "/news/addChildrenCategory/",
        data
    })
}