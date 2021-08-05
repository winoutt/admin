import http from './http'

export default {
  counts () {
    return http.get('analytics/counts')
  },

  topCountries () {
    return http.get('analytics/countries/top')
  },

  monthlyStatistics () {
    return http.get('analytics/statistics/monthly')
  }
}
