import { isEmpty } from 'lodash'
import authHttp from '@/http/authHttp'
import router from '@/router'

export default {
  async login (credentials: object) {
    const response = await authHttp.login(credentials)
    if (isEmpty(response) || !response.data.token) return
    router.push({ name: 'Dashboard' })
    return response
  },

  async check () {
    const response = await authHttp.check()
    if (isEmpty(response)) return
    router.push({ name: 'Dashboard' })
    return response
  }
}
