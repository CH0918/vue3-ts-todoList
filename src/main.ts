import { createApp } from 'vue'
import 'element-plus/theme-chalk/dark/css-vars.css'
import App from './App.vue'
import router from './routes'
const app = createApp(App)
app.use(router)
app.mount('#app')
