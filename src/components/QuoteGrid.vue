<template>
  <div class="row">
    <appQuote
      @click.native="deleteQuote(index)"
      v-for="(quote, index) in quotes">{{quote}}</appQuote>
  </div>
</template>

<script>
import Quote from './Quote.vue'

export default {
  props: ['quotes'],
  methods: {
    deleteQuote: function(index) {
      this.$emit('deleteQuote', index);
    }
  },
  components: {
    appQuote: Quote
  }
}
</script>
