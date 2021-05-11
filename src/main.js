// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  created: function() {
    this.checkLogin()
  },
  watch:{
    '$route': 'checkLogin'
  },
  router,
  store,
  template: '<App/>',
  components: { App },
  methods: {
    checkLogin() {
      const accessToken = localStorage.getItem('access_token');
      this.$store.dispatch('updateAuthStatus', accessToken);

      if (this.$route.name === 'login' && accessToken) {
        return this.$router.push('/');
      } 

      if (this.$route.name === 'profile' && !accessToken) {
        return this.$router.push('/login');
      }
    },
  },

})
