<template>
  <li style="cursor: pointer"
    class="list-group-item"
    @click="selected">
    Server #{{ server.id }} - {{server.status}}
  </li>
</template>

<script>
import {eventBus} from '../../main'

export default {
  props: ['server'],
  methods: {
    selected: function() {
      eventBus.$emit('serverSelected', this.server);
    }
  }
}
</script>
