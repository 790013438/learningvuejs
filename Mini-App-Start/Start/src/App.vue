<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1 class="text-center">The Super Quiz</h1>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <transition
            enter-active-class="force-animated flipInY"
            leave-active-class="force-animated flipOutY"
            mode="out-in">
          <keep-alive>
            <component :is="mode" @answered="answered($event)" @confirmed="mode = 'app-question'"></component>
          </keep-alive>
          </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Question from './components/Question.vue';
import Answer from './components/Answer.vue';

export default {
  data() {
    return {
      mode: 'app-question'
    }
  },
  methods: {
    answered(isCorrect) {
      if (isCorrect) {
        this.mode = 'app-answer';
      } else {
        this.mode = 'app-question';
        alert('Wrong, try again!');
      }
    }
  },
  components: {
    appQuestion: Question,
    appAnswer: Answer
  }
}
</script>
<style scoped>
.force-animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
</style>
