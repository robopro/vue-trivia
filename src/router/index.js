import Vue from 'vue'
import VueRouter from 'vue-router'
import MainMenu from '../views/MainMenu.vue'

Vue.use(VueRouter)

const routes = [{
  name: 'home',
  path: '/',
  component: MainMenu
}

]
// routes.push({ name: 'home', path: '/', component: MainMenu })

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
