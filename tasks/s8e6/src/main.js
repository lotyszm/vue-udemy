import { createApp } from "vue";
import App from "./App.vue";
import ActiveUSer from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";

createApp(App)
  .component("active-user", ActiveUSer)
  .component("user-data", UserData)
  .mount("#app");
