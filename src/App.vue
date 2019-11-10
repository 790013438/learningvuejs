<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
          <app-server></app-server>
          <app-server-details></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppHeader       from './AppHeader.vue'
import AppServer       from './AppServer.vue'
import AppServerDetail from './AppServerDetail.vue'
import AppFooter       from './AppFooter.vue'
import Vue             from 'vue'

// Vue.component('app-header', AppHeader); 全局注册
// Vue.component('app-footer', AppFooter);
export default {
  components: {
    'app-header':AppHeader,
    'app-footer': AppFooter,
    'app-server': AppServer,
    'app-server-details': AppServerDetail
  }
}
</script>

<style>

</style>
