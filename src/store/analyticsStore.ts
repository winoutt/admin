interface Counts {
  users: {
    count: number;
  };
}
interface AnalyticsState {
  counts: Counts;
  topCountries: object[];
  monthlyStatistics: object;
}

export default {
  namespaced: true,
  state: {
    counts: {},
    topCountries: [],
    monthlyStatistics: {}
  },

  mutations: {
    replaceCounts (state: AnalyticsState, counts: Counts) {
      state.counts = counts
    },
    replaceTopCountries (state: AnalyticsState, topCountries: object[]) {
      state.topCountries = topCountries
    },
    replaceMonthlyStatistics (state: AnalyticsState, monthlyStatistics: object) {
      state.monthlyStatistics = monthlyStatistics
    }
  },

  getters: {
    counts: (state: AnalyticsState) => state.counts,
    usersCount: (state: AnalyticsState) => state.counts.users.count,
    topCountries: (state: AnalyticsState) => state.topCountries,
    monthlyStatistics: (state: AnalyticsState) => state.monthlyStatistics
  }
}
