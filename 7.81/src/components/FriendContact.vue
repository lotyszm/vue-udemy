<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetails()">
      {{ detailsAreVisible ? "Hide" : "Show" }}
    </button>
    <br><br>
    <button @click="toggleFavorite()">
      {{ isFavorite ? "Favorite" : "No favorite" }}
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
    <button @="deleteFriend">Delete</button>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      // validator(value) {
      //   return value === '0' || value === '1';
      // },
    },
  },
  emits: ['toggle-favorite', 'delete-friend'],
  // emits: {
  //   'toggle-favorite': function(id) {
  //     if (id === this.id) {
  //       return true;
  //     }
  //     console.log('id is missing');
  //     return false;
  //   },
  // },
  data() {
    return {
      detailsAreVisible: false,
      // friendIsFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      // this.friendIsFavorite = !this.friendIsFavorite;
      this.$emit('toggle-favorite', this.id);
    },
    deleteFriend() {
      this.$emit('delete-friend', this.id);
    },
  },
};
</script>
