const app = Vue.createApp({
  data() {
    return {
      enteredValue: '',
      goals: [],
      isListVisible: true
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    },
    removeGoal(index) {
      this.goals.splice(index, 1)
    },
    toggleShowList() {
      this.isListVisible = !this.isListVisible;
    }
  }
});

app.mount('#assignment');