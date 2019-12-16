import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'

Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    // 如果上次页面到hash fragment, 本次在首页，按浏览器的back，放回上次页面的hash瞄点
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {selector: to.hash};
    }
    return {x:0, y: 0}
  }
})

router.beforeEach((to, from, next) => {
  console.log('Global beforeEach');
  next();
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
