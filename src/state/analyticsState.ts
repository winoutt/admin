import store from '../store'

export default {
  collectCounts () {
    return store.getters['analytics/counts']
  },

  collectUsersCount () {
    return store.getters['analytics/usersCount']
  },

  collectTopCountries () {
    return store.getters['analytics/topCountries']
  },

  collectMonthlyStatistics () {
    return store.getters['analytics/monthlyStatistics']
  },

  replaceCounts (counts: object) {
    store.commit('analytics/replaceCounts', counts)
  },

  replaceTopCountries (topCountries: object) {
    store.commit('analytics/replaceTopCountries', topCountries)
  },

  replaceMonthlyStatistics (topCountries: object) {
    store.commit('analytics/replaceMonthlyStatistics', topCountries)
  }
}
