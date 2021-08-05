import store from '../store'

export default {
  collectReportings () {
    return store.getters['reporting/reportings']
  },

  collectHasUnseen () {
    return store.getters['reporting/hasUnseen']
  },

  replaceReportings (reportings: object[]) {
    store.commit('reporting/replaceReportings', reportings)
  },

  pullReporting (reporting: object[]) {
    store.commit('reporting/pullReporting', reporting)
  },

  pushReporting (reporting: object) {
    store.commit('reporting/pushReporting', reporting)
  },

  markReportingUnseen (id: number) {
    store.commit('reporting/markReportingUnseen', id)
  },

  markReportingsSeen () {
    store.commit('reporting/markReportingsSeen')
  }
}
