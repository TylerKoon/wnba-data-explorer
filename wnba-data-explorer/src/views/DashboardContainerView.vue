<script setup lang="ts">
import DashboardNavigation from '../components/DashboardNavigation.vue';

</script>

<template>
    <div class="flex h-screen">
        <!-- Side bar container -->
        <div class="w-64 border-r-2">
            <DashboardNavigation />
        </div>

        <!-- Dashboard page content container -->
        <div class="flex-1">
            <router-view />
        </div>
    </div>    
</template>