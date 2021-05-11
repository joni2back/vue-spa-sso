import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Login from '@/components/Login'
import Profile from '@/components/Profile'
import Prepare from '@/components/Prepare'
import Collect from '@/components/Collect'
import Improve from '@/components/Improve'
import SSORedirectUri from '@/components/SSORedirectUri'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/prepare",
      name: "prepare",
      component: Prepare,
    },
    {
      path: "/collect",
      name: "collect",
      component: Collect,
    },
    {
      path: "/improve",
      name: "improve",
      component: Improve,
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/sso-redirect-uri',
      name: 'sso_redirect_uri',
      component: SSORedirectUri
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})
