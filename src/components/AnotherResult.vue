<template>
  <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of Clicks: {{clickString}}</p>
  </div>
</template>

<script>
import {mapGetters} from 'Vuex'

export default {
  computed: {
    ...mapGetters(['doubleCounter', 'clickString'])
  }
}
</script>
