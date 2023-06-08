import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css';
import { Button, Swipe, SwipeItem } from 'vant'

const app = createApp(App)
app.use(store)
app.use(Button)
app.use(Swipe)
app.use(SwipeItem)
app.use(router).mount('#app')