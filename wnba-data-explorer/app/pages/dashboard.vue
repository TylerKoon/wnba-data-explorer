<template>
    <div class="flex h-screen">
        <!-- Side bar container -->
        <div class="w-64 border-r-2 p-4">
            <DashboardNavigation />
        </div>

        <!-- Dashboard page content container -->
        <div class="flex-1">
            <UContainer class="p-4">
                <NuxtPage />
            </UContainer>
        </div>
    </div>
    <!-- <UContainer class="flex flex-col gap-4">
        
        <DashboardNavigation />
        <NuxtPage />
    </UContainer> -->
</template>