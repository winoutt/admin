import { divide, multiply, round, some, isEmpty } from 'lodash'
import moment from 'moment'
import { shell } from 'electron'

interface Post {
  content: {
    type: string;
  };
  poll: object;
  album: [];
  caption: object;
}

export default {
  percentage (part: number, total: number) {
    return round(multiply(divide(part, total), 100), 2)
  },

  async bulkRequest (requests: any[]) {
    const responses = await Promise.all(requests)
    const isFailed = some(responses, response => isEmpty(response))
    return { responses, isFailed }
  },

  date: {
    fromNow (date: Date) {
      return moment(date).fromNow()
    },
    format (date: Date) {
      return moment(date).format('lll')
    }
  },

  post: {
    type (post: Post) {
      if (!isEmpty(post.content)) return post.content.type
      else if (!isEmpty(post.poll)) return 'poll'
      else if (!isEmpty(post.album)) return 'album'
      else if (post.caption) return 'text'
    }
  },

  isEmpty (data: any) {
    return isEmpty(data)
  },

  linkOpener (link: string) {
    shell.openExternal(link)
  }
}
