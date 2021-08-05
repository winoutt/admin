import http from './http'

export default {
  login (data: object) {
    return http.post('login', data)
  },

  check () {
    return http.get('auth/check')
  }
}
