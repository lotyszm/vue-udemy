<template>
    <form @submit.prevent="submitData">
        <!-- name -->
        <div>
            <label for="name">Name</label>
            <input type="text" id="name" v-model="enteredName">
        </div>
        <!-- phone -->
        <div>
            <label for="phone">Phone</label>
            <input type="tel" id="phone" v-model="enteredPhone">
        </div>
        <!-- email -->
        <div>
            <label for="email">Email</label>
            <input type="email" id="email" v-model="enteredEmail">
        </div>
        <!-- is favorite -->
        <!-- <div>
            <label for="isFavorite">Favorite?</label>
            <input type="checkbox" id="isFavorite">
        </div> -->
        <!-- submit -->
        <div>
            <button type="submit">Add Friend</button>
        </div>
    </form>
</template>

<script>
export default {
    emits: ['add-contact'],
    data() {
        return {
            enteredName: '',
            enteredPhone: '',
            enteredEmail: '',
        };
    },
    methods: {
        submitData() {
            this.$emit('add-contact', 
                this.enteredName,
                this.enteredPhone,
                this.enteredEmail,
            );
        }
    }
}
</script>

<style>
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>