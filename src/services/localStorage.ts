import store from 'store'

interface LocalStorage {
  set (value: string): any;
  get (): any;
  remove (): void;
}

function actions (key: string): LocalStorage {
  return {
    set (value: string) {
      return store.set(key, value)
    },

    get () {
      return store.get(key)
    },

    remove () {
      return store.remove(key)
    }
  }
}

const authToken: LocalStorage = actions('auth_token')

export default { authToken }
