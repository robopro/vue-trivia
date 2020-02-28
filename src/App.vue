<template>
  <div id="app" class="bg-light">
    <Navbar></Navbar>
    <b-alert :show="dismissCountdown" dismissible variant="danger" @dismissed="dismissCountdown = 0">
      {{ errorMessage }}
    </b-alert>
    <div class="d-flex justify-content-center">
      <b-card no-body id="main-card" class="col-sm-12 col-lg-4 px-0">
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

.custom-success {
  background-color: #d4edda !important;
}

.btn.custom-success {
  background-color: #59dd99 !important;
  border-color: #59aa73 !important;
}

.btn.custom-success:hover {
  background-color: #59aa73 !important;
  border-color: #59aa73 !important;
}

.custom-warning {
  background-color: #ffc10736 !important;
}

.custom-danger {
  background-color: #f8d7da !important;
}

.custom-info {
  background-color: #17a2b8bf !important;
}

#main-card {
  min-height: 25vh;
}

@media (max-width: 991px) {
  #main-card {
    border-radius: 0;
    border: 0;
  }
  #main-card .card-header {
    border-radius: 0;
  }

}

@media (min-width: 992px) {
  #main-card {
    margin-top: 2em;
  }
}
</style>
