import Nprogress from 'nprogress'
import appState from '../state/appState'

export default {
  initialize: function () {
    Nprogress.configure({
      showSpinner: false,
      parent: '#progress',
      minimum: 0.1
    })
  },

  start: function () {
    const progress = appState.collectProgress()
    if (!progress) Nprogress.start()
    appState.addProgress()
  },

  end: function () {
    appState.pullProgress()
    const progress = appState.collectProgress()
    if (!progress) Nprogress.done()
  }
}
