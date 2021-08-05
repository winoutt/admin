import http from './http'

export default {
  passwordUpdate (password: object) {
    return http.put('admins/password', password)
  }
}
