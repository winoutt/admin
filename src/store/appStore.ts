interface AppState {
  progress: number;
}

export default {
  namespaced: true,
  state: {
    progress: 0
  },

  mutations: {
    addProgress (state: AppState) {
      state.progress = state.progress + 1
    },
    pullProgress (state: AppState) {
      state.progress = state.progress - 1
    }
  },

  getters: {
    progress: (state: AppState) => state.progress
  }
}
