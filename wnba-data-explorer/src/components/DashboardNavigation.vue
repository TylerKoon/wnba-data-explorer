<script setup lang="ts">
defineProps({
    categories: {
        type: Object,
        required: true
    }
});

</script>

<template>
    <div class="flex flex-col h-full min-w-64">
        <h2 className="text-lg font-bold p-4 bg-red-500">WNBA Data Explorer</h2>
        <ul className="menu bg-base w-full flex-1 bg-red-300">
            <li v-for="category in categories" :key="category.label">
                <details open>
                    <summary>
                        {{ category.label }}
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