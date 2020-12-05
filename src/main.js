import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// elementui
import ElementUI from "./plugins/elementui";

createApp(App)
  .use(store)
  .use(router)
  .use(ElementUI)
  .mount("#app");
