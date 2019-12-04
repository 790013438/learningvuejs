<template>
  <div class="row col-sm-offset-2 col-sm-8 col-xs-12">
    <div class="panel panel-default">
      <div class="panel-heading text-center">{{message}}</div>
      <div class="panel-body">
        <div class="col-sx-12 col-sm-6 text-center">
          <button class="btn btn-primary btn-lg" style="margin:10px" @click="onAnswer(answers[0].correct)">{{answers[0].answer}}</button>
        </div>
        <div class="col-sx-12 col-sm-6 text-center">
          <button class="btn btn-primary btn-lg" style="margin:10px" @click="onAnswer(answers[1].correct)">{{answers[1].answer}}</button>
        </div>
        <div class="col-sx-12 col-sm-6 text-center">
          <button class="btn btn-primary btn-lg" style="margin:10px" @click="onAnswer(answers[2].correct)">{{answers[2].answer}}</button>
        </div>
        <div class="col-sx-12 col-sm-6 text-center">
          <button class="btn btn-primary btn-lg" style="margin:10px" @click="onAnswer(answers[3].correct)">{{answers[3].answer}}</button>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
const model     = ['-', '+'];
const SUBSTRACT = 0;
const ADD       = 1;
export default {
  data: function() {
    return {
      message: 'Ohh some thing wrong',
      answers: [
        { correct: false, answer: 0 },
        { correct: false, answer: 0 },
        { correct: false, answer: 0 },
        { correct: true,  answer: 0 }
      ]
    };
  },
  methods: {
    onAnswer(correct) {
      this.$emit('answered', correct);
    },
    generatedNum: function() {
      let firstNum = this.randomValue(5, 100);
      let secondNum = this.randomValue(10, 120);
      let numModel = this.randomValue(0, 1);
      this.message = `What's ${firstNum} ${model[numModel]} ${secondNum} ?`
      let out = 0;
      switch (numModel) {
        case SUBSTRACT:
          out = firstNum - secondNum;
          break;
        case ADD:
          out = firstNum + secondNum;
      }
      this.answers[0].correct = false;
      this.answers[0].answer = this.randomValue(out - 10, out + 10, out)
      this.answers[1].correct = false;
      this.answers[1].answer = this.randomValue(out - 10, out + 10, out)
      this.answers[2].correct = false;
      this.answers[2].answer =  this.randomValue(out - 10, out + 10, out)
      this.answers[3].correct = false;
      this.answers[3].answer = this.randomValue(out - 10, out + 10, out)

      let trueNum = this.randomValue(0, 3);
      this.answers[trueNum].correct = true;
      this.answers[trueNum].answer = out;
    },
    randomValue: function(start, end, except) {
      let random =  start + Math.floor((end - start) * Math.random() + 1);
      if ( random === except) {
        return this.randomValue(start, end, except);
      }
      return random;
    }
  },
  activated() {
    this.generatedNum();
  }
}
</script>

