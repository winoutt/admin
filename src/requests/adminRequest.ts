import { isEmpty } from 'lodash'
import adminHttp from '@/http/adminHttp'
import alert from '@/services/alert'

export default {
  async passwordUpdate (password: object) {
    const response = await adminHttp.passwordUpdate(password)
    if (isEmpty(response)) return
    alert.show('success', 'Password updated successfully')
    return response
  }
}
