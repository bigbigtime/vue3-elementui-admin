import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// elementui
import { ElButton } from 'element-plus'

createApp(App)
  .use(store)
  .use(router)
  .use(ElButton)
  .mount("#app");
