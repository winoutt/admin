import { isEmpty } from 'lodash'
import localStorage from './localStorage'

export default {
  token () {
    return localStorage.authToken.get()
  },

  has () {
    return !isEmpty(this.token())
  },

  remove () {
    localStorage.authToken.remove()
  }
}
