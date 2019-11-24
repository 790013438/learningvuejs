<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives Exercise</h1>
        <!-- Exercise -->
        <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
        <button v-myon:click="clicked" class="btn btn-primary">Custom click</button>
        <hr/>
        <div class="col-xs-4" style="height:140px; background-color: lightcoral;"
          v-myon:mouseenter="mouseenter"
          v-myon:mouseleave="mouseleave"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    myon: {
      bind: function(el, binding, vnode) {
        const eventType = binding.arg;
        const fn = binding.value
        el.addEventListener(eventType, fn);
      }
    }
  },
  methods: {
    clicked: function() {
      alert('I was clicked');
    },
    mouseenter: function() {
      console.log('mouse enetered');
    },
    mouseleave: function() {
      console.log('mouse leave');
    }
  }
}
</script>

<style>
</style>
