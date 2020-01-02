<template>
  <div>
    <button class="btn btn-primary" @click="increment({by:100, timeout:500})">Increment</button>
    <button class="btn btn-primary" @click="decrease({by:50, timeout:500})">Decrement</button>
  </div>
</template>

<script>
import {mapActions} from 'Vuex'

export default {
  methods: {
    ...mapActions({increment: 'asycnIncrease', decrease: 'asycnDecrease'})
  }
}
</script>
