import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
require('./mock')
// 引入全局样式global.css
import '@/assets/css/global.less';
// 引入插件
import FluidAnima from './lib/fluid/lib'
// 使用插件
Vue.use(FluidAnima);
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
                                    