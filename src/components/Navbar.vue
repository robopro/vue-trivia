<template>
    <b-navbar id="navbar" class="custom-info" type="dark" sticky>
      <b-navbar-brand id="nav-logo" :to="{ name: 'home' }">Vue Trivia</b-navbar-brand>

      <b-navbar-nav class="ml-auto">
        <b-nav-item :to="{ name: 'home' }">New Game </b-nav-item>
        <b-nav-item href="https://github.com/robopro/vue-trivia" target="_blank">About</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Leckerli+One&display=swap');

#nav-logo {
  font-family: 'Leckerli One';
}
</style>

<docs>
Bootstrap navbar. Nothing exciting going on here. Except one router-link maybe.
</docs>