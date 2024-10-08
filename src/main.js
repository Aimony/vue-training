/*
 * @Author: Aimony
 * @Date: 2024-09-24 10:57:32
 * @LastEditors: Aimony
 * @FilePath: \vue-training\src\main.js
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Elemennt-Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 全局注册图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// vue-router
import router from "./router/index.js";

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.use(ElementPlus)
app.mount('#app')
