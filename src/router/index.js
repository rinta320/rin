import Vue from 'vue'
import VueRouter from 'vue-router'
import AreaView from '../views/AreaView.vue'
import WeatherView from '../views/WeatherView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'area',
    component: AreaView
  },

  {
    path: '/area',
    name: 'area',
    component: AreaView
  },
  {
    path: '/weather',
    name: 'weather',
    component: WeatherView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
