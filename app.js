new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false
  },
  methods: {
    startGame: function() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack: function() {
      if (this.playerHealth > 0 && this.monsterHealth > 0) {
        this.playerHealth -= this.caculateDamage(4, 10);
        if (this.checkWin()) {
          return;
        }

        this.monsterHealth -= this.caculateDamage(3, 10);
        this.checkWin()
      }
    },
    specialAttack: function(){},
    heal: function(){},
    giveUp: function(){
      this.startGame();
      this.gameIsRunning = false;
    },
    caculateDamage: function(min, max) {
      return Math.max(Math.floor(Math.random()* max)+ 1, min);
    },
    checkWin: function() {
      if (this.playerHealth <= 0) {
        if(confirm("You lost! Start new Game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      if (this.monsterHealth <= 0) {
        if(confirm("You Win! Start new Game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    }
  },
  computed: {
    playHealthWidth: function() {
      return {width: this.playerHealth < 0 ? 0 : this.playerHealth + '%'};
    },
    monsterHealthWidth: function() {
      return {width: this.monsterHealth < 0 ? 0 : this.monsterHealth + '%'};
    }
  }
});
