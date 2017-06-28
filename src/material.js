import Vue from 'vue'
import VueMaterial from 'vue-material'

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

require('vue-material/dist/vue-material.css')

