import Vue from 'vue'
import App from './App.vue'

// 完整引入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 引入VueRouter
import VueRouter from 'vue-router'
// 引入路由器
import router from './router'

// 使用路由
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
