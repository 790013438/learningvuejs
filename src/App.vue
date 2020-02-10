<template>
  <div class="container-fuild container">
    <AppHeader></AppHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header.vue'

export default {
  components: {
    AppHeader: header
  }
}
</script>

<style scoped>
</style>
