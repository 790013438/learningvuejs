<template>
  <div class="row col-sm-offset-2 col-sm-8 col-xs-12">
    <div class="text-center alert alert-success">
      <h1>That's Correct!</h1>
      <hr/>
      <div class="text-center">
        <button @click="onContinue"
           class="btn btn-primary"
           style="margin: 10px">Next Question</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:  {
    onContinue: function() {
      this.$emit('continue', 0);
    }
  }
}
</script>
