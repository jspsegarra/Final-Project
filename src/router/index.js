import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
    /*  component: HomeView*/
    },
    {
      path: '/register',
      name: 'register',
      component: () => import ('../components/Register.vue')
    }
  ]
})

export default router
