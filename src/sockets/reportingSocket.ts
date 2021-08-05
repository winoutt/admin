import pusher from '@/services/pusher'
import reportingRequest from '@/requests/reportingRequest'
import { Channel } from 'pusher-js'
import reportingState from '@/state/reportingState'

interface ReportingSocket {
  channel?: Channel;
  channelName: string;
  listen: () => void;
  leave: () => void;
}

const reportingSocket: ReportingSocket = {
  channelName: 'presence-reporting',

  listen () {
    if (!pusher.client) return
    this.channel = pusher.client.subscribe(this.channelName)
    this.channel.bind('reporting.created', async function (data: any) {
      const { reporting_id: reportingId } = data
      const response = await reportingRequest.read(reportingId)
      if (!response) return
      const { data: reporting } = response
      reportingState.markReportingUnseen(reporting.id)
    })
  },

  leave () {
    if (!this.channel) return
    this.channel.unsubscribe()
  }
}

export default reportingSocket
