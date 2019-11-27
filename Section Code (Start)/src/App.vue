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
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
import List from './List.vue'
import {fruitMixin} from './fruitMixin.js'

export default {
  data: function() {
    return {
      text: 'Hello there!'
    };
  },
  filters: {
    toUpperCase: function(value) {
      return value.toUpperCase();
    }
  },
  mixins: [fruitMixin],
  components: {
    'app-list': List
  }
}
</script>

<style>

</style>
