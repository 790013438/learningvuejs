<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!server">Please Select a server</p>
    <template v-else>
      <p>Server #{{server.id}} Status: {{server.status}}
      <button @click="changeNormal">change {{status}}</button></p>
    </template>
  </div>
</template>

<script>
import {eventBus} from '../../main.js'

export default {
  data: function() {
    return {
      server:null
    };
  },
  methods: {
    changeNormal: function() {
      this.server.status = this.status
    }
  },
  computed: {
    status: function() {
      return this.server.status === 'Normal' ? 'Critical' : 'Normal';
    }
  },
  created: function() {
    eventBus.$on('serverSelected', (data) => {
      this.server = data;
    })
  }
}
</script>
