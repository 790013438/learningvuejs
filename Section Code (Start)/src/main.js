import Vue from 'vue'
import App from './App.vue'

const eventBus = new Vue({
  methods: {
    sendChangeAge: function(age) {
      this.$emit('userAgeWasChanged', age);
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})

export {eventBus}
