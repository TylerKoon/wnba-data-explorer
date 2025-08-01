<script setup lang="ts">
import Hero from '../components/Hero.vue';

</script>

<template>
    <div class="flex flex-col h-screen">
        <LandingPageNavigation />
        <div class="h-screen">
            <Hero />
        </div>
        <div>
            Dashboard List
        </div>
        <div>
            Findings
        </div>
        
    </div>
</template>