import Vue from 'vue'
import App from './App.vue'
import 'file-loader?name=[name].[ext]!../index.html'
import router from './routes.js'
import './material.js'

new Vue({
  el: '#app',
  render: h => h(App),
  router
})

