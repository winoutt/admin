import { findIndex } from 'lodash'

interface CommentState {
  comments: object[];
  comment: object;
}

export default {
  namespaced: true,
  state: {
    comments: [],
    comment: {}
  },

  mutations: {
    replaceComments (state: CommentState, comments: object[]) {
      state.comments = comments
    },
    replaceComment (state: CommentState, comment: object) {
      state.comment = comment
    },
    pullComment (state: CommentState, id: string) {
      const index = findIndex(state.comments, { id })
      if (index === -1) return
      state.comments.splice(index, 1)
    }
  },

  getters: {
    comments: (state: CommentState) => state.comments,
    comment: (state: CommentState) => state.comment
  }
}
