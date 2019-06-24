// import Vue from 'vue'

import 'normalize.css/normalize.css'
import App from './App'
// import router from './router'
import messages from './messages.js'
// import VueI18n from 'vue-i18n'
import vmodal from 'vue-js-modal'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// 引入modal
Vue.config.productionTip = false
Vue.use(vmodal, { dynamic: true, dynamicDefaults: { clickToClose: false } })

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'cn',
  messages
})

new Vue({
  el: '#app',
  // router,
  i18n,
  render: h => h(App)
})
