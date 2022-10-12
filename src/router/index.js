import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/otp',
    name: 'otp',
    component: () => import(/* webpackChunkName: "about" */ '../views/Otp.vue')
  },
  {
    path: '/userpage',
    name: 'userpage',
    component: () => import(/* webpackChunkName: "about" */ '../views/userpage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
