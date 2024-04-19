const app = Vue.createApp({
  data() {
    return {
      name: "John Doe",
      age: 20,
      imgUrl: "https://european-union.europa.eu/sites/default/files/styles/oe_theme_small_no_crop/public/2022-02/Flag_of_Poland.png?itok=rWy9n5US"
    }
  },
  methods: {
    myAfterYears(years) {
      return this.age + years;
    },
    favoriteNumber() {
      return Math.random();
    },
  }
});

app.mount('#assignment');