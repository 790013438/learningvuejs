<template>
  <div>
    <button class="btn btn-primary" @click="increase">Increment</button>
    <button class="btn btn-primary" @click="decrease">Decrement</button>
  </div>
</template>

<script>
import {mapMutations} from 'Vuex'

export default {
  methods: {
    ...mapMutations(['increase', 'decrease'])
  }
}
</script>
