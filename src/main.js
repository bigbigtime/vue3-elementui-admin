import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// elementui
import ElementUI from "./plugins/elementui";
// 批量导入svg文件
import "@/js/svg";
// svgicon
import SvgIcon from "@/components/svgIcon/Index.vue";
// 赋值
const app = createApp(App);
app.config.globalProperties.$axios = "11";
app
.use(store)
.use(router)
.use(ElementUI)
.component("svg-icon", SvgIcon)
.mount("#app");
