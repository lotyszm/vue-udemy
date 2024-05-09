<template>
  <div>
    <h2>Manage Golas</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>
    <teleport to="#app">
      <error-alert v-if="inputIsValid">
        <p>Please enter a goal!</p>
        <button @click="confirmError">OK</button>
      </error-alert>
    </teleport>
  </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";

export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputIsValid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === "") {
        this.inputIsValid = true;
      }
    },
    confirmError() {
      this.inputIsValid = false;
    },
  },
};
</script>
