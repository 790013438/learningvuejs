new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
  },
  methods: {
    startGame: function() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    attack: function() {
      let damage = this.caculateDamage(3, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits monster for '.toUpperCase() + damage
      });
      if(this.checkWin()){
        return;
      }
      this.monsterAttack();
    },
    specialAttack: function(){
      let damage = this.caculateDamage(4, 15);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits monster hard for '.toUpperCase() + damage
      });
      if(this.checkWin()){
        return;
      }
      this.monsterAttack();
    },
    monsterAttack: function() {
      let damage = this.caculateDamage(4, 13);
      this.playerHealth -= damage;
      this.turns.unshift({
        isPlayer: false,
        text: 'Monster hits player for '.toUpperCase() + damage
      });
      this.checkWin();
    },
    heal: function(){
      if (this.playerHealth < 100) {
        if(this.playerHealth < 90) {
          this.playerHealth += 10;
        } else {
          this.playerHealth = 100;
        }
        this.turns.unshift({
          isPlayer: true,
          text: 'Player heals for 10'
        });
        this.monsterAttack();
      }
    },
    giveUp: function(){
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
