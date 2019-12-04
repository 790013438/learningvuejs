<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1 class="text-center">The Super Quiz</h1>
      </div>
    </div>
    <hr/>
    <keep-alive>
      <component :is="selectCmp"
            @anwsered="anwsered($event)"
            @continue="selectCmp = 'appQuestion'"></component>
    </keep-alive>
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
    anwsered: function(event) {
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
<style></style>
