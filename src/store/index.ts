import Vue from 'vue'
import Vuex from 'vuex'
import app from './appStore'
import analytics from './analyticsStore'
import user from './userStore'
import post from './postStore'
import comment from './commentStore'
import reporting from './reportingStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    analytics,
    user,
    post,
    comment,
    reporting
  }
})
