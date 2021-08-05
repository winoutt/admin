import Pusher from 'pusher-js'

interface PusherService {
  client?: Pusher;
  boot: () => void;
}

const pusher: PusherService = {
  boot () {
    const key = process.env.VUE_APP_PUSHER_KEY || ''
    const cluster = process.env.VUE_APP_PUSHER_CLUSTER || ''
    const authEndpoint = `${process.env.VUE_APP_BACKEND_ENDPOINT}/socket/auth` || ''
    // @ts-ignore
    Pusher.Runtime.createXHR = function () {
      const xhr = new XMLHttpRequest()
      xhr.withCredentials = true
      return xhr
    }
    this.client = new Pusher(key, { cluster, authEndpoint })
  }
}

export default pusher
