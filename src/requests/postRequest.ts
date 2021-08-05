import { isEmpty } from 'lodash'
import postHttp from '@/http/postHttp'
import postState from '@/state/postState'

export default {
  async posts () {
    const response = await postHttp.posts()
    if (isEmpty(response)) return
    const { data: posts } = response
    postState.replacePosts(posts)
    return response
  },

  async post (id: string) {
    const response = await postHttp.post(id)
    if (isEmpty(response)) return
    const { data: post } = response
    postState.replacePost(post)
    return response
  },

  async search (term: string) {
    if (!term) return this.posts()
    const response = await postHttp.search(term)
    if (isEmpty(response)) return
    const { data: posts } = response
    postState.replacePosts(posts)
    return response
  },

  async delete (id: string) {
    const canDelete = confirm('Are you sure to delete the post?')
    if (!canDelete) return
    const response = await postHttp.delete(id)
    if (isEmpty(response)) return
    postState.pullPost(id)
    return response
  }
}
