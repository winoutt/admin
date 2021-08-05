import store from '../store'

export default {
  collectPosts () {
    return store.getters['post/posts']
  },

  collectPost () {
    return store.getters['post/post']
  },

  replacePosts (posts: object[]) {
    store.commit('post/replacePosts', posts)
  },

  replacePost (post: object[]) {
    store.commit('post/replacePost', post)
  },

  pullPost (id: string) {
    store.commit('post/pullPost', id)
  }
}
