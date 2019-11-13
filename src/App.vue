<template>
  <div class="container">
    <appNewQuote @addNewQuote="addNewQuote"></appNewQuote>
    <appQuoteGrid :quotes="quotes"></appQuoteGrid>
  </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue'
import NewQuote from './components/NewQuote.vue'

export default {
  data: function() {
    return {
      quotes: ['Just a quote to see something'],
      maxQuotes: 10
    };
  },
  methods: {
    addNewQuote(quote) {
      this.quotes.push(quote);
    }
  },
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote
  }
}
</script>

<style>
</style>
