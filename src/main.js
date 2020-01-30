import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routesArr} from './routes.js'

Vue.use(VueRouter)
const router = new VueRouter({routes: routesArr})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
