<template>
  <div>
    <button class="btn btn-primary" @click="increment(100)">Increment</button>
    <button class="btn btn-primary" @click="decrease">Decrement</button>
  </div>
</template>

<script>
import {mapActions} from 'Vuex'

export default {
  methods: {
    ...mapActions({increment: 'asycnIncrease', decrease: 'decrease'})
  }
}
</script>
