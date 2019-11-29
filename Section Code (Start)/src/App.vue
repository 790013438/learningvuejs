<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr/>
        <select class="form-control"
          v-model="alertAnimation">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <br/></br/>
        <button class="btn btn-primary"
          @click="show = !show">Show Alert</button>
        <br/><br/>
        <transition :name="alertAnimation">
        <div class="alert alert-info"
             v-if="show">This is some Info</div>
        </transition>
        <transition name="slide" type="animation" appear>
        <div class="alert alert-info"
             v-if="show">This is some Info</div>
        </transition>
        <transition :name="alertAnimation" appear>
        <div class="alert alert-info"
             v-if="show">This is some Info</div>
        </transition>
        <transition
          enter-active-class="animated bounce"
          leave-active-class="animated shake">
        <div class="alert alert-info"
             v-show="show">This is some Info</div>
        </transition>
        <transition :name="alertAnimation" model="out-in">
        <div class="alert alert-info" key="info"
             v-if="show">This is some Info</div>
        <div class="alert alert-warning" key="out"
             v-else>This is some Alert</div>
        </transition>
        <br/><br/>
        <button @click="load = !load" class="btn btn-primary">Load or Hide</button>
        <br/><br/>
        <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave">
        <div class="alert alert-info" v-if="load">This is some Info</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      load: true,
      alertAnimation: 'fade'
    };
  },
  methods: {
    beforeEnter: function() {
      console.log('before enter');
    },
    enter() {
      console.log('enter');
    },
    afterEnter() {
      console.log('after enter');
    },
    beforeLeave() {
      console.log('before leave');
    },
    leave() {
      console.log('leave');
    },
    afterLeave() {
      console.log('after Leave');
    }
  }
}
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity .79s ease-in;
}
.fade-leave {
}
.fade-leave-active {
  transition: opacity 0.71s ease;
  opacity: 0;
}
.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in .71s ease;
  transition: opacity 1s ease;
}
.slide-leave {
}
.slide-leave-active {
  animation: slide-out .71s ease-out;
  transition: opacity 1s ease;
  opacity: 0;
}
@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
