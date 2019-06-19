import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css'
import Element from 'element-ui'
import '@/styles/element-variables.scss'

import App from './App'
import router from './router'
import store from './store'

import http from '@/utils/request'

import { get, post, fetch } from '@/utils/http'

Object.defineProperties(Vue.prototype, {
  $http: {
    value: http
  },
  $get: {
    value: get
  },
  $post: {
    value: post
  },
  $q: {
    value: fetch
  }
})
Vue.use(Element, {
  size: Cookies.get('size') || 'medium'
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
