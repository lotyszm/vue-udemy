const app = Vue.createApp({
  data() {
    return {
      inputClassValue: '',
      showParagraph: true,
      userBgColor: ''
    }
  },
  computed: {
    paraClasses() {
      return {
        user1: this.inputClassValue === 'user1',
        user2: this.inputClassValue === 'user2',
        visible: this.showParagraph,
        hidden: !this.showParagraph
      }
    }
  },
  methods: {
    showParagraphFn() {
      this.showParagraph = !this.showParagraph;
    }
  }
});


app.mount('#assignment');