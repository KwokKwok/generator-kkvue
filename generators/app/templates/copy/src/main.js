import { createApp } from 'vue'
import App from './App.vue'
import repo from "./repo";
import router from "./router";
import SvgIcon from "./components/SvgIcon.vue"
import "tailwindcss/tailwind.css"

const app = createApp(App);
app.component("SvgIcon", SvgIcon);

app.use(repo).use(router).mount('#app')