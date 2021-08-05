import http from './http'

export default {
  posts () {
    return http.get('posts')
  },

  post (id: string) {
    return http.get(`posts/${id}`)
  },

  search (term: string) {
    return http.get('posts/search', { params: { term } })
  },

  delete (id: string) {
    return http.delete(`posts/${id}`)
  }
}
