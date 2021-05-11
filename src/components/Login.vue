<template>
  <div class="login">

    <h2>Login</h2>
    <button @click="authInSSO()">Login with SSO</button>
    <Loading v-if="loading"></Loading>

  </div>
</template>

<script>
import Loading from './Loading.vue'
export default {
  name: 'login',
  components: { Loading },
  data () {
    return {
      loading: false,
    }
  },
  methods:{
    async authInSSO() {
      this.loading = true;

      /**
       * we directly redirect to the redirect_uri url to make this example work
       * but this method should redirect to the external provider url using our public key
       */
      setTimeout(() => this.$router.push('/sso-redirect-uri?access_token=43jkbmn32oindcson43-4398mx'), 1000);
    },
  }
}
</script>