import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// elementui
import ElementUI from "./plugins/elementui";
// svgicon
import SvgIcon from "@/components/svgIcon/Index.vue";
// 赋值
const app = createApp(App);
app
.use(store)
.use(router)
.use(ElementUI)
.component("svg-icon", SvgIcon)
.mount("#app");
