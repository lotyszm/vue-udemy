const app = Vue.createApp({
  data() {
    return {
      text: '',
      confirmedText: ''
    }
  },
  methods: {
    showAlert() {
      alert('Hello, World!');
    },
    setText(event) {
      this.text = event.target.value;
    },
    confirmText() {
      this.confirmedText = this.text;
    }
  }
});


app.mount('#assignment');