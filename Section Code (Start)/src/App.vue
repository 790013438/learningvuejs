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
        @enter-cancelled="enterCancelled"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @leave-cancelled="leaveCancelled"
        :css="false">
        <div style="width: 300px; height: 100px; background-color: lightgreen" v-if="load"></div>
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
      alertAnimation: 'fade',
      divWidth: 300
    };
  },
  methods: {
    beforeEnter: function(el) {
      console.log('before enter');
      el.style.width = '0px';
    },
    enter(el, done) {
      console.log('enter');
      let direct = 1;
      let count = 1;
      let interval = setInterval(()=> {
        this.divWidth += 20 * direct
        el.style.width = this.divWidth + 'px';
        if (count > 20) {
          clearInterval(interval)
          done();
        }
        count++;
      }, 20);
    },
    afterEnter() {
      console.log('after enter');
    },
    enterCancelled() {
      console.log('enter cancelled');
    },
    beforeLeave(el) {
      console.log('before leave');
      el.style.width = '300px'
    },
    leave(el, done) {
      console.log('enter');
      let direct = -1;
      let count = 1;
      let interval = setInterval(()=> {
        this.divWidth += 20 * direct
        el.style.width = this.divWidth + 'px';
        if (count > 20) {
          clearInterval(interval)
          done();
        }
        count++;
      }, 20);
    },
    afterLeave() {
      console.log('after Leave');
    },
    leaveCancelled() {
      console.log('leave cancelled');
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
