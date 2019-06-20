import Vue from 'vue'

import 'normalize.css/normalize.css'
import Element from 'element-ui'
import '@/styles/element-variables.scss'

import App from './App'
import router from './router'
import store from './store'
import messages from './messages.js'
import VueI18n from 'vue-i18n'

Vue.use(Element)

Vue.config.productionTip = false

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'cn',
  messages
})

new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App)
})
