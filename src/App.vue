<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/prepare" v-if="$store.state.isAuth">Prepare</router-link>
      <router-link to="/improve" v-if="$store.state.isAuth">Improve</router-link>
      <router-link to="/collect" v-if="$store.state.isAuth">Collect</router-link>
      <router-link to="/profile" v-if="$store.state.isAuth">Profile</router-link>

      <router-link to="/login" v-if="!$store.state.isAuth">Login</router-link>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  margin: 0 auto;
  width: 85%;
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 1em;

  background: #eee;
  border-radius: 20px 20px 0 0;
  padding: 1em 3em;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

button, input[type=button] {
  padding: .5em;
}
</style>
