<template>
  <div id="app" class="bg-light">
    <Navbar></Navbar>
    <b-alert :show="dismissCountdown" dismissible variant="danger" @dismissed="dismissCountdown = 0">
      {{ errorMessage }}
    </b-alert>
    <div class="d-flex justify-content-center">
      <b-card id="main-card" class="col-sm-12 col-lg-4">
        <router-view></router-view>
      </b-card>
    </div>
  </div>
</template>

<script>
import EventBus from './eventBus'
import Navbar from './components/Navbar'

export default {
  name: 'app',
  components: {
    Navbar
  },
  data() {
    return {
      errorMessage: '',
      dismissSecs: 5,
      dismissCountdown: 0
    }
  },
  methods: {
    showAlert(error) {
      this.errorMessage = error
      this.dismissCountdown = this.dismissSecs
    }
  },
  mounted() {
    EventBus.$on('alert-error', (error) => {
      this.showAlert(error)
    })
  },
  beforeDestroy() {
    EventBus.$off('alert-error')
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

.col-sm-12 {
  padding: 0;
  margin-top: 0;
}

@media (min-width: 992px) {
  #main-card {
    margin-top: 2em;
  }
}

</style>
