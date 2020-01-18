<template>
  <div>
    <button class="btn btn-primary" @click="increment(1)">Increment</button>
    <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  methods: {
    ...mapActions('counter', {increment: 'increase', decrement: 'decrease'})
  }
}
</script>
