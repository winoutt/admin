import http from './http'

export default {
  read (id: number) {
    return http.get(`reportings/${id}`)
  },

  reportings () {
    return http.get('reportings')
  },

  delete (id: string) {
    return http.delete(`reportings/${id}`)
  },

  approve (id: string) {
    return http.post(`reportings/${id}/approve`)
  }
}
