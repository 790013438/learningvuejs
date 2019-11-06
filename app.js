let data = {
  title: 'The VueJS Instance',
  showParagraph: false
}

let vm1 = new Vue({
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});
vm1.newProp = 'obb'
console.log(data === vm1.$data);
vm1.$mount('#app1');
vm1.$refs.heading.innerHTML = 'Wow';

setInterval(function() {
  vm1.title = 'Changed by timer';
  vm1.show();
}, 3000);

let vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The second Instance'
  },
  methods: {
    changeVue1: function() {
      vm1.title = 'Chaned by Vue 2';
      this.$refs.myButton.innerHTML = 'test';
    }
  }
});

let vm3 = new Vue({
  template: '<h1>Hello</h1>'
});

//vm3.$mount('#app3');
vm3.$mount();
document.getElementById('app3').appendChild(vm3.$el);
