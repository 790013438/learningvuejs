<template>
  <div>
    <h1>The Stocks Component</h1>
    <div class="row">
      <AppStocks v-for='stock in stocks' :stock="stock"></AppStocks>
    </div>
  </div>
</template>

<script>
import stock from './Stock.vue'

export default {
  data: function() {
    return {
      stocks: [
        {id: 1, name: 'BW',      price: "110"},
        {id: 2, name: 'Google',  price: "200"},
        {id: 3, name: 'Apple',   price: "250"},
        {id: 4, name: 'Twitter', price: "8"}
      ]
    };
  },
  components: {
    AppStocks: stock
  }
}
</script>

<style>

</style>


