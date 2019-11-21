import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  bind(el, bind, vnode) {
    el.style.backgroundColor = 'lightgreen'
  }
});
new Vue({
  el: '#app',
  render: h => h(App)
})
