<script setup lang="ts">
import DashboardNavigation from '../components/DashboardNavigation.vue';

const categories = {
    "home": {
        label: "Home",
        icon: "co-home",
        route: "/"
    },
    "salary-vs-player-skill": {
        label: "Salary vs. Player Skill",
        icon: "gi-money-stack",
        dashboards: [
            {
                label: "Skill vs. Salary",
                route: "/dashboard/salary/skill-vs-salary",
                tableau_url: "https://public.tableau.com/views/WeightedSkillScore_vs_SalarybyPlayer/WeightedSkillScorevs_SalaryDash"
            },
            {
                label: "Salary Spend by Team",
                route: "/dashboard/salary/salary-spend-by-team",
                tableau_url: "https://public.tableau.com/views/SalarySpendbyTeam/SalarySpendbyTeamDashboard"
            },
            {
                label: "Weighted Skill Score Over Time",
                route: "/dashboard/salary/skill-score-over-time",
                tableau_url: "https://public.tableau.com/views/PlayerWeightedSkillScoresandSalariesOverTime/WeightedSkillScoreOverTime"
            },
            {
                label: "Player Distribution",
                route: "/dashboard/salary/player-distribution",
                tableau_url: "https://public.tableau.com/views/DistributionofPlayersAcrossWeightedSkillScoreSalaryAssistsBlocksStealsPointsRebounds/DistributionofPlayersAcrossWeightedSkillScoreSalaryAssistsBlocksStealsPointsRebounds"
            }
        ]
    },
    "schedule-fatigue": {
        label: "Schedule Fatigue",
        icon: "bi-calendar3",
        dashboards: [
            {
                label: "League Trends",
                route: "/dashboard/schedule-fatigue/league-trends",
                tableau_url: "https://public.tableau.com/app/profile/christopher.onwuka/viz/Datasci209-FinalProjectPresentation/LeagueTrends"
            },
            {
                label: "Team Performance",
                route: "/dashboard/schedule-fatigue/team-performance",
                tableau_url: "https://public.tableau.com/app/profile/christopher.onwuka/viz/Datasci209-FinalProjectPresentation/TeamPerformance"
            }
        ]
    },
    "shooting-trends": {
        label: "Shooting Trends",
        icon: "gi-basketball-basket",
        dashboards: [
            {
                label: "Player Trends",
                route: "/dashboard/shooting-trends/player-trends",
                tableau_url: "https://public.tableau.com/views/midterm_presentation/PlayerDashboardV2"
            },
            {
                label: "Team Trends",
                route: "/dashboard/shooting-trends/team-trends",
                tableau_url: "https://public.tableau.com/views/midterm_presentation/TeamDashboardV2"
            }
        ]
    },
    "interesting-plays": {
        label: "Interesting Plays",
        icon: "gi-basketball-jersey",
        dashboards: [
            {
                label: "Clutch Plays",
                route: "/dashboard/interesting-plays/clutch-plays",
                tableau_url: "https://public.tableau.com/views/ClutchPlays/ClutchPlays"
            },
            {
                label: "Fouls",
                route: "/dashboard/interesting-plays/fouls",
                tableau_url: "https://public.tableau.com/views/FoulsDashboard/FoulsDashboard"
            }
        ]
    }
}
</script>

<template>
    <div class="flex h-screen">
        <!-- Side bar container -->
        <div class="w-64 border-r-1 border-gray-300">
            <DashboardNavigation :categories="categories" />
        </div>

        <!-- Dashboard page content container -->
        <div class="flex-1">
            <router-view />
        </div>
    </div>    
</template>