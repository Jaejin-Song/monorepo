import { createApp } from "vue";
import App from "./App.vue";

import { install } from ".";
import "./assets/index.scss";

const app = createApp(App);

app.use(install);
app.mount("#app");
