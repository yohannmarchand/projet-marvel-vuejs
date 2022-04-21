import Vue from 'vue'
import VueRouter from 'vue-router'
import ComicsHome from '../views/ComicsHome.vue'
import CharactersList from "../views/CharactersList";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ComicsHome',
    component: ComicsHome
  },
  {
    path: '/characters',
    name: 'CharactersList',
    component: CharactersList
  },
  {
    path: '/comic/:id',
    name: 'ComicsDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ComicsDetail.vue')
  },
  {
    path: '/character/:id',
    name: 'CharactersDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CharactersDetail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
