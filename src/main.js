import { createApp } from "vue";
import App from "./frontend/App.vue";
import router from "@/router/index"

const app = createApp(App).use(router);

app.mount("#app");
