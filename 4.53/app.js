function attackValue(min, max) {
  const attackValue = Math.floor(Math.random() * (max - min)) + min;
  return attackValue;
}


const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100
    };
  },
  methods: {
    attackMonster() {
      this.monsterHealth -= attackValue(5, 12);
      this.attackPlayer();
    },
    attackPlayer() {
      this.playerHealth -= attackValue(8, 15);
    }
  }
});


app.mount('#game');