<script setup lang="ts">
import Hero from '../components/Hero.vue';
import LandingPageNavigation from '../components/LandingPageNavigation.vue';
import Finding from '../components/Finding.vue';
import DashboardTile from '../components/DashboardTile.vue';

const dashboards = [
    { title: "Salary vs. Player Skill", badges: [
        {label: "Great for New Users", color: "badge-warning", tooltip: "Good for users who are new to Basketball or the WNBA"},
    ], icon: "gi-money-stack", description: "Examine the relationship between player salaries and their on-court performance metrics.", actionRoute: "/dashboard/shooting-trends/player-trends" },
    { title: "Schedule Fatigue", badges: [
        {label: "Great for New Users", color: "success", tooltip: "Good for users who have some knowledge of Basketball or the WNBA"},
    ], icon: "bi-calendar3", description: "Analyze the impact of game schedules on player performance and fatigue.", actionRoute: "/dashboard/shooting-trends/player-trends" },
    { title: "Interesting Plays", badges: [
        {label: "Great for Experienced Users", color: "warning", tooltip: "Good for users who are new to Basketball or the WNBA"},
    ], icon: "gi-basketball-jersey", description: "Explore the most interesting plays and players in the WNBA", actionRoute: "/dashboard/shooting-trends/player-trends" },
    { title: "Shooting Trends", badges: [
        {label: "Great for Experienced Users", color: "badge-success", tooltip: "Good for users who have some knowledge of Basketball or the WNBA"},
    ], icon: "gi-basketball-basket", description: "Explore changes in shooting behavior across seasons at the player and team level", actionRoute: "/dashboard/shooting-trends/player-trends" },
    ];

    const findings = [
        { title: "A Move Towards More Equitable Compensation", description: "Finding text..." },
        { title: "Finding Title", description: "Finding text..." },
        { title: "Finding Title", description: "Finding text..." },
    { title: "Finding Title", description: "Finding text..." }
];

</script>

<template>
    <div className="flex flex-col items-center">
        <div id="home" className="flex flex-col items-center min-h-screen w-full">
            <LandingPageNavigation />
            <Hero />
        </div>
        <div id="dashboards" className="flex flex-col items-center px-12 mb-16 min-h-196 max-w-5xl w-full">
            <h2 className="text-3xl font-bold mb-16">Dashboards</h2>
            <div className="grid grid-cols-2 grid-flow-row gap-6 w-full justify-items-center align-items-center">
                <DashboardTile v-for="dashboard in dashboards" :key="dashboard.title" :title="dashboard.title" :badges="dashboard.badges" :icon="dashboard.icon" :description="dashboard.description" :actionRoute="dashboard.actionRoute" />
            </div>
        </div>
        <div id="findings" className="flex flex-col items-center py-6 px-12 max-w-5xl w-full">
            <h2 className="text-3xl font-bold my-12">Findings</h2>
            <div className="grid gap-12 w-full">
                <Finding v-for="finding in findings" :key="finding.title" :title="finding.title" :description="finding.description" />
            </div>
        </div>
        
    </div>
</template>