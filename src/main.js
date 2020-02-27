import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

const shuffleMixin = {
  methods: {
    shuffleArray: (arr) => arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1])
  }
}

new Vue({
  router,
  mixins: [shuffleMixin],
  render: h => h(App)
}).$mount('#app')
