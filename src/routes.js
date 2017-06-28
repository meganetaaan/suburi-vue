import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import NippoForm from './Form.vue'
import NippoList from './List.vue'
const routes = [
  {
    path: '/',
    redirect: '/list'
  },
  {
    path: '/form',
    component: NippoForm
  },
  {
    path: '/list',
    component: NippoList
  }
]
const router = new VueRouter({
  routes
})

export default router

