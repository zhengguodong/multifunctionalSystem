import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { loadAllPlugins } from './plugins'
import {store} from "./store/index"
import "./permission"
import 'element-plus/dist/index.css'
const app=createApp(App).use(router).use(store)
loadAllPlugins(app)
app.mount('#app')
