import { findIndex } from 'lodash'

interface PostState {
  posts: object[];
  post: object;
}

export default {
  namespaced: true,
  state: {
    posts: [],
    post: {}
  },

  mutations: {
    replacePosts (state: PostState, posts: object[]) {
      state.posts = posts
    },
    replacePost (state: PostState, post: object) {
      state.post = post
    },
    pullPost (state: PostState, id: string) {
      const index = findIndex(state.posts, { id })
      if (index === -1) return
      state.posts.splice(index, 1)
    }
  },

  getters: {
    posts: (state: PostState) => state.posts,
    post: (state: PostState) => state.post
  }
}
