import store from '../store'

export default {
  collectComments () {
    return store.getters['comment/comments']
  },

  collectComment () {
    return store.getters['comment/comment']
  },

  replaceComments (comments: object[]) {
    store.commit('comment/replaceComments', comments)
  },

  replaceComment (comment: object[]) {
    store.commit('comment/replaceComment', comment)
  },

  pullComment (id: string) {
    store.commit('comment/pullComment', id)
  }
}
