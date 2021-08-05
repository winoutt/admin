import axios from 'axios'
import alert from '../services/alert'
import progress from '../services/progress'
import router from '@/router'

const http = axios.create({
  baseURL: `${process.env.VUE_APP_BACKEND_ENDPOINT}`,
  headers: {
    common: { 'X-Requested-With': 'XMLHttpRequest' }
  },
  withCredentials: true
})

http.interceptors.request.use(
  config => {
    progress.start()
    return config
  },
  error => {
    progress.end()
    alert.show('error', error.message)
  }
)

http.interceptors.response.use(
  response => {
    progress.end()
    return response
  },
  error => {
    progress.end()
    if (error.response) {
      const isUnauthorized = error.response.status === 401
      if (isUnauthorized) {
        const isSignInPage = router.currentRoute.name === 'SignIn'
        if (!isSignInPage) router.push({ name: 'SignIn' })
        alert.show('info', 'Please sign in')
      } else {
        alert.show('error', error.response.data.message)
      }
    } else if (error.message) {
      alert.show('error', error.message)
    } else {
      alert.show('error', 'Something went wrong')
    }
  }
)

export default http
