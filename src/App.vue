<template>
  <div class="container">
    <AppHeader></AppHeader>
    <router-view></router-view>
    <button @click="change">change</button>
  </div>
</template>

<script>
import header from './components/header.vue'

export default {
  data: function() {
    return {
      routeName: 'Home'
    }
  },
  methods: {
    change() {
      this.routeName = 'Portfolio'
    }
  },
  components: {
    AppHeader: header
  }
}
</script>

<style scoped>
</style>
