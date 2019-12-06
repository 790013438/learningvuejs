import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.http.options.root = 'https://vuejs-http-61e6e.firebaseio.com';
Vue.http.interceptors.push((request, next)=>{
  console.log(request)
  if (request.method === 'POST') {
    request.method = 'PUT'
  }
  // 真正的生产环境不改变response.body, 可能会打印response.head的值
  next(response => {
    response.json = () => {
      return {message: response.body}
    }
  });
})

new Vue({
  el: '#app',
  render: h => h(App)
})
