<script setup lang="ts">
const categories = {
    "shooting-trends": {
        label: "Shooting Trends",
        icon: "chart-bar",
        dashboards: [
            {
                label: "Player Trends",
                route: "/dashboard/shooting-trends/player-trends"
            },
            {
                label: "Team Trends",
                route: "/dashboard/shooting-trends/team-trends"
            }
        ]
    }
}

</script>

<template>
    <div class="flex flex-col h-full">
        <h2 className="text-lg font-bold p-4 bg-red-500">WNBA Data Explorer</h2>
        <ul className="menu bg-base w-full flex-1 bg-red-300">
            <li v-for="category in categories" :key="category.label">
                <details open>
                    <summary>
                        <p>{{ category.label }}</p>
                    </summary>
                    <ul>
                        <li v-for="dashboard in category.dashboards" :key="dashboard.label">
                            <router-link :to="dashboard.route">{{ dashboard.label }}</router-link>
                        </li>
                    </ul>
                </details>
            </li>
        </ul>
    </div>
</template>