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
      let min = 3;
      let max = 10;
      let damage = Math.max(Math.floor(Math.random() * max) + 1, min);
      if (this.playerHealth > 0 && this.monsterHealth > 0) {
        this.playerHealth -= damage;
        if (this.playerHealth <= 0) {
          alert("You lost!");
          this.gameIsRunning = false;
          return;
        }

        damage = Math.max(Math.floor(Math.random() * max) + 1, min);
        this.monsterHealth -= damage;
        if (this.monsterHealth <= 0) {
          alert("You Win!");
          this.gameIsRunning = false;
        }
      }
    },
    specialAttack: function(){},
    heal: function(){},
    giveUp: function(){
      this.startGame();
      this.gameIsRunning = false;
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
