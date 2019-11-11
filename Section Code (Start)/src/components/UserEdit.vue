<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>user Age: {{age}}</p>
        <button @click="changeUserAge">change User Age</button>
    </div>
</template>

<script>
import {eventBus} from '../main.js'

export default {
  props: ['userAge'],
  data: function() {
    return {age: this.userAge};
  },
  methods: {
    changeUserAge: function() {
      this.age = 27;
      eventBus.$emit('userAgeWasChanged', this.age);
    }
  }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
