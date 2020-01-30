<template>
  <div class="container">
    <AppHeader></AppHeader>
    <router-view :name="'header'"></router-view>
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
