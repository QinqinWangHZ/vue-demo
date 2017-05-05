<template>
  <div id="app">
    <router-link to="/" class="hellos">Hello</router-link>
    <router-link to="/Line2">222</router-link>
    <router-link to="/Message">Message</router-link>
    <router-link to="/Message2">Message2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
