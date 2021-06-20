import { reactive } from "vue";
import { GetCategory } from "@/api/info";
/** 自定义hook */
export function categoryHook(){
  const infoData = reactive({
    category_options: []
  })
    /** 获取分类 */
  const handlerGetCategory = () => {
    GetCategory().then(response => {
      infoData.category_options = response.data;
    });
  };
  return {
    infoData,
    handlerGetCategory
  };
}