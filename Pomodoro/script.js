const POMODORO_STATES = {
  WORK: 'work',
  REST: 'rest',
  STOPPED: 'stopped'
};
const WORKING_TIME_LENGTH_IN_MINUTES = 1;
const RESTING_TIME_LENGTH_IN_MINUTES = 2;

var data = {
  state: POMODORO_STATES.STOPPED,
  minute: WORKING_TIME_LENGTH_IN_MINUTES,
  second: 0,
  pomodoroState: POMODORO_STATES.WORK,
  timestamp: 0
}

new Vue({
  el: '#app',
  data: data,
  computed: {
    // 提示状态是工作还是休息
    title: function () {
      return this.pomodoroState === POMODORO_STATES.WORK ? 'Work!' : 'Rest!'
    },
    // 通过计算后展示分钟
    min: function () {
      if (this.minute < 10) {
        return '0' + this.minute;
      }

      return this.minute;
    },
    sec: function () {
      if (this.second < 10) {
        // 如果小于10，则在前补零
        return '0' + this.second;
      }

      return this.second;
    }
  },
  methods: {
    start: function () {
      // setInterval刚开始会等待一秒后执行，一次为周期
      this._tick();
      this.interval = setInterval(this._tick, 1000);
    },
    _tick : function () {
      // if second is not 0, just decrement second
      if (this.second !== 0) {
        this.second--;
        return;
      } else {
        // else if second is 0 and minute is not 0, decrement minute and set second to 59
        if (this.minute !== 0) {
          // 如果不为零则倒数
          this.minute--;
          // 分钟减一后，秒钟重新从59开始
          this.second = 59;
          return;
        } else {

          // if second is 0 and minute is 0, toggle working/resting intervals
          this.pomodoroState = this.pomodoroState === POMODORO_STATES.WORK ? POMODORO_STATES.REST : POMODORO_STATES.WORK;
          if (this.pomodoroState === POMODORO_STATES.WORK) {
            this.minute = WORKING_TIME_LENGTH_IN_MINUTES;
          } else {
            this.minute = RESTING_TIME_LENGTH_IN_MINUTES;
          }
        }
      }
    }
  }
});
