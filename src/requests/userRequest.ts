import { isEmpty } from 'lodash'
import userHttp from '@/http/userHttp'
import userState from '@/state/userState'

export default {
  async users () {
    const response = await userHttp.users()
    if (isEmpty(response)) return
    const { data: users } = response
    userState.replaceUsers(users)
    return response
  },

  async user (id: string) {
    const response = await userHttp.user(id)
    if (isEmpty(response)) return
    const { data: user } = response
    userState.replaceUser(user)
    return response
  },

  async search (term: string) {
    if (!term) return this.users()
    const response = await userHttp.search(term)
    if (isEmpty(response)) return
    const { data: users } = response
    userState.replaceUsers(users)
    return response
  },

  async block (id: string) {
    const response = await userHttp.block(id)
    if (isEmpty(response)) return
    const { data: user } = response
    userState.amendUser(user)
    return response
  },

  async unblock (id: string) {
    const response = await userHttp.unblock(id)
    if (isEmpty(response)) return
    const { data: user } = response
    userState.amendUser(user)
    return response
  }
}
