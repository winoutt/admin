import http from './http'

export default {
  users () {
    return http.get('users')
  },

  user (id: string) {
    return http.get(`users/${id}`)
  },

  search (term: string) {
    return http.get('users/search', { params: { term } })
  },

  block (id: string) {
    return http.delete(`users/${id}/block`)
  },

  unblock (id: string) {
    return http.post(`users/${id}/unblock`)
  }
}
