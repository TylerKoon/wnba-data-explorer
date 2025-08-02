<script setup lang="ts">
</script>

<template>
    <div className="hero flex-1" >
        <div className="hero-overlay flex items-center justify-center bg-base-100">
            <img src="../assets/hero.png" className="w-256 opacity-20" />
            <div class="absolute inset-12 backdrop-blur-[2px]" 
                style="mask: radial-gradient(circle, black 20%, transparent 80%);">
            </div>
        </div>
        <div className="hero-content text-center">
            
            <div className="max-w-md">
                <h1 className="text-5xl">WNBA Trends Over Time</h1>
                <p className="py-6">Explore how the game and league have changed over time through interactive dashboards and findings.</p>
                <router-link className="btn btn-primary" to="/#dashboards">Go to Dashboards</router-link>
            </div>
        </div>
    </div>
</template>