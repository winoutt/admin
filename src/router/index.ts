import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import SignIn from '../views/SignIn.vue'
import Dashboard from '../views/Dashboard.vue'
import Users from '../views/Users.vue'
import User from '../views/User.vue'
import Reportings from '../views/Reportings.vue'
import Posts from '../views/Posts.vue'
import Post from '../views/Post.vue'
import Comments from '../views/Comments.vue'
import Comment from '../views/Comment.vue'
import Mail from '../views/Mail.vue'
import Settings from '../views/Settings.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  { path: '/', name: 'SignIn', component: SignIn, meta: { auth: false } },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, meta: { auth: true } },
  { path: '/users', name: 'Users', component: Users, meta: { auth: true, canSearch: true } },
  { path: '/users/:id', name: 'User', component: User, meta: { auth: true } },
  { path: '/reportings', name: 'Reportings', component: Reportings, meta: { auth: true } },
  { path: '/posts', name: 'Posts', component: Posts, meta: { auth: true, canSearch: true } },
  { path: '/posts/:id', name: 'Post', component: Post, meta: { auth: true } },
  { path: '/comments', name: 'Comments', component: Comments, meta: { auth: true, canSearch: true } },
  { path: '/comments/:id', name: 'Comment', component: Comment, meta: { auth: true } },
  { path: '/mail', name: 'Mail', component: Mail, meta: { auth: true } },
  { path: '/settings', name: 'Settings', component: Settings, meta: { auth: true } }
]

const router = new VueRouter({
  mode: process.env.IS_ELECTRON ? 'hash' : 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
