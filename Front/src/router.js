import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import login from './views/login.vue'

const routes = [
  { path: '/', component: HomePage },
  {
    path: "/login",
    name: "login",
    component: login,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
