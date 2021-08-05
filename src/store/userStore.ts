import { findIndex } from 'lodash'

interface User {
  id: string;
}

interface UserState {
  users: User[];
  user: User;
}

export default {
  namespaced: true,
  state: {
    users: [],
    user: {}
  },

  mutations: {
    replaceUsers (state: UserState, users: User[]) {
      state.users = users
    },
    replaceUser (state: UserState, user: User) {
      state.user = user
    },
    amendUser (state: UserState, user: User) {
      const index = findIndex(state.users, { id: user.id })
      if (index === -1) return
      state.users.splice(index, 1, user)
    }
  },

  getters: {
    users: (state: UserState) => state.users,
    user: (state: UserState) => state.user
  }
}
