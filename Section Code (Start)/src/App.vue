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
        <p v-local-highlight:backgroundColor.blink="{mainColor: 'lightcoral', secondColor: 'green', delay: 500}">Local Color</p>
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
        if (binding.modifiers['blink']) {
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currColor = mainColor;
          setInterval(()=>{
            currColor === mainColor ? currColor = secondColor : currColor = mainColor;
            setTimeout(()=>{
              if (binding.arg === 'backgroundColor') {
                el.style.backgroundColor = currColor;
              } else {
                el.style.color = currColor;
              }
            }, delay);
          }, binding.value.delay);
        }
        setTimeout(()=>{
          if (binding.arg === 'backgroundColor') {
            el.style.backgroundColor = binding.value.mainColor;
          } else {
            el.style.color = binding.value.secondColor;
          }
        }, delay);
      }
    }
  }
}
</script>

<style>

</style>
