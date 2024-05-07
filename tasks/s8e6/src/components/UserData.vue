<template>
  <form @submit.prevent="submitUserData">
    <input
      type="text"
      name="username"
      placeholder="Username"
      v-model="inputUsername"
    />
    <input type="number" name="age" placeholder="Age" v-model="inputAge" />
    <input type="submit" value="Submit" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      inputUsername: "",
      inputAge: 0,
    };
  },
  emits: ["update-user-data"],
  methods: {
    submitUserData() {
      this.$emit("update-user-data", this.inputUsername, this.inputAge);
    },
  },
};
</script>

<style>
form {
  display: grid;
  gap: 10px;
}
</style>
