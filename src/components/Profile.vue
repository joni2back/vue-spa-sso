<template>
  <div class="profile">
    <h2>My profile</h2>
    <button @click='logout'>Logout</button>
    <Loading v-if="loading"></Loading>
  </div>
</template>

<script>
import Loading from './Loading.vue'
export default {
  name: 'profile',
  components: { Loading },
  data () {
    return {
      loading: false,
    }
  },
  methods: {
    logout() {
      this.loading = true;
      this.$store.dispatch('updateAuthStatus', false);
      location.reload();
    }
  },
  computed: {
  }
}
</script>