<template>
  <div>
    <h2>Redirecting...</h2>
    <span>Checking SSO token from redirect uri parameter...</span>
    <Loading v-if="loading"></Loading>
  </div>
</template>

<script>
import Loading from './Loading.vue'
export default {
  name: 'sso_redirect_uri',
  components: { Loading },
  data () {
    return {
      loading: false,
    }
  },
  mounted() {
    this.authenticate();
  },
  methods:{
    authenticate() {
      this.loading = true;

      const regex = /access_token=(.*)/;
      const url = location.href;

      if (this.$store.state.isAuth) {
        return;
      }

      if (! regex.test(url)) {
        return;
      }

      //this will handle the redirect_uri declared in the sso provider app
      setTimeout(() => {
        const accessToken = url.match(/access_token=(.*)/)[1];
        this.$store.dispatch('updateAuthStatus', accessToken);

        //then we can call the sso api to get user info, 
        //example: sso_api.get('/profile').then(profile => this.$store.dispatch('updateProfile', profile))
        location.href = location.origin;
      }, 1000);
    },

  }
}
</script>
