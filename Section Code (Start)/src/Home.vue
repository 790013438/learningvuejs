<template>
  <div>
    <server_status v-for="server in 5"></server_status>
  </div>
</template>

<script>
import ServerStatus from './ServerStatus.vue'
export default {
  components: {
    'server_status': ServerStatus
  }
}
</script>

