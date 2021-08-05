import Vue from 'vue'
import 'bootstrap'
import App from './App.vue'
import router from './router'
import store from './store'
import util from './services/util'

Vue.config.productionTip = false
Vue.prototype.util = util

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
