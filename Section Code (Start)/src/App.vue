<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-quote>
          <template v-slot:title>
            <h1>{{quoteTitle}}</h1>
          </template>
          <template v-slot:body>
            <p>A wonderful Quote</p>
          </template>
        </app-quote>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from './components/Quote.vue'

export default {
  data: function() {
    return {
      quoteTitle: 'The Quote Title'
    }
  },
  components: {
    appQuote: Quote
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
