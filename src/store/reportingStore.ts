import { findIndex, find, some, filter, forEach } from 'lodash'

interface Reporting {
  id: number;
  isUnseen: boolean;
}

interface ReportingState {
  reportings: Reporting[];
}

export default {
  namespaced: true,
  state: {
    reportings: []
  },

  mutations: {
    replaceReportings (state: ReportingState, reportings: Reporting[]) {
      state.reportings = reportings
    },
    pullReporting (state: ReportingState, reporting: Reporting) {
      const index = findIndex(state.reportings, { id: reporting.id })
      if (index === -1) return
      state.reportings.splice(index, 1)
    },
    pushReporting (state: ReportingState, reporting: Reporting) {
      state.reportings.unshift(reporting)
    },
    markReportingUnseen (state: ReportingState, id: number) {
      const index: number = findIndex(state.reportings, { id })
      if (index === -1) return
      const reporting: any = find(state.reportings, { id })
      reporting.isUnseen = true
      state.reportings.splice(index, 1, reporting)
    },
    markReportingsSeen (state: ReportingState) {
      const unseens = filter(state.reportings, { isUnseen: true })
      forEach(unseens, unseenReporting => {
        const { id } = unseenReporting
        const index: number = findIndex(state.reportings, { id })
        if (index === -1) return
        const reporting: any = find(state.reportings, { id })
        reporting.isUnseen = false
        state.reportings.splice(index, 1, reporting)
      })
    }
  },

  getters: {
    reportings: (state: ReportingState) => state.reportings,
    hasUnseen: (state: ReportingState) => {
      return some(state.reportings, { isUnseen: true })
    }
  }
}
