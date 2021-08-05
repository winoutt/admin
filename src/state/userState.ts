import store from '../store'

export default {
  collectUsers () {
    return store.getters['user/users']
  },

  collectUser () {
    return store.getters['user/user']
  },

  replaceUsers (users: object[]) {
    store.commit('user/replaceUsers', users)
  },

  replaceUser (user: object[]) {
    store.commit('user/replaceUser', user)
  },

  amendUser (user: object[]) {
    store.commit('user/amendUser', user)
  }
}
