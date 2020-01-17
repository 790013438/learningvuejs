<template>
  <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of Clicks: {{clickString}}</p>
  </div>
</template>

<script>
import {mapGetters} from 'Vuex'
import * as types from '../store/types.js'

export default {
  computed: {
    ...mapGetters({
      doubleCounter: types.DOUBLE_COUNTER,
      clickString: types.CLICK_STRING
    })
  }
}
</script>
