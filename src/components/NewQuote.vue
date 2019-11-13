<template>
  <div class="row">
    <form>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <textarea class="form-control" v-model="quote" rows="3"></textarea>
      </div>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <button class="btn btn-primary" @click.prevent="addNewQuote">Add New Quote</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      quote: ''
    };
  },
  methods: {
    addNewQuote: function() {
      this.$emit('addNewQuote', this.quote);
      this.quote = '';
    }
  }
}
</script>
