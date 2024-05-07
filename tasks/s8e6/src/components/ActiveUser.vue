<template>
  <section>
    <h2>{{ this.username }}</h2>
    <h3>{{ this.age }}</h3>
  </section>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
};
</script>
