import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入全局样式global.css
import '@/assets/css/global.less';
Vue.config.productionTip = false
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import global_info from '@/assets/data/global'
Vue.prototype.Global = global_info  //引入全局global静态配置数据
import FluidAnima from 'vue-fluid-anima'
// 使用插件
Vue.use(FluidAnima);
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
