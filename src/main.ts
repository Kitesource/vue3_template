import { createApp } from 'vue'

import router from './router'
import pinia from './store'
import { i18n } from './i18n'
import App from './App.vue'
import registerVueEcharts from '@/plugins/vueEchartPlugin';
import '@/style/index.scss' // 引入UI库样式
import 'virtual:svg-icons-register' // svg图标插件

const app = createApp(App)

app.use(router).use(i18n).use(pinia)
registerVueEcharts(app)

app.mount('#app')
