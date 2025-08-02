<script setup lang="ts">
import DashboardNavigation from '../components/DashboardNavigation.vue';

const categories = {
    "home": {
        label: "Home",
        icon: "co-home",
        route: "/"
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
        ]
    },
    "salary-vs-player-skill": {
        label: "Salary vs. Player Skill",
        icon: "gi-money-stack",
        dashboards: []
    },
    "schedule-fatigue": {
        label: "Schedule Fatigue",
        icon: "bi-calendar3",
        dashboards: []
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