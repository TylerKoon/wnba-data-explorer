import { createRouter, createWebHistory } from 'vue-router'
import LandingPageView from '../views/LandingPageView.vue'
import DashboardContainerView from '../views/DashboardContainerView.vue'
import DashboardView from '../views/DashboardView.vue'

const dashboardMap: Record<string, Record<string, string>> = {
  "salary": {
    "skill-vs-salary": "https://public.tableau.com/views/WeightedSkillScore_vs_SalarybyPlayer/WeightedSkillScorevs_SalaryDash",
    "salary-spend-by-team": "https://public.tableau.com/views/SalarySpendbyTeam/SalarySpendbyTeamDashboard",
    "skill-score-over-time": "https://public.tableau.com/views/PlayerWeightedSkillScoresandSalariesOverTime/WeightedSkillScoreOverTime",
    "player-distribution": "https://public.tableau.com/views/DistributionofPlayersAcrossWeightedSkillScoreSalaryAssistsBlocksStealsPointsRebounds/DistributionofPlayersAcrossWeightedSkillScoreSalaryAssistsBlocksStealsPointsRebounds",
  },
  "schedule-fatigue": {
    "league-trends": "https://public.tableau.com/views/Datasci209-FinalProjectPresentation/LeagueTrends",
    "team-performance": "https://public.tableau.com/views/Datasci209-FinalProjectPresentation/TeamPerformance"
  },
  "shooting-trends": {
    "player-trends": "https://public.tableau.com/views/w209_final_project_dashboards/PlayerDashboardV2",
    "team-trends": "https://public.tableau.com/views/w209_final_project_dashboards/TeamDashboardV2"
  },
  "interesting-plays": {
    "clutch-plays": "https://public.tableau.com/views/ClutchPlays/ClutchPlays",
    "fouls": "https://public.tableau.com/views/FoulsDashboard/FoulsDashboard"
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: LandingPageView },
    {
      path: "/dashboard/:category", 
      component: DashboardContainerView,
      redirect: '/dashboard/shooting-trends/player-trends',
      children: [
        { path: ":view", component: DashboardView, props: (route: { params: { category: string; view: string } }) => ({ tableauUrl: dashboardMap[route.params.category][route.params.view] }) }
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log("Scroll behavior triggered", to, from, savedPosition);
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  },
})

export default router
