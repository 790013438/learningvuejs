<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1 class="text-center">The Super Quiz</h1>
      </div>
    </div>
    <hr/>
    <transition name="flip" mode="out-in">
    <keep-alive>
      <component :is="selectCmp"
            @answered="answered($event)"
            @continue="selectCmp = 'appQuestion'"></component>
    </keep-alive>
    </transition>
  </div>
</template>

<script>
import Answer from './components/Answer.vue'
import Question from './components/Question.vue'

export default {
  data: function() {
    return {
      selectCmp: 'appQuestion'
    };
  },
  methods: {
    answered: function(event) {
      if (event) {
        this.selectCmp = 'appAnswer';
      } else {
        alert('Please try again');
      }
    }
  },
  components: {
    appAnswer: Answer,
    appQuestion: Question
  }
}
</script>
<style>
.flip-enter {
}
.flip-enter-active {
  animation: flip-in 500ms ease-in;
}
.flip-leave {
}
.flip-leave-active {
  animation: flip-out 500ms ease-out;
}
@keyframes flip-in {
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
}
@keyframes flip-out {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(90deg);
  }
}
</style>
