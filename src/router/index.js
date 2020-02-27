import Vue from 'vue'
import VueRouter from 'vue-router'
import MainMenu from '../views/MainMenu.vue'
import GameController from '../views/GameController.vue'
import GameOver from '../views/GameOver'

Vue.use(VueRouter)

const routes = [
  {
    name: 'home',
    path: '/',
    component: MainMenu
  }, {
    name: 'quiz',
    path: '/quiz/:number/:category/:difficulty',
    component: GameController,
    props: true
  }, {
    name: 'result',
    path: '/result',
    component: GameOver
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
