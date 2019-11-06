new Vue({
  el: '#exercise',
  data: {
    effect: false,
    color: '#9f9f9f',
    myClass: 'blue',
    myStyle: {height: '100px',
      'background-color': 'rgb(3, 169, 244)',
      width:'100px'},
    processWidth: 0
  },
  methods: {
    startEffect: function() {
      let vm = this;
      setInterval(function() {
        vm.effect = !vm.effect;
      }, 1000);
    },
    startProgress: function() {
      let vm = this;
      if (vm.processWidth < 100) {
        let int = setInterval(function() {
          vm.processWidth = vm.processWidth + 1
          if (vm.processWidth === 100) {
            clearInterval(int);
          }
        }, 500);
      }
    }
  },
  computed: {
    progress: function() {
      return {width: this.processWidth + '%', height: '32px', backgroundColor: 'red'}
    }
  }
});
