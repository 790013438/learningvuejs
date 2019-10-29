new Vue({
  el: '#exercise',
  data: {
    value: ''
  },
  methods: {
    showAlert: function() {
      alert('clicked');
    },
    changValue: function(event) {
      this.value = event.target.value;
    },
    changValue2: function(event) {
      this.value = event.target.value;
    }
  }
});
