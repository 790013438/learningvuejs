<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Build-in Directives</h1>
        <p v-text="'Some Text'"></p>
        <p v-html="'<strong>Some Strong Text</strong>'"></p>
      </div>
    </div>
    <hr/>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Cunstom Directives</h1>
        <p v-highlight:backgroundColor="'lightcoral'">Color this</p>
        <p v-local-highlight:backgroundColor.delay="'lightcoral'">Color this</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    'local-highlight': {
      bind: function(el, binding, vnode) {
        let delay = 0;
        if (binding.modifiers['delay']) {
          delay = 3000;
        }
        setTimeout(()=>{
          if (binding.arg === 'backgroundColor') {
            el.style.backgroundColor = binding.value;
          } else {
            el.style.color = binding.value;
          }
        }, delay);
      }
    }
  }
}
</script>

<style>

</style>
