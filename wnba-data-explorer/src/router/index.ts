import { createRouter, createWebHistory } from 'vue-router'
import LandingPageView from '../views/LandingPageView.vue'
import DashboardContainerView from '../views/DashboardContainerView.vue'
import DashboardView from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: LandingPageView },
    {
      path: "/dashboard/:category", 
      component: DashboardContainerView,
      redirect: '/dashboard/test/test',
      children: [
        { path: ":view", component: DashboardView }
      ]
    }
  ],
})

export default router
