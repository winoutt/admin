import store from '../store'

export default {
  addProgress () {
    store.commit('app/addProgress')
  },

  collectProgress () {
    return store.getters['app/progress']
  },

  pullProgress () {
    store.commit('app/pullProgress')
  }
}
