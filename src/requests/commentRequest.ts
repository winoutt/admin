import { isEmpty } from 'lodash'
import commentHttp from '@/http/commentHttp'
import commentState from '@/state/commentState'

export default {
  async comments () {
    const response = await commentHttp.comments()
    if (isEmpty(response)) return
    const { data: comments } = response
    commentState.replaceComments(comments)
    return response
  },

  async comment (id: string) {
    const response = await commentHttp.comment(id)
    if (isEmpty(response)) return
    const { data: comment } = response
    commentState.replaceComment(comment)
    return response
  },

  async search (term: string) {
    if (!term) return this.comments()
    const response = await commentHttp.search(term)
    if (isEmpty(response)) return
    const { data: comments } = response
    commentState.replaceComments(comments)
    return response
  },

  async delete (id: string) {
    const canDelete = confirm('Are you sure to delete the comment?')
    if (!canDelete) return
    const response = await commentHttp.delete(id)
    if (isEmpty(response)) return
    commentState.pullComment(id)
    return response
  }
}
