import { isEmpty } from 'lodash'
import mailHttp from '@/http/mailHttp'
import alert from '@/services/alert'

export default {
  async send (mail: object) {
    const response = await mailHttp.send(mail)
    if (isEmpty(response)) return
    alert.show('success', 'Mail sent successfully')
    return response
  }
}
