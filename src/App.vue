<template>
  <div id="app" class="bg-light">
    <Navbar></Navbar>
    <div class="container d-flex justify-content-center">
      <b-card class="col-sm-12 col-lg-6">
        <router-view></router-view>
      </b-card>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}
</style>
