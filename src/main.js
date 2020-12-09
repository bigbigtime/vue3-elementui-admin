import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// elementui
import ElementUI from "./plugins/elementui";
// axios
import axios from "axios";
// 赋值
const app = createApp(App);
// 全局应用配置
app.config.globalProperties.$axios = axios;

app.use(store).use(router).use(ElementUI).mount("#app");
