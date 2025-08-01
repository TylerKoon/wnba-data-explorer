import { createRouter, createWebHistory } from 'vue-router'
import LandingPageView from '../views/LandingPageView.vue'
import DashboardContainerView from '../views/DashboardContainerView.vue'
import DashboardView from '../views/DashboardView.vue'

const dashboardMap: Record<string, Record<string, string>> = {
  "shooting-trends": {
    "player-trends": "https://public.tableau.com/views/midterm_presentation/PlayerDashboardV2",
    "team-trends": "https://public.tableau.com/views/midterm_presentation/TeamDashboardV2"
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: LandingPageView },
    {
      path: "/dashboard/:category", 
      component: DashboardContainerView,
      redirect: '/dashboard/test/test',
      children: [
        { path: ":view", component: DashboardView, props: (route) => ({ tableauUrl: dashboardMap[route.params.category][route.params.view] }) }
      ]
    }
  ],
})

export default router
