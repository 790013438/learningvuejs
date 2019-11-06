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
          alert("Monster Win");
        }

        damage = Math.max(Math.floor(Math.random() * max) + 1, min);
        this.monsterHealth -= damage;
        if (this.monsterHealth <= 0) {
          alert("player Win");
        }
      }
    },
    specialAttack: function(){},
    heal: function(){},
    giveUp: function(){
      this.startGame();
      this.gameIsRunning = false;
    }
  }
});
