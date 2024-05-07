<template>
  <section id="gr">
    <active-user :username="user.username" :age="user.age"></active-user>
    <user-data @update-user-data="updateUserData"></user-data>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "empty",
        age: 0,
      },
    };
  },
  methods: {
    updateUserData(username, age) {
      this.user.username = username;
      this.user.age = age;
    },
  },
};
</script>

<style>
#app {
}
#gr {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
</style>
