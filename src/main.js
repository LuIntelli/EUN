import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import naive from "naive-ui";
import router from "./Routes";
import { createPinia } from "pinia";
import 'primeicons/primeicons.css'


const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

app.use(naive);
app.use(router);
app.mount("#app");
