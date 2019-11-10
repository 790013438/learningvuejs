<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <li
                            class="list-group-item"
                            v-for="index in 5">
                        Server #{{ index }}
                    </li>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-6">
                <p>Server Details are currently not updated</p>
            </div>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
import Vue from 'vue'

// Vue.component('app-header', AppHeader); 全局注册
// Vue.component('app-footer', AppFooter);
export default {
  components: {
    'app-header':AppHeader,
    'app-footer': AppFooter
  }
}
</script>

<style>

</style>
