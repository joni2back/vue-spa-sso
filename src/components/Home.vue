<template>
  <div class="home">
    <h2>Welcome</h2>
    <h4 v-if="this.$store.state.isAuth">Welcome user!</h4>
    <h4 v-if="!this.$store.state.isAuth">You are not authenticated, please go to <a href="#/login">login</a> page.</h4>
  </div>

</template>

<script>
export default {
  name: "Home",
  props: {
  },
  methods: {
  },
};
</script>
