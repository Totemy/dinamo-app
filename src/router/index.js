import { createRouter, createWebHistory } from 'vue-router'
import MenuPageView from '@/views/MenuPageView.vue'
import MainPage from '@/views/MainPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuPageView
    }
  ]
})

export default router
