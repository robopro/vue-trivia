<template>
    <b-navbar id="navbar" class="mb-4" toggleable="sm" type="dark" sticky>
      <b-navbar-brand id="nav-logo" :to="{ name: 'home' }">Vue Trivia</b-navbar-brand>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item :to="{ name: 'home' }">New Game </b-nav-item>
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

#navbar {
  background-color: #f08;
}
#nav-logo {
  font-family: 'Leckerli One';
}
</style>