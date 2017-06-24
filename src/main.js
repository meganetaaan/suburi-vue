import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import App from './App.vue'
import 'file-loader?name=[name].[ext]!../index.html'

Vue.use(VueMaterial)
Vue.material.registerTheme('default', {
  primary: {
    color: 'light-blue',
    hue: 600
  },
  accent: 'amber',
  warn: 'red',
  background: 'white'
})


Vue.use(VueRouter)
import NippoForm from './Form.vue'
import NippoList from './List.vue'
const routes = [
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

require('vue-material/dist/vue-material.css')

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
