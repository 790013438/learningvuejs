<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{text | toUpperCase | to-lowercase}}</p>
        <hr/>
        <ul>
          <input v-model="filter"/>
          <li v-for="fruit in fruitesFiltered">{{fruit}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      text: 'Hello there!',
      filter: '',
      fruits: ['Apple', 'Blanana', 'Orange', 'Pineappble']
    };
  },
  filters: {
    toUpperCase: function(value) {
      return value.toUpperCase();
    }
  },
  computed: {
    fruitesFiltered: function() {
      return this.fruits.filter((item) => {
        let regExp = new RegExp(this.filter, 'gi');
        return regExp.test(item);
      });
    }
  }
}
</script>

<style>

</style>
