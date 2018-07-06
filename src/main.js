// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import util from './assets/js/util'
import base from './assets/js/base'
import './assets/styles/element-variables.scss'
// if (base.transferMember) {
//   require('./assets/styles/element-variables.scss')
// } else {
//   require('./assets/styles/element-variables1.scss')
// }

Vue.use(ElementUI)

Vue.prototype.imgHost = 'http://yinhe-1255600302.file.myqcloud.com/'

Vue.prototype.util = util
Vue.prototype.base = base

Vue.filter('price', value => {
  if (value === '') return ''
  return (value / 100).toFixed(2)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
let vue = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

export default vue