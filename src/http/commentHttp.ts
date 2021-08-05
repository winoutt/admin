import http from './http'

export default {
  comments () {
    return http.get('comments')
  },

  comment (id: string) {
    return http.get(`comments/${id}`)
  },

  search (term: string) {
    return http.get('comments/search', { params: { term } })
  },

  delete (id: string) {
    return http.delete(`comments/${id}`)
  }
}
