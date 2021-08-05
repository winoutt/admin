import http from './http'

export default {
  send (mail: object) {
    return http.post('mails/send', mail)
  }
}
