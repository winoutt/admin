import { isEmpty } from 'lodash'
import reportingHttp from '@/http/reportingHttp'
import reportingState from '@/state/reportingState'
import alert from '@/services/alert'

export default {
  async read (id: number) {
    const response = await reportingHttp.read(id)
    if (isEmpty(response)) return
    const { data: reporting } = response
    reportingState.pushReporting(reporting)
    return response
  },

  async reportings () {
    const response = await reportingHttp.reportings()
    if (isEmpty(response)) return
    const { data: reportings } = response
    reportingState.replaceReportings(reportings)
    return response
  },

  async delete (id: string) {
    const response = await reportingHttp.delete(id)
    if (isEmpty(response)) return
    const { data: reporting } = response
    reportingState.pullReporting(reporting)
    alert.show('success', 'Successfully deleted')
    return response
  },

  async approve (id: string) {
    const response = await reportingHttp.approve(id)
    if (isEmpty(response)) return
    const { data: reporting } = response
    reportingState.pullReporting(reporting)
    alert.show('success', 'Successfully took action')
    return response
  }
}
