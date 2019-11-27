<template>
  <div>
    <h1>Filters & Mixins</h1>
    <ul>
      <input v-model="filter"/>
      <li v-for="fruit in fruitesFiltered">{{fruit}}</li>
    </ul>
  </div>
</template>

<script>
import {fruitMixin} from './fruitMixin.js'

export default {
  mixins: [fruitMixin],
  created() {
    console.log('Inside List Created Hook');
  }
}
</script>
