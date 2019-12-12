<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Routing</h1>
        <hr/>
        <router-view name="app-header"></router-view>
        <transition name="slide" mode="out-in" appear type="animation">
        <router-view></router-view>
        </transition>
        <router-view name="app-bottom"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    appHeader: Header
  }
}
</script>

<style>
.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  transition: opacity .71s ease-in;
  animation: slide-in .70s ease-in;
}
.slide-leave {
  opacity: 1;
  transform: translateY(0);
}
.slide-leave-active {
  animation: slide-out .75s ease-out;
}
@keyframes slide-in {
  from {
    transform:translateY(-30px);
  }
  to {
    transform:translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform:translateY(0);
  }
  to {
    transform:translateY(-30px);
    opacity: 0;
  }
}
</style>
