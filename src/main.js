import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './plugins/element.js'
// 导入全局样式
import './assets/css/global.css'
// 导入首页字体图标
import './assets/font/iconfont.css'
import './assets/font//HomeFont/iconfont.css'
import './assets/js/global'
import router from './router'

Vue.config.productionTip = false


new Vue({
  router, 
  store,
  render: h => h(App)
}).$mount('#app')
