import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css'
import getVant from './plugins/index,js'
const app = createApp(App)
app.use(store)
app.use(router).mount('#app')