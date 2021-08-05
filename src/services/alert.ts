import Noty from 'noty'

export default {
  show (type: 'alert' | 'success' | 'warning' | 'error' | 'info' | 'information' | undefined, text: string) {
    new Noty({
      type,
      text,
      timeout: 5000
    }).show()
  }
}
