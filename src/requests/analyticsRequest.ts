import { isEmpty, map, range, reverse, mapValues, find } from 'lodash'
import moment from 'moment'
import analyticsHttp from '@/http/analyticsHttp'
import analyticsState from '@/state/analyticsState'

export default {
  async counts () {
    const response = await analyticsHttp.counts()
    if (isEmpty(response)) return
    const { data: counts } = response
    analyticsState.replaceCounts(counts)
    return response
  },

  async topCountries () {
    const response = await analyticsHttp.topCountries()
    if (isEmpty(response)) return
    const { data: topCountries } = response
    analyticsState.replaceTopCountries(topCountries)
    return response
  },

  async monthlyStatistics () {
    const response = await analyticsHttp.monthlyStatistics()
    if (isEmpty(response)) return
    const { data: monthlyStatistics } = response
    const lastDays = reverse(map(range(30), day => moment().startOf('day').subtract(day, 'days').format('YYYY-MM-DD')))
    const monthlyData = mapValues(monthlyStatistics, (counts, module) => {
      const moduleData = map(lastDays, day => {
        const count = find(counts, (count, date) => date === day)
        if (!count) return 0
        return count
      })
      return moduleData
    })
    monthlyData.days = map(lastDays, day => moment(day).format('DD'))
    analyticsState.replaceMonthlyStatistics(monthlyData)
    return response
  }
}
