import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

// 全局注册组件component
Vue.component('app_servers', Home)

new Vue({
  el: '#app',
  // 使用模板component App.vue
  render: h => h(App)
})
