<script setup lang="ts">
import Hero from '../components/Hero.vue';
import LandingPageNavigation from '../components/LandingPageNavigation.vue';

</script>

<template>
    <div className="flex flex-col">
        <div className="flex flex-col min-h-screen">
            <LandingPageNavigation />
            <Hero />
        </div>
        <div className="flex flex-col items-center py-6 min-h-196 bg-gray-200">
            <h2 className="text-3xl font-bold mb-4">Dashboards</h2>
            <ul></ul>
        </div>
        <div>
            Findings
        </div>
        
    </div>
</template>